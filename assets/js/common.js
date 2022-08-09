const API_BASE_URL = "http://api-eatda.wintersoft.kr/api";
const INDEX = "http://eatda.wintersoft.kr";
const METHOD_POST = "POST";
const METHOD_GET = "GET";
const TYPE_JSON = "json";

function callApi(url, method, data) {
    return callCommonApi(`${API_BASE_URL}${url}.php`, method, data);
}

function callExternalApi(url, method, data) {
    return callCommonApi(url, method, data);
}

function callCommonApi(url, method, data) {
    let result = "";
    $.ajax(url, {
        data: data,
        dataType: TYPE_JSON,
        method: method,
        async: false,
        success: function (resultData) {
            result = resultData;
        }
    });

    return result;
}

function redirectToIndex() {
    redirectToUrl(INDEX);
}

function redirectToUrl(url) {
    location.href = url;
}

function setCookie(name, value) {
    let expiredDays = 1;
    let expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + expiredDays);

    document.cookie = name + "=" + value + "; expires=" + expiredDate.toUTCString();
}