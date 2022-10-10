<?php
function isActivePage($needle): string
{
	$currentPage = str_replace(basename($_SERVER["PHP_SELF"]), "", $_SERVER["REQUEST_URI"]);
	return ($currentPage == "/" && $needle == "/") || strpos($currentPage, $needle) ? "active" : "";
}

?>
</div>
</div>
<!-- appCapsule -->

<!-- App Bottom Menu -->
<div class="appBottomMenu">
    <div class="item <?php echo isActivePage("/"); ?>">
        <a href="../index.php">
            <p>
                <i class="icon ion-ios-home"></i>
                <span>홈</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("cart"); ?>">
        <a href="../cart/history.php">
            <p>
                <ion-icon name="cart-outline"></ion-icon>
                <span>장바구니</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("like"); ?>">
        <a href="../like/index.php">
            <p>
				<?php echo isActivePage("like") ? '<i class="icon ion-ios-heart txt-yellow"></i>' : '<ion-icon name="heart-outline"></ion-icon>' ?>
                <span>즐겨찾기</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("history"); ?>">
        <a href="../history/index.php">
            <p>
                <i class="icon ion-ios-list"></i>
                <span>주문내역</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("mypage"); ?>">
        <a href="../mypage/index.php">
            <p>
                <ion-icon name="person-outline"></ion-icon>
                <span>MY</span>
            </p>
        </a>
    </div>
</div>
<!-- * App Bottom Menu -->

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
<script src="../assets/js/common.js"></script>
<script src="../assets/js/api.js"></script>
<?php
if (!empty($_GET["jsFile"])) {
	?>

    <script src="../assets/js/<?php echo $_GET["jsFile"] ?>.js?<?php echo time() ?>"></script>
	<?php
}
?>

</body>

</html>