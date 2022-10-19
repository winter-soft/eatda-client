<?php
$headerTitle = "가게 상세";
include "../template/header.php"
?>
<div>
    <div id="storeInfo"></div>
    <div id="storeMenu"></div>
    <div class="store-menu-list bt-50">
        <ul class="nav time-tab" role="tablist">
            <li class="nav-item">
                <a class="active" data-toggle="tab" href="#tab1" role="tab" aria-selected="true">
                    추천 메뉴
                </a>
            </li>
            <li class="nav-item">
                <a data-toggle="tab" href="#tab2" role="tab" aria-selected="false">세트 메뉴</a>
            </li>
            <li class="nav-item">
                <a data-toggle="tab" href="#tab3" role="tab" aria-selected="false">식사류</a>
            </li>
            <li class="nav-item">
                <a data-toggle="tab" href="#tab4" role="tab" aria-selected="false">디저트</a>
            </li>
        </ul>
        <div class="menu-box" id="menuList"></div>
    </div>
</div>
<div id="cartInfoBtn"></div>
<?php
$_GET['jsFile'] = ["cart", "store"];
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const response = callStoreApi(<?php echo $_GET["id"]?>);
        setStore(response.data);
    });
</script>

