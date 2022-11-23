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
<script src="../assets/js/app.js"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script src="../assets/js/common.js"></script>
<script src="../assets/js/api.js"></script>
<script src="../assets/js/login.js?<?php echo time() ?>"></script>
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
        charset="utf-8"></script>
<?php
if (!empty($_GET["jsFile"])) {
	?>
    <script src="../assets/js/<?php echo $_GET["jsFile"] ?>.js"></script>
	<?php
}
?>
<script>
    const currentUrl = document.location.href;
    if (currentUrl.includes("loading")) {
        getKakaoToken("<?php echo empty($_GET["code"]) ? "" : $_GET["code"] ?>");
    }
</script>
</body>

</html>