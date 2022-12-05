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
    const deliveryTime = store.id !== 2 ? "18:00" : "18:30";

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

    window.localStorage.setItem("oid", orderId);
    showCartInfoButton();

    // 있다면 api 호출해서 정보 내려주기
    // 없다면 새로 주문 생성한 후 api 재 호출하기

    let menuHtml = "";

    $.each(storeDetail.store.menus, function (index, menu) {
        menuHtml += `
            <a href="../menu/index.php?id=${menu.id}&orderId=${orderId}" class="mt-2">
                <div class="menu row">
                    <div class="content">
                        <p class="name font-weight-bold">${menu.name}</p>
                        <p class="price">${numberFormat(menu.price)}원</p>
                    </div>
                     <div class="menu-img">
                        <img src="${menu.imageUrl}" alt="">
                    </div>
                </div>
                <hr>
            </a>
            `;
    });

    gaugeHtml = ` <div class="gauge mb-1">
                        <div class="float-right">${numberFormat(store.minOrderPrice)}원</div>
                    </div>`;
    if (store.recentlyOrder && store.recentlyOrder.currentAmount > 0) {
        let percent = store.recentlyOrder.currentAmount / store.minOrderPrice * 100;
        percent = percent > 0 && percent < 35 ? 35 : percent;
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
        <div class="card bt-70">
        <div class="p-2">
            <p class="font-weight-bold bl lg-txt text-center txt-black">${storeDetail.store.name}</p>
            <div class="mt-1">
                ${gaugeHtml}
                <p class="float-right text-black-50 font-weight-bold m-0 m-txt">${numberFormat(storeDetail.store.minOrderPrice)}원부터 공동배달</p>
            </div>
        </div>
       
        <hr class="p-0 m-0">
        <div class="row">
            <div class="col-6 border-right text-center txt-black p-2">
                <span class="font-weight-bold mr-1">주문마감</span>
                <span class="font-weight-light">17:00</span>
            </div>
            <div class="col-6 text-center txt-black p-2">
                <span class="font-weight-bold mr-1">배달시작</span>
                <span class="font-weight-light">${deliveryTime}</span>
            </div>
        </div>
    </div>
    `;

    $('#storeInfo').html(storeHtml);
    $('#menuList').html(menuHtml);

    window.localStorage.setItem("sid", store.id);
}

// 장바구니에 담긴 상품이 있을경우 하단에 정보를 노출하는 함수
function showCartInfoButton() {
    const orderId = window.localStorage.getItem("oid");
    if (orderId) {
        const response = callCartApi();
        // 장바구니에 있는 orderId와 같은지 체크
        if (response.data && response.data.length > 0) {
            if (response.data[0].order.id == orderId) {
                let menuQuantity = response.data.length;
                if (menuQuantity > 0) {
                    // 장바구니 총 가격 계산
                    let cartTotalPrice = 0;
                    $.each(response.data, function (index, menu) {
                        cartTotalPrice += menu.totalPrice;
                    });

                    // 하단에 장바구니 정보 버튼 추가
                    setCartInfoButton(menuQuantity, cartTotalPrice);
                }
            }
        }
    }
}

function setCartInfoButton(quantity, price) {
    const orderId = window.localStorage.getItem("oid");
    $(".appBottomMenu").remove();
    const cartInfoBtnHtml = `
    <button class="bottom-btn lg-txt" onclick="redirectToUrl('../cart/index.php')">
        <span class="float-left mr-2 cart-num">${quantity}</span>
        <span class="float-left cart-txt">카트보기</span>
        <span class="float-right cart-price">${numberFormat(price)}원</span>
    </button>
    `;
    $('#cartInfoBtn').html(cartInfoBtnHtml);
}