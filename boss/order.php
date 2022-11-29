<?php
$headerTitle = "주문내역";
include "../template/header.php"
?>
<div id="bossOrderListHtml" class="mt-3"></div>

<?php
$_GET['jsFile'] = ["order", "index", "boss"];
include "../template/footer.php";
?>
