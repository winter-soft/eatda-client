<?php
$isLogo = true;
$isSearchBox = true;
include "template/header.php"
?>

<div class="main-banner mt-2 mb-3">
    <p><span class="em-txt">단대생</span>이 <span class="em-txt">좋아</span>하는<br><span class="em-txt">맛집</span>은 어디일까요?
    </p>
</div>
<!-- Post Carousel -->
<div class="sectionTitle mb-2">
    <div class="text-muted">DEAL</div>
    <div class="title">
        <h1>배달 딜에 참여해보세요!</h1>
        <a href="">모두보기</a>
    </div>
</div>


<div id="storeList">
</div>
<!-- * Post Carousel -->


<div class="divider mt-4 mb-2"></div>

<!-- Button Carousel -->
<div class="sectionTitle mb-2">
    <div class="text-muted">CATEGORY</div>
    <div class="title">
        <h1>어떤게 드시고 싶으세요?</h1>
        <a href="">모두보기</a>
    </div>
</div>
<div id="indexCategoryList" class="mt-2">
</div>
<!-- Button Carousel -->

<div class="divider mt-2 mb-4"></div>

<div class="sectionTitle mb-2">
    <div class="text-muted em-txt font-weight-bold">배달비 · 최소주문금액 Free</div>
    <div class="title">
        <h1>골라먹는 맛집</h1>
        <a href="">모두보기</a>
    </div>
    <div id="storeGaugeList"></div>
</div>

<?php
$_GET['jsFile'] = "index";
include "template/footer.php";
?>
