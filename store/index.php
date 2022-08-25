<?php
$headerTitle = "가게 상세";
include "../template/header.php"
?>
<div>
    <div id="storeInfo"></div>
    <div id="storeMenu"></div>
    <div class="store-menu-list bt-50">
        <p class="title font-weight-bold txt-black lg-txt mt-1">추천 메뉴</p>
        <div class="menu-box" id="menuList"></div>
    </div>
</div>
<?php
$_GET['jsFile'] = "store";
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const response = callStoreApi(<?php echo $_GET["id"]?>);
        setStore(response.data);
    });
</script>

