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
<div class="buttonCarousel owl-carousel">
    <div class="item">
        <a href="#">
            <div class="imgWrapper">
                <img alt="image" src="assets/img/category/c1.png">
            </div>
            <strong>한식</strong>
        </a>
    </div>
    <div class="item">
        <a href="#">
            <div class="imgWrapper">
                <img alt="image" src="assets/img/category/c2.png">
            </div>
            <strong>햄버거</strong>
        </a>
    </div>
    <div class="item">
        <a href="#">
            <div class="imgWrapper">
                <img alt="image" src="assets/img/category/c3.png">
            </div>
            <strong>치킨</strong>
        </a>
    </div>
    <div class="item">
        <a href="#">
            <div class="imgWrapper">
                <img alt="image" src="assets/img/category/c4.png">
            </div>
            <strong>디저트</strong>
        </a>
    </div>
    <div class="item">
        <a href="#">
            <div class="imgWrapper">
                <img alt="image" src="assets/img/category/c5.png">
            </div>
            <strong>커피/차</strong>
        </a>
    </div>
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
$_GET['jsFile'] = "store";
include "template/footer.php";
?>
