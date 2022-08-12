let orderHistoryApiUrl = "/store/?pageNumber=0&pageSize=10";

let orderHistoryList;
$(document).ready(function () {
    orderHistoryList = callOrderHistoryApi();
    setOrderHistoryList();
});

function callOrderHistoryApi() {
    const header = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYzk2ODA4MjgyN2RhNWI0MDE4MjdkYTZmOGQ5MDAwMCIsImlzcyI6ImRlbW8gYXBwIiwiaWF0IjoxNjYwMjk5NDAzLCJleHAiOjE2NjAzODU4MDN9.0IJVfvciBZebTpGo7NAuIZYEYxkH-rFwoF1kFt8btUk";
    const data = {
        "pageNumber": 1,
        "pageSize": 10
    }

    return callApi(orderHistoryApiUrl, header, "json", "get", data);
}

function setOrderHistoryList() {
    let orderHistoryHtml = "";
    $.each(orderHistoryList.data.content, function (index, store) {
        orderHistoryHtml += `
       <div class="card mt-2 history-card">
            <div class="history-status">
                <img src="${store.backgroundImageUrl}" alt="" class="w-100">
                <p class="text-white">배달완료</p>
            </div>   
            
            <div class="p-2">
                <div class="mb-1">2022-08-13(토) 오전 02:07</div>
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${store.name}</span>
<!--                    <span class="float-right">배달완료</span>-->
                </div>
                <div class="mt-1 history-order">
                    <p class="mt-2">
                        <span>${store.menus[0].name}</span>
                        <span class="float-right">${numberFormat(store.menus[0].price)}원</span>
                    </p>
                     <p>
                        <span>${store.menus[1].name}</span>
                        <span class="float-right">${numberFormat(store.menus[1].price)}원</span>
                    </p>
                    <p class="font-weight-bold mt-2">
                        <span>합계</span>
                        <span class="float-right">${numberFormat(store.menus[0].price + store.menus[1].price)}원</span>
                    </p>
                </div>
             
                 <div class="mt-2">
                    <button class="btn btn-outline-primary w-100">리뷰 작성하기</button>
                </div>
            </div>
           
     
        </div>`;
    });

    $('#orderHistoryList').html(orderHistoryHtml);
}