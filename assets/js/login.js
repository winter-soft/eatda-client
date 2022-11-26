const KAKAO_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";

const REDIRECT_URL = `${DOMAIN}/auth/loading.php`;

const kakaoResponse = {};
const PLATFORM_TYPE_KAKAO = "KAKAO";
const PLATFORM_TYPE_NAVER = "NAVER";

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

function loginWithTest() {
    if (isUser(PLATFORM_TYPE_KAKAO, 999)) {
        if (getEatdaToken()) {
            redirectToIndex();
        }
    }
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

    const response = callFormTypeExternalApi(KAKAO_TOKEN_API_URL, '', METHOD_POST, data);
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
                if (getEatdaToken()) {
                    redirectToIndex();
                }
            } else {
                kakaoResponse.id = response.id;
                kakaoResponse.name = response.kakao_account.profile.nickname;
                kakaoResponse.imageUrl = response.kakao_account.profile.thumbnail_image_url;
                kakaoResponse.email = response.kakao_account.email;

                // 화면 체인지
                let registerHtml = `    
                    <div class="sectionTitle text-center register-box mt-3">
                        <div class="title">
                            <h1>
                                기숙사생들을 위한 <span class="text-primary">공동 배달</span><br>
                                <span class="text-primary">잇다</span>에 오신 것을 환영합니다
                            </h1>
                        </div>
                    </div>
                
                    <div class="profile-img-box mb-2">
                        <img alt="img" class="mt-3 mb-3" src="${kakaoResponse.imageUrl}">
                    </div>
                
                    <form id="registerForm">
                        <div class="form-group">
                            <input type="hidden" name="role" value="USER">
                            <input type="hidden" name="platformType" value="KAKAO">
                            <input type="hidden" name="profileImageUrl" value="${kakaoResponse.imageUrl}">
                            <input type="hidden" name="platformId" value="${kakaoResponse.id}">
                            <input class="form-control" name="username" placeholder="이름을 입력해주세요" type="text" value="${kakaoResponse.name}">
                        </div>
                        <div class="form-group row pl-1" id="phone-number-input">
                            <input class="form-control col-8 mr-1" name="phoneNumber" placeholder="전화번호를 입력해주세요" type="text">
                            <button class="btn btn-primary col-3" type="button" onclick="sendAuthMessage()">인증</button>
                        </div>
                        <p id="auth-message" class="text-success"></p>
                        <div class="form-group row pl-1" id="auth-number-input" style="display: none">
                            <input class="form-control col-8 mr-1" name="authNumber" placeholder="인증번호를 입력해주세요" type="text">
                            <button class="btn btn-dark col-3" type="button" onclick="confirmAuthNumber()">확인</button>
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="email" placeholder="이메일을 입력해주세요" type="email" value="${kakaoResponse.email}">
                        </div>
                        <div class="btn-box">
                            <button class="btn btn-primary btn-lg btn-block" type="button" onclick="register()">
                                회원가입
                            </button>
                        </div>
                    </form>`;

                $("#loading").remove();
                $("#register").html(registerHtml);
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

    let response = callApi("/auth/signin", '', "POST", data);
    let isRegistered = response.status === 200;
    if (isRegistered) {
        setEatdaToken(response.data.token);
    }

    return isRegistered;
}

function register() {
    // 유효성 체크
    if (!(checkName() && checkAuth() && checkEmail()))
        return;

    let data = getFormData($("#registerForm"));
    let response = callApi("/auth/signup", '', "POST", data);
    if (response.status === 200) {
        setEatdaToken(response.data.token);
        location.href = INDEX;
    }
}


function sendAuthMessage() {
    if (!checkInputNumber()) {
        return;
    }

    const phoneNumber = $("input[name=phoneNumber]").val();
    const response = callMessageApi(phoneNumber);
    // const response = true;

    let isError = !response.result;
    if (response.result) {
        let authNumber = getCookie("auth_num");
        isError = authNumber === undefined || authNumber === "" ? true : isError;
    }

    if (isError) {
        alert("인증번호 발송에 문제가 생겼습니다.");
    }

    setAuthMessage("인증번호가 발송되었습니다.", "text-success");
    showAuthNumberInput();
}

function setAuthMessage(message, className) {
    const authMessageElement = $("#auth-message");
    authMessageElement.attr("class", "");
    authMessageElement.addClass(className);
    authMessageElement.text(message);
}

function hideAuthNumberInput() {
    $("#auth-number-input").hide();
}

function showAuthNumberInput() {
    $("#auth-number-input").show();
    $("#phone-number-input").removeClass("row pl-1");
    $("#phone-number-input input").removeClass("col-8 mr-1");
    $("#phone-number-input button").hide();
}

function callMessageApi(phoneNumber) {
    const data = {
        "phoneNumber": phoneNumber,
    }
    return callFormTypeCommonApi("/api/auth/send_message.php", '', METHOD_POST, data);
}

function checkInputNumber() {
    const phoneNumber = $("input[name=phoneNumber]").val();
    if (phoneNumber === undefined || phoneNumber === "") {
        alert("핸드폰번호를 입력해주세요")
        return false;
    }

    return true;
}

function checkAuthInputNumber() {
    const phoneNumber = $("input[name=authNumber]").val();
    if (phoneNumber === undefined || phoneNumber === "") {
        alert("인증번호를 입력해주세요");
        return false;
    }

    return true;
}

function checkAuth() {
    const isAuth = getCookie("is_auth");
    if (!isAuth) {
        alert("번호 인증을 완료해주세요.");
        return false;
    }

    return true;
}

function checkName() {
    const name = $("input[name=username]").val();
    if (name === undefined || name === "") {
        alert("이름을 입력해주세요");
        return false;
    }

    return true;
}

function checkEmail() {
    const email = $("input[name=email]").val();
    if (email === undefined || email === "") {
        alert("이메일을 입력해주세요");
        return false;
    }

    return true;
}

function confirmAuthNumber() {
    if (!checkAuthInputNumber()) {
        return;
    }

    let authNumber = getCookie("auth_num");
    let inputAuthNumber = $("input[name=authNumber]").val();

    if (authNumber != inputAuthNumber) {
        setAuthMessage("인증번호가 다릅니다. 다시 한번 확인해주세요", "text-danger");
        return;
    }

    setAuthMessage("번호 인증이 완료되었습니다.", "text-success");
    setCookie("is_auth", true);
    hideAuthNumberInput();
}