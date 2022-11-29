</div>
</div>
<!-- appCapsule -->

<!-- ///////////// Js Files ////////////////////  -->
<!-- Jquery -->
<script src="../assets/js/lib/jquery-3.4.1.min.js"></script>
<!-- Bootstrap-->
<script src="../assets/js/lib/popper.min.js"></script>
<script src="../assets/js/lib/bootstrap.min.js"></script>
<!-- Owl Carousel -->
<script src="../assets/js/plugins/owl.carousel.min.js"></script>
<!-- Main Js File -->
<script src="../assets/js/app.js?221130"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script src="../assets/js/common.js"></script>
<script src="../assets/js/api.js"></script>
<script>
    var naver_id_login = new naver_id_login("wdS5u9Z7EcvhwSzO5j9x", "https://eat-da.com/auth/n_loading.php");
    // 접근 토큰 값 출력
    alert(naver_id_login.oauthParams.access_token);
    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile("naverSignInCallback()");

    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    function naverSignInCallback() {
        console.log(naver_id_login.getProfileData('email'));
        console.log(naver_id_login.getProfileData('name'));
        console.log(naver_id_login.getProfileData('profile_image'));
    }

    // TODO 유저 여부 체크하고 로그인 / 회원가입 처리
    function loginWithNaver(platformId) {
        if (isUser(PLATFORM_TYPE_NAVER, platformId)) {
            if (getEatdaToken()) {
                redirectToIndex();
            } else {

            }
        }
    }
</script>
</body>

</html>