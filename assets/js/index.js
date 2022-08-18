let storeListApiUrl = "/store/?pageNumber=0&pageSize=10";

let storeList;
$(document).ready(function () {
    storeList = callStoreApi();
    setStoreList();
    setStoreGaugeList();
    setIndexCategoryList();
});

function callStoreApi() {
    const header = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYzk2ODA4MjgyN2RhNWI0MDE4MjdkYTZmOGQ5MDAwMCIsImlzcyI6ImRlbW8gYXBwIiwiaWF0IjoxNjYwMjk5NDAzLCJleHAiOjE2NjAzODU4MDN9.0IJVfvciBZebTpGo7NAuIZYEYxkH-rFwoF1kFt8btUk";
    const data = {
        "pageNumber": 1,
        "pageSize": 10
    }

    return callFormTypeApi(storeListApiUrl, header, "GET", data);
}

function setStoreList() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        storeHtml += `
        <div class="card" style="">
        <a href="../../store/index.php?id=${store.id}">
            <img alt="image" class="image card-img" src="${store.backgroundImageUrl}">
            <div class="percent-box">
                <div class="bg-green text-white percent"><span>${store.id}%</span></div>
            </div>

            <div class="p-2">
                <h2 class="title font-weight-bold">${store.name}</h2>
                <p class="text-black-50 sm-txt m-0 font-weight-bold">${numberFormat(store.minOrderPrice)}원만 모이면 배달 시작</p>
            </div>
        </a>
    </div>`;
    });

    $('#storeList').html(storeHtml);
}

function setStoreGaugeList() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        let gaugeHtml = ` <div class="gauge mb-1">
                        <div class="float-right">${numberFormat(store.minOrderPrice)}원</div>
                    </div>`;
        if (store.recentlyOrder && store.recentlyOrder.currentAmount > 0) {
            let percent = store.recentlyOrder.currentAmount / store.minOrderPrice * 100;
            let grayGaugeHtml = `<div class="float-right">${numberFormat(store.minOrderPrice - store.recentlyOrder.currentAmount)}원</div>`;

            if (store.minOrderPrice < store.recentlyOrder.currentAmount) {
                percent = 100;
            }

            gaugeHtml = ` <div class="gauge mb-1">
                        <div class="green" style="width: ${percent}%">${numberFormat(store.recentlyOrder.currentAmount)}원</div>
                        ${percent === 100 ? "" : grayGaugeHtml}
                    </div>`;
        }

        storeHtml += `
        <a href="../../store/index.php?id=${store.id}">
        <div class="card mt-2">
            <div class="card-tag-box">
                <img src="${store.backgroundImageUrl}" alt="" class="w-100">
                <div class="card-tag"><span class="font-weight-bold">12,000원</span>만 모이면 배달 가능</div>
            </div>

            <div class="p-2">
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${store.name}</span>
                    <span class="float-right">0.9km</span>
                </div>

                <div class="mt-1">
                    <i class="icon ion-ios-heart txt-pink mr-1"></i><span>${store.likes}</span>
                    <ion-icon name="people-circle-outline" class="ml-1 m-txt"></ion-icon>
                    <span>65</span>
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