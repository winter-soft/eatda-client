const API_BASE_URL = "http://api-eatda.wintersoft.kr/api";
const INDEX = "http://eatda.wintersoft.kr";
const METHOD_POST = "POST";
const METHOD_GET = "GET";
const TYPE_JSON = "application/json; charset=utf-8";
const TYPE_FORM = "application/x-www-form-urlencoded; charset=utf-8";

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
        headers: '',
        dataType: "json",
        contentType: TYPE_JSON,
        data: JSON.stringify(data),
        method: method,
        async: false,
        success: function (resultData) {
            result = resultData;
        }
    });

    return result;
}

function callFormTypeCommonApi(url, header, method, data) {
    let result = "";
    let authHeader = header === '' ? '' : {'Authorization': `Bearer ${header}`};

    $.ajax(url, {
        headers: '',
        dataType: "json",
        contentType: TYPE_FORM,
        data: data,
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

    console.log(`document.cookie = ${name} + "=" + ${value} + "; expires=" + ${expiredDate.toUTCString()}`);
    document.cookie = name + "=" + value + "; expires=" + expiredDate.toUTCString();
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