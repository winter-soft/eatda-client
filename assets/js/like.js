let storeLikeListApiUrl = "/store/?pageNumber=0&pageSize=10";

let storeLikeList;
$(document).ready(function () {
    storeList = callStoreLikeApi();
    setStoreLikeList();
});

function callStoreLikeApi() {
    const header = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYzk2ODA4MjgyN2RhNWI0MDE4MjdkYTZmOGQ5MDAwMCIsImlzcyI6ImRlbW8gYXBwIiwiaWF0IjoxNjYwMjk5NDAzLCJleHAiOjE2NjAzODU4MDN9.0IJVfvciBZebTpGo7NAuIZYEYxkH-rFwoF1kFt8btUk";
    const data = {
        "pageNumber": 1,
        "pageSize": 10
    }

    return callFormTypeApi(storeLikeListApiUrl, header, "GET", data);
}

function setStoreLikeList() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        storeHtml += `
       <div class="card mt-2">
            <div class="card-tag-box">
                <img src="${store.backgroundImageUrl}" alt="" class="w-100">
                <div class="card-tag"><span class="font-weight-bold">12,000원</span>만 모이면 배달 가능</div>
            </div>

            <div class="p-2">
                <div class="lg-txt">
                    <span class="font-weight-bold text-dark">${store.name}</span>
                    <span class="float-right">0.9km</span>
                </div>

                <div class="mt-1">
                    <i class="icon ion-ios-heart txt-pink mr-1"></i><span>${store.likes}</span>
                    <ion-icon name="people-circle-outline" class="ml-1 m-txt"></ion-icon>
                    <span>65</span>
                </div>

                <div class="mt-1">
                    <div class="gauge mb-1">
                        <div class="green" style="width: 60%">30,000원</div>
                        <div class="float-right">12,000원</div>
                    </div>
                    <p class="float-right text-black-50 font-weight-bold m-0 m-txt">${numberFormat(store.minOrderPrice)}원부터 공동배달</p>
                </div>
            </div>
        </div>`;
    });

    $('#storeLikeList').html(storeHtml);
}