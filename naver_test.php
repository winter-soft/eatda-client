<?php

?>


<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>네이버 로그인</title>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
            charset="utf-8"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
</head>
<body>
<!-- 네이버 로그인 버튼 노출 영역 -->
<div id="naver_id_login" style="display: none"></div>
<!-- //네이버 로그인 버튼 노출 영역 -->
<script type="text/javascript">
    var naver_id_login = new naver_id_login("wdS5u9Z7EcvhwSzO5j9x", "https://eat-da.com/auth/n_loading.php");
    var state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2, 40);
    naver_id_login.setDomain("eat-da.com");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();

    $(document).on("click", "#naverLogin", function () {
        var btnNaverLogin = document.getElementById("naverIdLogin").firstChild;
        btnNaverLogin.click();
    });
</script>
</html>