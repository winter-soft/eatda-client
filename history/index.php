<?php
$headerTitle = "주문내역";
include "../template/header.php"
?>

<div class="sectionTitle mb-2 mt-2">
    <div id="orderHistoryList"></div>
</div>

<?php
$_GET['jsFile'] = "history";
include "../template/footer.php";
?>
