let storeListApiUrl = "/store/?pageNumber=0&pageSize=10";

let storeList;
$(document).ready(function () {
    storeList = callStoreApi();
    setStoreGaugeList();
    setIndexCategoryList();
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

function setStoreGaugeList() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        let currentAmount = store.recentlyOrder && store.recentlyOrder.currentAmount ? store.recentlyOrder.currentAmount : 0;
        let currentMinOrderPrice = store.minOrderPrice - currentAmount;
        currentMinOrderPrice = currentMinOrderPrice < 0 ? "금액 달성 완료" : `${numberFormat(currentMinOrderPrice)}원만 모이면 배달 가능`;

        let gaugeHtml = ` <div class="gauge mb-1">
                        <div class="float-right">${numberFormat(store.minOrderPrice)}원</div>
                    </div>`;
        if (store.recentlyOrder && currentAmount > 0) {
            let percent = currentAmount / store.minOrderPrice * 100;
            if (store.minOrderPrice < currentAmount) {
                percent = 100;
            }

            gaugeHtml = ` <div class="gauge mb-1">
                        <div class="green" style="width: ${percent}%">${numberFormat(currentAmount)}원</div>        
                    </div>`;
        }

        storeHtml += `
        <a href="../../store/index.php?id=${store.id}">
        <div class="card mt-2">
            <div class="card-tag-box">
                <img src="${store.backgroundImageUrl}" alt="" class="w-100">
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
        </div>
        </a>`;
    });

    $('#storeGaugeList').html(storeHtml);
}

function setIndexCategoryList() {
    const categoryList = callCategoryListApi();
    let categoryHtml = "";
    $.each(categoryList.data, function (index, category) {
        categoryHtml += `<div class="item">
            <a href="#">
                <img alt="image" src="assets/img/category/${category.category}.png">
                <p>${category.category_ko}</p>
            </a>
        </div>`;
    });
    $('#indexCategoryList').html(categoryHtml);
}