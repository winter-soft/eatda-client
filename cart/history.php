<?php
$headerTitle = "장바구니";
include "../template/header.php"
?>

<p class="text-center pt-5 pb-5">
    장바구니는 각 가게페이지에서 메뉴를 담으시면<br>
    조회가 가능합니다.
</p>

<?php
$_GET['jsFile'] = "cart";
include "../template/footer.php";
?>
