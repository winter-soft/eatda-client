let storeListApiUrl = "/store/?pageNumber=0&pageSize=10";

let storeList;
$(document).ready(function () {
    storeList = callStoreApi();
    setStoreGaugeList();
    callOrderListApi();
    callOrderListApi2();
});

function callStoreApi() {
    const data = {
        "pageNumber": 1,
        "pageSize": 15
    }

    return callFormTypeApi(storeListApiUrl, getEatdaToken(), METHOD_GET, data);
}

function isDealClosed(isOrderFinished, storeId) {
    if (isOrderFinished) {
        alert("이미 마감된 공동배달 딜입니다\n내일 주문 부탁드려요 :)");
    } else {
        location.href = `../../store/index.php?id=${storeId}`;
    }
}

function setStoreGaugeList() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
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
    });

    $('#storeGaugeList').html(storeHtml);
    $('#dormitory2StoreGaugeList').html(storeHtml);
}