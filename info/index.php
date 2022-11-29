<?php
$headerTitle = "이용안내";
include "../template/header.php"
?>
<div class="main-banner-test mt-1 mg-bottom-3 bg-black mt-3">
    <div class="row">
        <div class="col-1 icon">
            1
        </div>
        <div class="col-11">홈 탭에서 열려 있는 공동배달 딜을 누릅니다.<br></div>
    </div>
</div>
<div class="main-banner-test mt-1 mg-bottom-3 bg-black">
    <div class="row">
        <div class="col-1 icon">
            2
        </div>
        <div class="col-11">먹고 싶은 메뉴를 장바구니에 담고 결제합니다.<br>(신한, 카카오페이, 토스, 페이코만 결제가능)</div>
    </div>
</div>
<div class="main-banner-test mt-1 mg-bottom-3 bg-black">
    <div class="row">
        <div class="col-1 icon">
            3
        </div>
        <div class="col-11">4시 반 딜 마감 전까지 기다리시면 됩니다.<br>배달은 7시에 시작됩니다.</div>
    </div>
</div>
<div class="main-banner-test mt-1 mg-bottom-3 bg-black">
    <div class="row">
        <div class="col-1 icon">
            4
        </div>
        <div class="col-11">배송이 완료되면 단국대 기숙사 웅비홀 로비 앞<br>검정색잇다 가방에서 찾아가시면 됩니다.</div>
    </div>
</div>
<div class="main-banner-test mt-1 mg-bottom-3 bg-dark-yellow">
    <div class="row">
        <div class="col-1 icon">
            <ion-icon name="information-circle-outline"></ion-icon>
        </div>
        <div class="col-11">문의사항이 있으시거나 주문취소를 원하시면<br>
            인스타그램 @eatda_official 계정이나<br>
            카카오톡 채널(eat-da)로 연락 부탁드립니다.
        </div>
    </div>
</div>
<?php
$_GET['jsFile'] = "like";
include "../template/footer.php";
?>
