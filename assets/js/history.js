let orderHistoryApiUrl = "/orderDetail/userOrderDetail/";

let orderHistoryList;
$(document).ready(function () {
    orderHistoryList = callOrderHistoryApi();
    setOrderHistoryList();
});

function callOrderHistoryApi() {
    return callFormTypeApi(orderHistoryApiUrl, getEatdaToken(), "GET", {});
}

function setOrderHistoryList() {
    let orderHistoryHtml = "";

    if (orderHistoryList.data.length === 0) {
        orderHistoryHtml = "<p class='text-center pt-5 pb-5'>주문내역이 없습니다.</p>"
    }

    let orderHistory = orderHistoryList.data;
    let timeStr = "2022/12/02(금)";
    $.each(orderHistory, function (index, order) {
        orderHistoryHtml += `
       <div class="card mt-2 history-card" onclick="moveOrderDetailPage(${order.order.id})">
            <div class="history-status">
                <img src="${order.store.backgroundImageUrl}" alt="" class="w-100">
                <p class="text-white">${setOrderStatusString(order.order.orderStatus)}</p>
            </div>   
            
            <div class="p-2">
                <div class="mb-2">
                    <span class="history-tag bg-black mr-3p">${timeStr}</span>
                    <span class="history-tag bg-yellow">오후 6시 저녁</span>
                </div>
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${order.store.name}</span>
                    <span class="font-weight-bold float-right txt-dark-gray">웅비홀</span>
                </div>`;
        let menuList = `<div class="mt-3 history-order">`;
        let menuTotalPrice = 0;

        $.each(order.orderDetails, function (index, orderDetail) {
            menuList += `
            <div class="mt-1 history-order">
                 <p>
                    <span>${orderDetail.menu.name} ${orderDetail.quantity}개</span>
                    <span class="float-right">${numberFormat(orderDetail.totalPrice)}원</span>
                </p>
            </div>`;

            menuTotalPrice += orderDetail.totalPrice;
        });

        menuList += `<hr>  <p class="font-weight-bold mt-2">
                    <span>합계</span>
                    <span class="float-right">${numberFormat(menuTotalPrice)}원</span>
                </p></div></div></div>`;

        orderHistoryHtml += menuList;

        // orderHistoryHtml += `  <div class="mt-2">
        //             <button class="btn btn-outline-primary w-100">리뷰 작성하기</button>
        //         </div>
        //     </div>
        // </div>
        // `;


    });

    $('#orderHistoryList').html(orderHistoryHtml);
}

function moveOrderDetailPage(orderId) {
    location.href = `${INDEX}/order/index.php?id=${orderId}`;
}

function setOrderStatusString(orderStatus) {
    let status = "";
    switch (orderStatus) {
        case "WAITING":
            status = "주문 대기";
            break;
        case "ACCEPT":
            status = "주문 수락";
            break;
        case "SHIPPING":
            status = "배달중";
            break;
        case "COMPLETE":
            status = "배달 완료";
            break;
        case "CANCEL;":
            status = "주문 취소";
            break;
        default:
            break;
    }

    return status;
}