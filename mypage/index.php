<?php
$headerTitle = "마이페이지";
include "../template/header.php"
?>

<div id="mypageTab">
    <div class="profile-img-box mb-2">
        <img alt="img" class="mt-3 mb-3" src="../assets/img/sample/draw-2.png">
    </div>

    <form>
        <div class="form-group">
            <input class="form-control" name="name" type="text" readonly>
        </div>
        <div class="form-group">
            <input class="form-control" name="phoneNumber" type="text" readonly>
        </div>
        <div class="form-group">
            <input class="form-control" name="email" type="email" readonly>
        </div>
        <div class="register-btn-box">
            <button class="btn btn-primary btn-lg btn-block" type="button" onclick="logoutWithKakao()">
                로그아웃
            </button>
        </div>
    </form>
</div>

<?php
$_GET['jsFile'] = "mypage";
include "../template/footer.php";
?>
