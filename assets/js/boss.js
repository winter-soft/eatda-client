$(document).ready(function () {
    setBossInfo();
    setOrderCardList();
    setOpenOrderCard();
});

let orderStatusApiUrl = "/order";
let bossOrderListApiUrl = "/boss/dateOrder";
let bossOrderDetailListApiUrl = "/boss";

function setBossInfo() {
    const elementId = "#bossInfo";
    $(`${elementId} .name`).text(userInfo.username);
}

function callStoreApi(storeId) {
    return callFormTypeApi(`${storeApiUrl}/${storeId}`, getEatdaToken(), METHOD_GET, {});
}

function callUpdateOrderStatusApi(orderId, orderStatus) {
    const data = {
        "orderStatus": orderStatus
    }
    return callApi(`${orderStatusApiUrl}/${orderId}`, getEatdaToken(), METHOD_PUT, data);
}

function callOrderAccept(orderId) {
    updateOrderStatus(orderId, ORDER_ACCEPT, "주문 수락 완료!\n주문한 학생들에게 주문 수락 알림이 발송되었습니다");
}

function callOrderShipping(orderId) {
    updateOrderStatus(orderId, ORDER_SHIPPING, "배달 시작!\n주문한 학생들에게 배달 시작 알림이 발송되었습니다");
}

function callOrderComplete(orderId) {
    updateOrderStatus(orderId, ORDER_COMPLETE, "배달 완료!\n주문한 학생들에게 배달 완료 알림이 발송되었습니다");
}

function callOrderCancel(orderId) {
    const result = confirm("주문 전체를 정말 취소하시겠습니까?");
    if (result) {
        updateOrderStatus(orderId, ORDER_CANCEL, "주문 취소가 되었습니다.\n주문한 학생들에게 주문 취소 알림이 발송되었습니다");
    }
}

function callBossOrderListApi(date) {
    const data = {
        "date": date
    };
    return callFormTypeApi(`${bossOrderListApiUrl}`, getEatdaToken(), METHOD_GET, data);
}

function callBossOrderDetailListApi(orderId) {
    return callFormTypeApi(`${bossOrderDetailListApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

function setOrderCardList() {
    const dateList = ['2022-11-30', '2022-12-01', '2022-12-02', '2022-12-03', '2022-12-04'];
    let orderCardHtml = "";
    $.each(dateList, function (index, date) {
        let response = callBossOrderListApi(date);
        if (!response || response.data === [] || !response.data[0] || response.data[0] === []) {
            return true;
        }
        let orderId = response.data[0].id;
        let orderColor = setOrderStatusColor(response.data[0].orderStatus);

        let orderDetailHtml = "";
        let orderDetailResponse = callBossOrderDetailListApi(orderId);
        $.each(orderDetailResponse.data, function (index, order) {
            if (index === "sumPrice") {
                orderDetailHtml += `
                <div class="boss-order mb-2">
                        <p class="order-no">
                            * 총액
                            <span class="float-right">
                                ${numberFormat(order)}원
                            </span>
                        </p>
                    </div>
                `;
                return true;
            }
            orderDetailHtml += `
             <div class="boss-order">
                <p class="order-no">[주문번호 ${index}]</p>`;

            $.each(order, function (odIndex, orderDetail) {
                let orderOptionHtml = "";
                $.each(orderDetail.orderDetailOptions, function (odoIndex, option) {
                    let optionPrice = option.menuOption.optionPrice > 0 ? ` (+${numberFormat(option.menuOption.optionPrice)}원)` : "";
                    orderOptionHtml += `<p class="boss-option">${option.menuOption.optionName}${optionPrice}</p>`;
                });
                orderDetailHtml += `
                <div class="row order-content">
                    <p class="col-7 mg-bottom-3 font-weight-bold">${orderDetail.menuName}</p>
                    <p class="col-5 text-right mg-bottom-3 font-weight-bold">${numberFormat(orderDetail.quantity)}개&nbsp;&nbsp;&nbsp;${numberFormat(orderDetail.totalPrice)}원</p>
                    <div class="ml-1">
                        ${orderOptionHtml}
                    </div>
                </div>`;
            });

            orderDetailHtml += `</div><hr>`;
        });

        orderCardHtml += `
        <div class="boss-order-date ${orderColor}">
            ${date} 저녁 주문건
<!--            <span class="float-right"><ion-icon name="chevron-down-outline"></ion-icon></span>-->
        </div>
        <div class="card p-2 mb-3">
        ${orderDetailHtml}
            <div class="row mb-1">
                <button class="btn ${ORDER_ACCEPT_COLOR} mr-1 w-48" onclick="callOrderAccept(${orderId})">주문수락</button>
                <button class="btn ${ORDER_SHIPPING_COLOR} w-48" onclick="callOrderShipping(${orderId})">배달시작</button>
            </div>
            <div class="row mb-1">
                <button class="btn ${ORDER_COMPLETE_COLOR} mr-1 w-48" onclick="callOrderComplete(${orderId})">배달완료</button>
                <button class="btn ${ORDER_CANCEL_COLOR} w-48" onclick="callOrderCancel(${orderId})">주문취소</button>
            </div>
        </div>
        `;
    });

    $("#bossOrderListHtml").html(orderCardHtml);
}

function updateOrderStatus(orderId, orderStatus, message) {
    const response = callUpdateOrderStatusApi(orderId, orderStatus);
    if (response.status === 200) {
        alert(message);
    }
}

function setOpenOrderCard() {
    const store = callStoreApi(userInfo.storeId).data;

    let storeHtml = "";
    let currentAmount = store.recentlyOrder && store.recentlyOrder.currentAmount ? store.recentlyOrder.currentAmount : 0;
    let currentMinOrderPrice = store.minOrderPrice - currentAmount;
    let isOrderFinished = store.recentlyOrder.orderStatus !== ORDER_WAITING;
    let imgStyle = isOrderFinished ? "brightness-50" : "";
    currentMinOrderPrice = isOrderFinished ? "금액 달성 완료" : `${numberFormat(currentMinOrderPrice)}원만 모이면 배달 가능`;
    let orderFinishedComment = isOrderFinished ? `<p class="deal-close-comment">공동배달 딜 마감</p>` : "";
    let orderFinishedFooterComment = isOrderFinished ? "오늘의 공동배달딜이 매진되었습니다" : "오늘 오후 7시에 주문이 마감됩니다";

    let gaugeHtml = ` <div class="gauge mb-1">
                        <div class="float-right">${numberFormat(store.minOrderPrice)}원</div>
                    </div>`;
    if (store.recentlyOrder && currentAmount > 0) {
        let percent = currentAmount / store.minOrderPrice * 100;
        percent = percent > 0 && percent < 35 ? 35 : percent;
        if (store.minOrderPrice < currentAmount) {
            percent = 100;
        }

        gaugeHtml = ` <div class="gauge mb-1">
                        <div class="green" style="width: ${percent}%">${numberFormat(currentAmount)}원</div>        
                    </div>`;
    }

    storeHtml += `
        <div onclick="isDealClosed(${isOrderFinished}, ${store.id})">
        <div class="card mt-2">
            <div class="card-tag-box">
                <img src="${store.backgroundImageUrl}" alt="" class="w-100 ${imgStyle}">
                ${orderFinishedComment}
                <div class="card-tag"><span class="font-weight-bold">${currentMinOrderPrice}</span></div>
            </div>

            <div class="p-2">
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${store.name}</span>
                </div>
                <div class="mt-1">
                    ${gaugeHtml}
                    <p class="float-right text-black-50 font-weight-bold m-0 m-txt">${numberFormat(store.minOrderPrice)}원부터 공동배달</p>
                </div>
            </div>
            <div class="p-1 card-banner">
                ${orderFinishedFooterComment}
            </div>
        </div>
        </a>`;

    $('#bossOpenOrder').html(storeHtml);
}