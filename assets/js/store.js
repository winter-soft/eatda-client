let storeListApiUrl = "/store/?pageNumber=0&pageSize=10";

$(document).ready(function () {
    getStoreList();
});

function getStoreList() {
    const header = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYzk2ODA4MjgyN2RhNWI0MDE4MjdkYTZmOGQ5MDAwMCIsImlzcyI6ImRlbW8gYXBwIiwiaWF0IjoxNjYwMjk5NDAzLCJleHAiOjE2NjAzODU4MDN9.0IJVfvciBZebTpGo7NAuIZYEYxkH-rFwoF1kFt8btUk";
    const data = {
        "pageNumber": 1,
        "pageSize": 10
    }

    const storeList = callApi(storeListApiUrl, header, "json", "get", data);
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        storeHtml += `
        <div class="card" style="">
        <a href="">
            <img alt="image" class="image" src="${store.backgroundImageUrl}" style="max-width: 100% !important;">
            <div class="percent-box">
                <div class="green-bg text-white percent"><span>${store.id}%</span></div>
            </div>

            <div class="p-2">
                <h2 class="title font-weight-bold">${store.name}</h2>
                <p class="text-black-50 m-txt m-0 font-weight-bold">${numberFormat(store.minOrderPrice)}원만 모이면 배달 시작</p>
            </div>
        </a>
    </div>`;
    });

    $('#storeList').html(storeHtml);
}