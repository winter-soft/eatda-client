let userOrderApiUrl = "/orderDetail/userOrderDetail";
let orderListApiUrl = "/order/time";

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
    let optionHtml = "";

    $.each(order[0].orderDetails, function (index, order) {
        optionHtml = "";
        $.each(order.orderDetailOptions, function (optionIndex, option) {
            optionHtml += `<p class="mg-bottom-3">${option.menuOption.optionName}<span class="float-right">${numberFormat(option.menuOption.optionPrice)}원</span></p>`;
        });
        orderHtml += `
        <p class="txt-black"><span>${order.menu.name} ${order.quantity}개</span><span class="float-right">${numberFormat(order.totalPrice)}원</span></p>
        <div>${optionHtml}</div>
        `;

        totalPrice += order.totalPrice;
    });
    

    $("#orderInfo").html(orderHtml);
    $(".total-price").text(`${numberFormat(totalPrice)}원`);
}

function callUserOrderApi(orderId) {
    return callFormTypeApi(`${userOrderApiUrl}/${orderId}`, getEatdaToken(), METHOD_GET, {});
}

function callOrderListApi() {
    return callFormTypeApi(`${orderListApiUrl}/1/0`, getEatdaToken(), METHOD_GET, {});
}

function callOrderListApi2() {
    return callFormTypeApi(`${orderListApiUrl}/0`, getEatdaToken(), METHOD_GET, {});
}