</div>
</div>
<!-- appCapsule -->

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
<script src="../assets/js/app.js?221130"></script>
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