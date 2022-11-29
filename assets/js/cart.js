let cartApiUrl = "/orderDetail/";
let orderApiUrl = "/order";
let userOrderApiUrl = "/orderDetail/userOrder";
let validApiUrl = "/valid";
let orderQuantityApiUrl = "/orderDetail/quantity";
let couponApi = "/coupon/";

function callCartApi() {
    return callFormTypeApi(`${cartApiUrl}`, getEatdaToken(), METHOD_GET, {});
}

function callCartDeleteApi(orderDetailId) {
    return callApi(`${cartApiUrl}${orderDetailId}`, getEatdaToken(), METHOD_PUT, {});
}

function callOrderApi(orderId) {
    return callFormTypeApi(`${orderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

function callStoreApi() {
    const storeId = window.localStorage.getItem("sid");
    return callFormTypeApi(`${storeApiUrl}/${storeId}`, getEatdaToken(), METHOD_GET, {});
}

function callUpdateOrderQuantity(orderDetailId, quantity) {
    const data = {
        "quantity": quantity
    }
    return callApi(`${orderQuantityApiUrl}/${orderDetailId}`, getEatdaToken(), METHOD_PUT, data);
}

function callCouponRegisterApi(couponCode) {
    const data = {
        "couponCode": couponCode
    }
    return callApi(`${couponApi}`, getEatdaToken(), METHOD_POST, data);
}

function callCouponListApi() {
    return callFormTypeApi(`${couponApi}`, getEatdaToken(), METHOD_GET, {});
}

function clickCouponModal() {
    modal.style.display = "block";
}

function closeCouponModal() {
    modal.style.display = "none";
}

function registerCoupon() {
    const couponCode = $("#couponCode").val();
    let response = callCouponRegisterApi(couponCode);
    if (response.status === 200) {
        reloadCouponList();
        alert("쿠폰 등록이 완료되었습니다");
    } else {
        alert(response.data.message);
    }
}

function reloadCouponList() {
    const couponList = callCouponListApi();
    let couponHtml = "";

    $.each(couponList.data, function (index, coupon) {
        if (coupon.couponUse) {
            return true;
        }
        couponHtml += `<div class="border-primary coupon mt-1" onclick="applyCoupon(${coupon.id}, '${coupon.coupon.couponName}', ${coupon.coupon.couponPrice})">
                    <span>${coupon.coupon.couponName}</span>
                </div>`;
    });

    if (couponHtml === "") {
        couponHtml = "<p class='text-center mt-1'>등록된 쿠폰이 없습니다.</p>"
    }

    $("#couponList").html(couponHtml);
}

function applyCoupon(couponId, couponName, couponPrice) {
    payInfo.totalPrice = payInfo.price - couponPrice;
    payInfo.totalPrice = payInfo.totalPrice < 0 ? 0 : payInfo.totalPrice;
    payInfo.couponId = couponId;
    $("#registeredCouponCode").val(couponName);
    $(".coupon-price").text(`${numberFormat(couponPrice)}원`);
    $(".total-price").text(`${numberFormat(payInfo.totalPrice)}원`);
    closeCouponModal();
}


function setStoreInfo() {
    const store = callStoreApi().data;
    $("#storeName").text(store.name);
}

let payInfo = {};

function setCartList(cartList) {
    let cartListHtml = "";
    let totalPrice = 0;
    let optionHtml = "";
    let quantityHtml = "";
    let optionPriceHtml = "";

    if (!cartList || cartList.length == 0) {
        alert("장바구니에 메뉴를 담아주세요 :)");
        location.href = document.referrer;
    }

    $.each(cartList, function (index, cart) {
        optionHtml = "";
        quantityHtml = "";
        // 옵션이 있을경우 옵션 노출
        if (cart.orderDetailOptions != [] && cart.orderDetailOptions.length > 0) {
            $.each(cart.orderDetailOptions, function (index, option) {
                optionPriceHtml = option.menuOption.optionPrice > 0 ? `<span>(+${numberFormat(option.menuOption.optionPrice)}원)</span>` : "";
                optionHtml += `<p class="cart-option">${option.menuOption.optionName} ${optionPriceHtml}</p>`;
            });
        }

        for (let i = 1; i < 11; i++) {
            quantityHtml += getCartQuantityHtml(cart.quantity, i);
        }

        cartListHtml += `<div class="row mt-2">
        <div class="col-9 txt-black mt-1">
            <span>
            ${cart.menu.name}
            </span>
            <br>
            ${optionHtml}
            <span>${numberFormat(cart.totalPrice)}원</span>
        </div>
        <div class="col-3 mt-1">
        <span class="float-right lg-txt" onclick="deleteMenu(${cart.id}, '${cart.menu.name}')"><ion-icon name="close-outline"></ion-icon></span>
            <select class="custom-select" onchange="updateQuantity(${cart.id}, this)">
                ${quantityHtml}
            </select>
        </div>
    </div>`;

        totalPrice += cart.totalPrice;
    });

    $("#cartList").html(cartListHtml);
    $(".total-price").text(`${numberFormat(totalPrice)}원`);

    payInfo.price = totalPrice;
    payInfo.quantity = cartList.length;
    payInfo.title = payInfo.quantity === 1 ? cartList[0].menu.name : `${cartList[0].menu.name}외 ${payInfo.quantity - 1}건`;
}

function getCartQuantityHtml(cartQuantity, index) {
    return `<option value="${index}" ${cartQuantity === index ? "selected" : ""}>${index}</option>`;
}

function deleteMenu(cartId, menuName) {
    const result = confirm(`${menuName} 메뉴를 삭제하시겠습니까?`);
    if (result) {
        const response = callCartDeleteApi(cartId);
        if (response.status === 200) {
            reloadCartList();
        } else {
            alert("장바구니 메뉴 삭제에 실패하였습니다.");
        }
    }
}

function addOrderButton(orderId) {
    // const orderBtnHtml = `<button class="bottom-btn" onclick="order(${orderId})" id="payment-button">결제하기</button>`;
    const orderBtnHtml = `<button class="bottom-btn" id="payment-button" onclick="payWithToss(${orderId})">결제하기</button>`;
    $("#orderBtnBox").html(orderBtnHtml);
}

function order(orderId) {
    if (callUserOrderApi(orderId).status === 200) {
        location.href = `../order/index.php?id=${orderId}`;
    }
}

function callUserOrderApi(orderId, paymentId, couponUseId) {
    const data = {
        "paymentId": paymentId,
        "couponUseId": couponUseId
    };
    return callFormTypeApi(`${userOrderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, data);
}

function callValidApi(orderId, couponId, orderName, amount) {
    const data = {
        "order_id": orderId,
        "amount": amount,
        "order_name": orderName,
        "couponUse_id": couponId,
    };
    return callApi(`${validApiUrl}`, getEatdaToken(), METHOD_POST, data);
}

var clientKey = 'live_ck_7XZYkKL4Mrjd4XLBApo30zJwlEWR'
var tossPayments = TossPayments(clientKey)

var button = document.getElementById('payment-button') // 결제하기 버튼

function payWithToss(orderId) {
    const response = callValidApi(orderId, payInfo.couponId, payInfo.title, payInfo.price);

    if (response.status === 200) {
        tossPayments.requestPayment('카드', response.data);
    }
    // if (callUserOrderApi(orderId).status === 200) {
    //     tossPayments.requestPayment('카드', {
    //         amount: payInfo.price,
    //         orderId: 'Bd3V0mVTtXlrSJqlyIRQ4',
    //         orderName: payInfo.title,
    //         customerName: '구지뽕',
    //         successUrl: `https://eat-da.com/order/index.php?id=${orderId}`,
    //         failUrl: 'https://eat-da.com',
    //     })
    // }
}

function updateQuantity(orderDetailId, thisValue) {
    const quantity = $(thisValue).children("option:selected").val();
    const response = callUpdateOrderQuantity(orderDetailId, quantity);
    if (response.status === 200) {
        reloadCartList();
    } else {
        alert("메뉴 수량 변경 실패");
    }
}

function reloadCartList() {
    const response = callCartApi();
    setStoreInfo();
    setCartList(response.data);
    addOrderButton(response.data[0].order.id);
}

function applyCouponCode() {
    const couponCode = $("#couponCode").val();
    const response = callCouponRegisterApi(couponCode);

    if (response.status === 200) {
        reloadCartList();
    } else {
        alert(response.data.message);
    }
}

function hideCouponBox() {
    $("#couponBox").hide();
}