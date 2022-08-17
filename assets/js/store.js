let storeApiUrl = "/store/?pageNumber=0&pageSize=10";

let store;
$(document).ready(function () {
    store = callStoreApi();
    setStore();
});

function callStoreApi() {
    const header = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYzk2ODA4MjgyN2RhNWI0MDE4MjdkYTZmOGQ5MDAwMCIsImlzcyI6ImRlbW8gYXBwIiwiaWF0IjoxNjYwMjk5NDAzLCJleHAiOjE2NjAzODU4MDN9.0IJVfvciBZebTpGo7NAuIZYEYxkH-rFwoF1kFt8btUk";
    const data = {
        "pageNumber": 1,
        "pageSize": 10
    }

    return callApi(storeApiUrl, header, "GET", data);
}

function setStore() {
    let storeHtml = "";
    $.each(storeList.data.content, function (index, store) {
        storeHtml += ``;
    });

    $('#store').html(storeHtml);
}