<?php
$headerTitle = "메뉴 상세";
include "../template/header.php"
?>

<div id="menu"></div>
<div id="addCartBtn"></div>

<?php
$_GET['jsFile'] = ["cart", "menu"];
include "../template/order_footer.php";
?>
<script>
    $(document).ready(function () {
        const response = callMenuApi(<?php echo $_GET["id"]?>);
        setMenu(response.data);
        setAddCartButton(<?php echo $_GET["id"]?>, <?php echo $_GET["orderId"]?>);
    });
</script>