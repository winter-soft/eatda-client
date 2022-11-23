<?php
$fileName = "user_footer.php";
if (!empty($_COOKIE['erole']) && $_COOKIE['erole'] == "BOSS") {
	$fileName = "boss_footer.php";
}
?>

</div>
</div>
<!-- appCapsule -->

<!-- App Bottom Menu -->
<?php
include_once $fileName;
?>
<!-- * App Bottom Menu -->
<footer>
    <p>
        <span class="title">상호명</span>
        <span>주식회사 가화</span>
    </p>
    <p>
        <span class="title">대표자명</span>
        <span>홍은석</span>
    </p>
    <p>
        <span class="title">사업자등록번호</span>
        <span>413-81-08319</span>
    </p>
    <p>
        <span class="title">사업장 주소</span>
        <span>경기도 김포시 태장로 751 테라비즈타워 512호</span>
    </p>
    <p>
        <span class="title">유선번호</span>
        <span>010-8225-0640</span>
    </p>
</footer>

<!-- ///////////// Js Files ////////////////////  -->
<!-- Jquery -->
<script src="../assets/js/lib/jquery-3.4.1.min.js"></script>
<!-- Bootstrap-->
<script src="../assets/js/lib/popper.min.js"></script>
<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
<script src="../assets/js/lib/bootstrap.min.js"></script>
<!-- Owl Carousel -->
<script src="../assets/js/plugins/owl.carousel.min.js"></script>
<!-- Main Js File -->
<script src="../assets/js/app.js"></script>
<script src="../assets/js/common.js?<?php echo time(); ?>"></script>
<script src="../assets/js/api.js"></script>
<?php
$jsFileName = $_GET["jsFile"];
if (!empty($jsFileName)) {
	$currentTime = time();
	if (is_array($jsFileName) && sizeof($jsFileName) > 1) {
		foreach ($jsFileName as $fileName) {
			echo "<script src='../assets/js/{$fileName}.js?{$currentTime}'></script>";
		}
	} else {
		echo "<script src='../assets/js/{$jsFileName}.js?{$currentTime}'></script>";
	}
}
?>

</body>

</html>