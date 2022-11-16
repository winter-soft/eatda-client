let cartApiUrl = "/orderDetail/";
let orderApiUrl = "/order";
let userOrderApiUrl = "/orderDetail/userOrder";

function callCartApi() {
    return callFormTypeApi(`${cartApiUrl}`, getEatdaToken(), METHOD_GET, {});
}

function callOrderApi(orderId) {
    return callFormTypeApi(`${orderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

function callStoreApi() {
    const storeId = window.localStorage.getItem("sid");
    return callFormTypeApi(`${storeApiUrl}/${storeId}`, getEatdaToken(), METHOD_GET, {});
}

function setStoreInfo() {
    const store = callStoreApi().data;
    $("#storeName").text(store.name);
}

let payInfo = {};

function setCartList(cartList) {
    let cartListHtml = "";
    let totalPrice = 0;

    $.each(cartList, function (index, cart) {
        cartListHtml += `<div class="row mt-2">
        <div class="col-9 txt-black mt-1">
            <span>${cart.menu.name}</span><br>
            <span>${numberFormat(cart.totalPrice)}원</span>
        </div>
        <div class="col-3 mt-1">
            <select class="custom-select">
                <option value="1" ${cart.quantity === 1 ? "selected" : ""}>1</option>
                <option value="2" ${cart.quantity === 2 ? "selected" : ""}>2</option>
                <option value="3" ${cart.quantity === 3 ? "selected" : ""}>3</option>
                <option value="4" ${cart.quantity === 4 ? "selected" : ""}>4</option>
                <option value="5" ${cart.quantity === 5 ? "selected" : ""}>5</option>
                <option value="6" ${cart.quantity === 6 ? "selected" : ""}>6</option>
                <option value="7" ${cart.quantity === 7 ? "selected" : ""}>7</option>
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

function callUserOrderApi(orderId) {
    return callFormTypeApi(`${userOrderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

var clientKey = 'test_ck_O6BYq7GWPVvN9lbXLbnVNE5vbo1d'
var tossPayments = TossPayments(clientKey)

var button = document.getElementById('payment-button') // 결제하기 버튼

function payWithToss(orderId) {
    if (callUserOrderApi(orderId).status === 200) {
        tossPayments.requestPayment('카드', {
            amount: payInfo.price,
            orderId: 'Bd3V0mVTtXlrSJqlyIRQ4',
            orderName: payInfo.title,
            customerName: '구지뽕',
            successUrl: `http://eat-da.com/order/index.php?id=${orderId}`,
            failUrl: 'http://eat-da.com',
        })
    }
}