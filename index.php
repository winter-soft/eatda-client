<?php
if (!empty($_COOKIE['erole']) && $_COOKIE['erole'] === "BOSS") {
	echo "<script>location.replace('boss/index.php')</script>";
}

$isLogo = true;
$isSearchBox = true;
include "template/header.php"
?>

<ul class="nav time-tab" role="tablist">
    <!--    <li class="nav-item">-->
    <!--        <a class="active" data-toggle="tab" href="#today-lunch" role="tab" aria-selected="true">-->
    <!--            오늘 점심-->
    <!--        </a>-->
    <!--    </li>-->
    <li class="nav-item">
        <a class="active" data-toggle="tab" href="#today-dinner" role="tab" aria-selected="true">오늘 저녁</a>
    </li>
    <!--    <li class="nav-item">-->
    <!--        <a data-toggle="tab" href="#tomorrow-lunch" role="tab" aria-selected="false">내일 점심</a>-->
    <!--    </li>-->
    <li class="nav-item">
        <a data-toggle="tab" href="#tomorrow-dinner" role="tab" aria-selected="false">내일 저녁</a>
    </li>
</ul>


<div class="tab-content mt-2">
    <div class="tab-pane fade" id="today-lunch" role="tabpanel">
        <div class="main-banner mt-1 mb-3 bg-black">
            <p>
                11시까지 주문하고<br>
                12시에 받아보세요
            </p>
            <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">
        </div>
    </div>
    <div class="tab-pane fade active show" id="today-dinner" role="tabpanel">
        <div class="main-banner-test mt-2 mb-1 bg-orange-gradient">
            <a href="https://www.instagram.com/eatda_official/">
                <div class="row">
                    <div class="col-1 icon">
                        <ion-icon name="information-circle-outline"></ion-icon>
                    </div>
                    <div class="col-11">베타 테스트 기간이 종료되었습니다.<br>
                        겨울방학 때 다시 돌아올 잇다를 기대해주세요!<br>
                        (버튼 클릭시 인스타그램으로 이동합니다.)<br>
                    </div>
                </div>
            </a>
        </div>
        <!--        <div class="main-banner-test mb-1 bg-black">-->
        <!--            <div class="row">-->
        <!--                <div class="col-1 icon">-->
        <!--                    <ion-icon name="information-circle-outline"></ion-icon>-->
        <!--                </div>-->
        <!--                <div class="col-11">-->
        <!--                    단국대 학생들이 직접 만든 앱입니다.<br>-->
        <!--                    오류가 발생할 수 있는 점 양해 부탁드립니다.<br><br>-->
        <!--                    결제 시 현재 신한카드, 토스, 네이버페이<br>-->
        <!--                    카카오페이, 페이코만 이용이 가능합니다.-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        <div class="main-banner-test mb-1 bg-insta-gradient">-->
        <!--            <a href="https://www.instagram.com/eatda_official/">-->
        <!--                <div class="row">-->
        <!--                    <div class="col-1 icon">-->
        <!--                        <ion-icon name="information-circle-outline"></ion-icon>-->
        <!--                    </div>-->
        <!--                    <div class="col-11">인스타그램 속 학생들의 리뷰!<br>버튼 클릭시 인스타그램으로 이동합니다.<br></div>-->
        <!--                </div>-->
        <!--            </a>-->
        <!--        </div>-->
        <ul class="nav nav-tabs size2 mt-2" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#all" role="tab" aria-selected="true">
                    전체
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#dormitory2" role="tab"
                   aria-selected="false">
                    웅비홀
                </a>
            </li>

        </ul>

        <div class="tab-content mt-3">
            <div class="tab-pane fade active show" id="all" role="tabpanel">
                <div class="sectionTitle mb-2">
                    <div class="title">
                        <h1>새로 들어왔어요!</h1>
                    </div>
                    <div>
                        <p class="text-dark mt-1">건별 주문이 이뤄지며, 게이지가 다 차지 않아도 주문이<br>시작됩니다. (하이로왕 마라탕 매주 금요일 휴무)</p>
                    </div>
                    <div id="storeGaugeList"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="dormitory1" role="tabpanel">
                <p class="text-center">오픈된 공동 배달딜이 없습니다.</p>
            </div>
            <div class="tab-pane fade" id="dormitory2" role="tabpanel">
                <div class="sectionTitle mb-2">
                    <div class="title">
                        <h1>웅비홀 로비 문앞에서 수령!</h1>
                    </div>
                    <div>
                        <p class="text-dark mt-1">웅비홀 로비 문앞으로 배송이 이뤄집니다.</p>
                    </div>
                    <div id="dormitory2StoreGaugeList"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="dormitory3" role="tabpanel">
                <p class="text-center">오픈된 공동 배달딜이 없습니다.</p>
            </div>
        </div>

    </div>
    <div class="tab-pane fade" id="tomorrow-lunch" role="tabpanel">
        <div class="main-banner mt-2 mb-3 bg-blue-gradient">
            <p>
                내일 점심을<br>
                미리 예약해보세요
            </p>
            <!--            <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">-->
        </div>
    </div>
    <div class="tab-pane fade" id="tomorrow-dinner" role="tabpanel">
        <!--        <div class="main-banner mt-2 mb-3 bg-black">-->
        <!--            <p>-->
        <!--                내일 저녁을<br>-->
        <!--                미리 예약해보세요-->
        <!--            </p>-->
        <!--        </div>-->
        <p class="text-center mt-5">
            베타 테스트 기간동안에는 <br>
            "내일 저녁 공동배달 딜"이 열리지 않습니다.
        </p>
    </div>
</div>


<?php
$_GET['jsFile'] = ["order", "index"];
include "template/footer.php";
?>
