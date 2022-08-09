const REST_API_KEY = "3aa8f27ae8e8482840c63a9643a5ae8d";
const JAVASCRIPT_KEY = "c5959c11ea803f40dda051715365ab72";

const KAKAO_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";

const DOMAIN = location.protocol + '//' + location.host;
const REDIRECT_URL = `${DOMAIN}/auth/loading.php`;
const LOGOUT_REDIRECT_URL = `${DOMAIN}/auth/loading.php`;

const LOGIN_URL = `${DOMAIN}/auth/login.php`;
const REGISTER_URL = `${DOMAIN}/auth/register.php`;

const kakaoResponse = {};
const PLATFORM_TYPE_KAKAO = "KAKAO";

initializeKakao();

function initializeKakao() {
    Kakao.init(JAVASCRIPT_KEY);
    Kakao.isInitialized();
}

function loginWithKakao() {
    Kakao.Auth.authorize({
        redirectUri: REDIRECT_URL
    })
}

function redirectToKakaoLogin() {
    let kakaoAuthUrl = "https://kauth.kakao.com/oauth/authorize";
    location.href = `${kakaoAuthUrl}?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
}

function getKakaoToken(code) {
    let data = {
        "grant_type": "authorization_code",
        "client_id": REST_API_KEY,
        "redirect_uri": REDIRECT_URL,
        "code": code,
    };

    const response = callExternalApi(KAKAO_TOKEN_API_URL, METHOD_POST, data);
    if (response.access_token) {
        getKakaoUserInfo(response.access_token);
    } else {
        alert("카카오 로그인 에러가 발생했습니다.");
        redirectToUrl(LOGIN_URL);
    }
}

function getKakaoUserInfo(token) {
    Kakao.Auth.setAccessToken(token);
    Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
            if (isUser(PLATFORM_TYPE_KAKAO, response.id)) {
                redirectToIndex();
            } else {
                kakaoResponse.id = response.id;
                kakaoResponse.name = response.kakao_account.profile.nickname;
                kakaoResponse.imageUrl = response.kakao_account.profile.thumbnail_image_url;
                kakaoResponse.email = response.kakao_account.email;

                setCookie("_kid", kakaoResponse.id);
                console.log(kakaoResponse);
            }
        },
    });
}

function setUserDataByKakao() {
    $("#name").val(kakaoResponse.name);
    $("#profileimageUrl").val(kakaoResponse.imageUrl);
    $("#email").val(kakaoResponse.email);
    $("#platformId").val(kakaoResponse.id);
}

function isUser(platformType, platformId) {
    let data = {
        "platformId": platformId,
        "platformType": platformType
    };

    let response = callApi("/auth/signin", "json", "post", data);

    return response.status === 200;
}

function logoutWithKakao() {
    location.href = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URL}`;
}
