let orderHistoryApiUrl = "/orderDetail/userOrderDetail/";

let orderHistoryList;
$(document).ready(function () {
    orderHistoryList = callOrderHistoryApi();
    setOrderHistoryList();
});

function callOrderHistoryApi() {
    return callFormTypeApi(orderHistoryApiUrl, getEatdaToken(), "GET", {});
}

function setOrderHistoryList() {
    let orderHistoryHtml = "";

    if (orderHistoryList.data.length === 0) {
        orderHistoryHtml = "<p class='text-center'>주문내역이 없습니다.</p>"
    }

    $.each(orderHistoryList.data, function (index, order) {
        console.log(order);
        orderHistoryHtml += `
       <div class="card mt-2 history-card">
            <div class="history-status">
                <img src="${order.store.backgroundImageUrl}" alt="" class="w-100">
                <p class="text-white">주문 대기</p>
            </div>   
            
            <div class="p-2">
                <div class="mb-1">2022-08-19(금) 오후 1시</div>
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${order.store.name}</span>
<!--                    <span class="float-right">배달완료</span>-->
                </div>`;
        let menuList = `<div class="mt-1 history-order">`;
        let menuTotalPrice = 0;
        $.each(order.orderDetails, function (index, orderDetail) {
            menuList += `
            <div class="mt-1 history-order">
                 <p>
                    <span>${orderDetail.menu.name} ${orderDetail.quantity}개</span>
                    <span class="float-right">${numberFormat(orderDetail.totalPrice)}원</span>
                </p>
            </div>`;

            menuTotalPrice += orderDetail.totalPrice;
        });

        menuList += `  <p class="font-weight-bold mt-2">
                    <span>합계</span>
                    <span class="float-right">${numberFormat(menuTotalPrice)}원</span>
                </p></div>`;

        orderHistoryHtml += menuList;

        orderHistoryHtml += `  <div class="mt-2">
                    <button class="btn btn-outline-primary w-100">리뷰 작성하기</button>
                </div>
            </div>
        </div>`;


    });

    $('#orderHistoryList').html(orderHistoryHtml);
}