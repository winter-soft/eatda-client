<?php
$headerTitle = "회원가입";
include "../template/header.php"
?>
    <div class="sectionTitle text-center register-box mt-3">
        <div class="title">
            <h1>
                기숙사생들을 위한 <span class="text-primary">공동 배달</span><br>
                <span class="text-primary">잇다</span>에 오신 것을 환영합니다
            </h1>
        </div>
    </div>

    <div class="profile-img-box mb-2">
        <img alt="img" class="mt-3 mb-3" src="../assets/img/sample/draw-2.png">
    </div>

    <form action="../index.php">
        <div class="form-group">
            <input class="form-control" placeholder="이름을 입력해주세요" type="text">
        </div>
        <div class="form-group">
            <input class="form-control" placeholder="이메일을 입력해주세요" type="email">
        </div>
        <div class="btn-box">
            <button class="btn btn-primary btn-lg btn-block" type="submit">
                회원가입
            </button>
        </div>
    </form>

<?php include "../template/login_footer.php" ?>