let storeApiUrl = "/store";
let userOrderApiUrl = "/orderDetail/userOrderDetail";

function callStoreApi() {
    const storeId = window.localStorage.getItem("sid");
    return callFormTypeApi(`${storeApiUrl}/${storeId}`, getEatdaToken(), METHOD_GET, {});
}

function setStoreInfo() {
    const store = callStoreApi().data;
    $("#storeName").text(store.name);
}

function setOrderInfo(order) {
    let orderHtml = "";
    let totalPrice = 0;

    $.each(order.orderDetails, function (index, order) {
        orderHtml += `<p class="txt-black"><span>${order.menu.name} ${order.quantity}개</span><span class="float-right">${numberFormat(order.totalPrice)}원</span></p>`;

        totalPrice += order.totalPrice;
    });

    $("#orderInfo").html(orderHtml);
    $(".total-price").text(`${numberFormat(totalPrice)}원`);
}

function callUserOrderApi(orderId) {
    return callFormTypeApi(`${userOrderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}