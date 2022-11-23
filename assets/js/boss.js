$(document).ready(function () {
    setBossInfo();
});

function setBossInfo() {
    const elementId = "#bossInfo";
    $(`${elementId} .name`).text(userInfo.username);
}