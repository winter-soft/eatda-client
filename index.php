<?php
$isLogo = true;
$isSearchBox = true;
include "template/header.php"
?>

<div class="time-tab">
    <div class="txt-black"><span class="hl-bd">오늘 점심</span></div>
    <div>오늘 저녁</div>
    <div>내일 점심</div>
    <div>내일 저녁</div>
</div>

<div class="main-banner mt-2 mb-3">
    <p>
        11시까지 주문하고<br>
        12시에 받아보세요
    </p>
    <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">
</div>

<div class="filter">
    <div class="bg-naver">인기순</div>
    <div class="bg-yellow">필터</div>
    <div class="bg-purple">카테고리1</div>
    <div class="bg-mint">카테고리2</div>
    <div class="bg-dark-yellow">카테고리3</div>
</div>

<div class="sectionTitle mb-2">
    <div class="title">
        <h1>새로 들어왔어요!</h1>
    </div>
    <div id="storeGaugeList"></div>
</div>

<?php
$_GET['jsFile'] = "index";
include "template/footer.php";
?>
