$(document).ready(function () {
    setBossInfo();
});

let orderStatusApiUrl = "/order";

function setBossInfo() {
    const elementId = "#bossInfo";
    $(`${elementId} .name`).text(userInfo.username);
}

function callUpdateOrderStatusApi(orderId, orderStatus) {
    const data = {
        "orderStatus": orderStatus
    }
    return callApi(`${orderStatusApiUrl}/${orderId}`, getEatdaToken(), METHOD_PUT, data);
}

function callOrderAccept(orderId) {
    updateOrderStatus(orderId, ORDER_ACCEPT, "주문 수락 완료!\n주문한 학생들에게 주문 수락 알림이 발송되었습니다");
}

function updateOrderStatus(orderId, orderStatus, message) {
    const response = callUpdateOrderStatusApi(orderId, orderStatus);
    if (response.status === 200) {
        alert(message);
    }
}