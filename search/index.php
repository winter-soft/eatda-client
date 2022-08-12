<?php
$headerTitle = "메뉴 검색";
include "../template/header.php"
?>

<div class="searchBlock mt-3">
    <form>
        <span class="inputIcon">
            <i class="icon ion-ios-search"></i>
        </span>
        <input class="form-control" id="searchInput" placeholder="메뉴를 검색해보세요!" type="text">
    </form>
    <div class="mt-5">
        <div class="row mt-3" id="categoryList">

        </div>
    </div>
</div>

<?php
$_GET['jsFile'] = "search";
include "../template/footer.php";
?>
