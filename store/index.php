<?php
$headerTitle = "가게 상세";
include "../template/header.php"
?>
<div>
    <div id="storeInfo"></div>
    å
    <div class="review-list" id="reviewList"></div>
    <div id="storeMenu"></div>
    <div class="store-menu-list bt-50">
        <div class="menu-box" id="menuList"></div>
    </div>
</div>
<div id="cartInfoBtn"></div>
<?php
$_GET['jsFile'] = ["cart", "store", "review"];
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const storeId = <?php echo $_GET["id"]?>;
        const response = callStoreApi(storeId);
        setStore(response.data);

        setPreviewReviewList(storeId);
    });
</script>

