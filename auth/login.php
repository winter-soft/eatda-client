<?php include "../template/login_header.php" ?>
    <section id="intro-section">
        <p data-aos="zoom-in" class="sub-title">단국대학교 학생들이 만든</p>
        <div class="content">
            <p data-aos="zoom-in" class="sticker-text">
                <span class="text-yellow">기숙사생</span><span class="text-dark-gray">을 위한
                    <img src="../assets/img/welcome/new_sticker.png" alt="" class="new-sticker">
                </span>
            </p>
            <p data-aos="fade-right" data-aos-delay="500"><span class="text-white">배달비 0원</span></p>
            <p data-aos="fade-right" data-aos-delay="1000"><span class="text-white">최소주문금액 0원</span></p>
            <p data-aos="zoom-in" data-aos-delay="1500"><span class="text-yellow">공동배달 서비스</span></p>
        </div>
        <div class="title" data-aos="zoom-in" data-aos-delay="2000">잇다 : EATDA</div>
    </section>

    <!--    <div class="sectionTitle text-center mt-3 login-header">-->
    <!--        <div class="login-txt-box">-->
    <!--            <div class="lead mb-2">기숙사생들을 위한 공동배달</div>-->
    <!--            <div class="title login-title">-->
    <!--                <h1>잇다</h1>-->
    <!--            </div>-->
    <!--            <div class="login-icon">-->
    <!--                <img alt="" src="../assets/img/login/chicken_icon.png">-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->

    <div class="mt-3 btn-box">
        <button class="btn btn-lg btn-block bg-kakao sns-btn" type="button" onclick="redirectToKakaoLogin()">
            <img src="../assets/img/login/kakao_logo.png">
            카카오로 로그인
        </button>
        <!--        <div id="naver_id_login" style="display: none"></div>-->
        <!--        <button class="btn btn-lg btn-block bg-naver sns-btn" type="button" id="naverLoginBtn"-->
        <!--                onclick="loginWithNaver()">-->
        <!--            <img src="../assets/img/login/naver_logo.png">-->
        <!--            네이버로 로그인-->
        <!--        </button>-->
        <div class="text-gray font-weight-normal text-center mt-2 mb-2 text-underline" onclick="loginWithTest()">
            바로 서비스 이용하기
        </div>
    </div>

<?php include "../template/login_footer.php"; ?>