$(document).ready(function () {
    setUserInfo();
});

function setUserInfo() {
    const tabElementId = "#mypageTab";
    $(`${tabElementId} img`).attr("src", userInfo.profileImageUrl);
    $(`${tabElementId} input[name='name']`).val(userInfo.username);
    $(`${tabElementId} input[name='phoneNumber']`).val(userInfo.phoneNumber);
    $(`${tabElementId} input[name='email']`).val(userInfo.email);
}
