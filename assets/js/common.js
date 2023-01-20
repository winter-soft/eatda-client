const API_BASE_URL = "https://eat-da.com:8000/api";
// const INDEX = "https://eat-da.com";
const INDEX = "http://eatda.wintersoft.kr";
const DOMAIN = location.protocol + '//' + location.host;

const REST_API_KEY = "3aa8f27ae8e8482840c63a9643a5ae8d";
const JAVASCRIPT_KEY = "c5959c11ea803f40dda051715365ab72";

const LOGOUT_REDIRECT_URL = `${DOMAIN}/auth/login.php`;
const LOGIN_URL = `${DOMAIN}/auth/login.php`;

const METHOD_POST = "POST";
const METHOD_GET = "GET";
const METHOD_PUT = "PUT";
const TYPE_JSON = "application/json; charset=utf-8";
const TYPE_FORM = "application/x-www-form-urlencoded; charset=utf-8";

const ORDER_WAITING = "WAITING";
const ORDER_ACCEPT = "ACCEPT";
const ORDER_SHIPPING = "SHIPPING";
const ORDER_COMPLETE = "COMPLETE";
const ORDER_CANCEL = "CANCEL";

const ORDER_WAITING_COLOR = "bg-gray";
const ORDER_ACCEPT_COLOR = "btn-dark";
const ORDER_SHIPPING_COLOR = "btn-primary";
const ORDER_COMPLETE_COLOR = "btn-success";
const ORDER_CANCEL_COLOR = "btn-danger";

let USER_INFO_API_URL = "/auth/infor";
let REFRESH_TOKEN_API_URL = "/auth/refresh";

const TOKEN_NAME = "eid";

let storeApiUrl = "/store";
let userInfo = {};

$(document).ready(function () {
    checkLogin();
});

function callApi(url, header, method, data) {
    return callCommonApi(`${API_BASE_URL}${url}`, header, method, data);
}

function callFormTypeApi(url, header, method, data) {
    return callFormTypeCommonApi(`${API_BASE_URL}${url}`, header, method, data);
}

function callExternalApi(url, header, method, data) {
    return callCommonApi(url, header, method, data);
}

function callFormTypeExternalApi(url, header, method, data) {
    return callFormTypeCommonApi(url, header, method, data);
}

function callCommonApi(url, header, method, data) {
    let result = "";
    let authHeader = header === '' ? '' : {'Authorization': `Bearer ${header}`};

    $.ajax(url, {
        headers: authHeader,
        dataType: "json",
        contentType: TYPE_JSON,
        data: JSON.stringify(data),
        method: method,
        async: false,
        success: function (resultData) {
            result = resultData;
        },
        fail: function (resultData) {
            result = resultData;
        }
    });

    return result;
}

function callFormTypeCommonApi(url, header, method, data) {
    let result = "";
    let authHeader = header === '' ? '' : {'Authorization': `Bearer ${header}`};

    $.ajax(url, {
        headers: authHeader,
        dataType: "json",
        contentType: TYPE_FORM,
        data: data,
        method: method,
        async: false,
        success: function (resultData) {
            result = resultData;
        },
        fail: function (resultData) {
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

    // console.log(`document.cookie = ${name} + "=" + ${value} + "; expires=" + ${expiredDate.toUTCString()}`);
    document.cookie = name + "=" + value + "; expires=" + expiredDate.toUTCString() + ";path=/";
}

function getCookie(name) {
    let x, y;
    let val = document.cookie.split(';');
    for (let i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, '');

        if (x == name) {
            return unescape(y);
        }
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

function numberFormat(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function getFormData($form) {
    let originalArray = $form.serializeArray();
    let indexedArray = {};

    $.map(originalArray, function (n, i) {
        indexedArray[n['name']] = n['value'];
    });

    return indexedArray;
}

function checkLogin() {
    if (!isLoginPage() && !getEatdaToken()) {
        location.href = LOGIN_URL;
    } else {
        if (!isLoginPage()) {
            userInfo = callUserInfoApi();
            if (userInfo.role) {
                if (getCookie("erole")) {
                    deleteCookie("erole");
                }
                setCookie("erole", userInfo.role);
                setStoreUrl();
            }
        }
    }
}

function callUserInfoApi() {
    let response = callFormTypeApi(USER_INFO_API_URL, getEatdaToken(), METHOD_GET, {});

    if (response.status != 200) { // 토큰 만료
        const refreshToken = callRefreshTokenApi();
        if (refreshToken) {
            setEatdaToken(refreshToken);
        } else {
            logout();
        }
    }

    response = callFormTypeApi(USER_INFO_API_URL, getEatdaToken(), METHOD_GET, {})
    return response.data;
}

function logout() {
    removeEatdaToken();
    if (!isLoginPage()) {
        location.href = LOGIN_URL;
    }
}

function isLoginPage() {
    const currentPath = window.location.pathname;
    return currentPath.includes("login") || currentPath.includes("loading");
}

function getCurrentUrl() {
    return window.location.href;
}

function callRefreshTokenApi() {
    const data = {
        "token": getEatdaToken()
    }

    const response = callApi(REFRESH_TOKEN_API_URL, '', METHOD_POST, data);
    return response.data.token;
}

function setEatdaToken(token) {
    window.localStorage.setItem(TOKEN_NAME, token);
}

function getEatdaToken() {
    return window.localStorage.getItem(TOKEN_NAME);
}

function removeEatdaToken() {
    window.localStorage.removeItem(TOKEN_NAME);
}

function logoutWithKakao() {
    removeEatdaToken();
    location.href = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URL}`;
}

function setStoreUrl() {
    $("#storeUrl").attr("href", `${INDEX}/store/index.php?id=${userInfo.storeId}`);
}

function moveInstagram() {
    location.href = "https://www.instagram.com/eatda_official/";
}

function setOrderStatusColor(orderStatus) {
    let color = "";
    switch (orderStatus) {
        case "WAITING":
            color = ORDER_WAITING_COLOR;
            break;
        case "ACCEPT":
            color = ORDER_ACCEPT_COLOR;
            break;
        case "SHIPPING":
            color = ORDER_SHIPPING_COLOR;
            break;
        case "COMPLETE":
            color = ORDER_COMPLETE_COLOR;
            break;
        case "CANCEL;":
            color = ORDER_CANCEL_COLOR;
            break;
        default:
            break;
    }

    return color;
}

function addCartWhenDealClosed() {
    alert("베타 서비스 기간이 종료되었습니다 :)\n겨울방학 때 돌아올 잇다를 조금만 기다려주세요");
}