let categoryList;
let USER_INFO_API_URL = "/auth/infor";

$(document).ready(function () {
    setUserInfo();
});

function setUserInfo() {
    const tabElementId = "#mypageTab";
    const userInfo = callUserInfoApi();

    $(`${tabElementId} img`).attr("src", userInfo.profileImageUrl);
    $(`${tabElementId} input[name='name']`).val(userInfo.username);
    $(`${tabElementId} input[name='email']`).val(userInfo.email);
}

function callUserInfoApi() {
    const response = callFormTypeApi(USER_INFO_API_URL, getEatdaToken(), METHOD_GET, {})
    return response.data;
}