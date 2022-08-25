let storeApiUrl = "/store";
let storeDetailApiUrl = "/store/storeDetail";
let addStoreOrderApiUrl = "/order";

let store;

function callStoreApi(storeId) {
    return callFormTypeApi(`${storeApiUrl}/${storeId}`, getEatdaToken(), METHOD_GET, {});
}

function callStoreDetailApi(orderId) {
    return callFormTypeApi(`${storeDetailApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

function getStoreOrderApiJson() {
    const data = {
        "currentAmount": 0,
        "destination_id": 1,
        "endTime": "2022-08-18T18:00:27.830Z",
        "orderStatus": "WAITING",
        "startTime": "2022-08-18T18:00:27.830Z"
    };
    return data;
}

function setStore(store) {
    let response = {};
    let storeDetail = {};
    let orderId = 0;
    // 최근 주문이 있는지 확인
    if (!store.recentlyOrder) {
        $.ajax(`${API_BASE_URL}${addStoreOrderApiUrl}/${store.id}`, {
            headers: {'Authorization': `Bearer ${getEatdaToken()}`},
            dataType: "json",
            contentType: TYPE_JSON,
            data: JSON.stringify(getStoreOrderApiJson()),
            method: METHOD_POST,
            async: false,
            success: function (resultData) {
                orderId = resultData.data.id;
                response = callStoreDetailApi(orderId);
                storeDetail = response.data;
            }
        });
    } else {
        orderId = store.recentlyOrder.id;
        response = callStoreDetailApi(orderId);
        storeDetail = response.data;
    }

    // 있다면 api 호출해서 정보 내려주기
    // 없다면 새로 주문 생성한 후 api 재 호출하기

    let menuHtml = "";

    $.each(storeDetail.store.menus, function (index, menu) {
        menuHtml += `
            <a href="../menu/index.php?id=${menu.id}&orderId=${orderId}">
                <div class="menu row">
                    <img src="${menu.imageUrl}"
                         alt="">
                    <div class="content">
                        <p class="name font-weight-bold">${menu.name}</p>
                        <p class="price">${numberFormat(menu.price)}원</p>
                    </div>
                </div>
            </a>
            `;
    });

    gaugeHtml = ` <div class="gauge mb-1">
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

    let storeHtml = `
        <div class="store-img-box">
            <img src="${storeDetail.store.backgroundImageUrl}" alt="">
        </div>
        <div class="card p-2 bt-70">
        <p class="font-weight-bold bl lg-txt text-center txt-black">${storeDetail.store.name}</p>
        <div class="mt-0 text-center">
            <i class="icon ion-ios-heart txt-pink mr-1"></i><span>${storeDetail.store.likes}</span>
            <ion-icon name="people-circle-outline" class="ml-1 m-txt"></ion-icon>
            <span>65</span>
        </div>

        <div class="mt-2">
            ${gaugeHtml}
            <p class="float-right text-black-50 font-weight-bold m-0 m-txt">${numberFormat(storeDetail.store.minOrderPrice)}원부터 공동배달</p>
        </div>
    </div>
    <div class="card p-2 mt-2 bg-light-gray bt-70">
        ${numberFormat(storeDetail.store.minOrderPrice)}원만 모이면 배달이 시작돼요!<br>
        당연히 배달비는 무료! 최소주문금액도 없어요
    </div>
    `;

    $('#storeInfo').html(storeHtml);
    $('#menuList').html(menuHtml);

    window.localStorage.setItem("sid", store.id);
}