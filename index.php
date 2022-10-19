<?php
$isLogo = true;
$isSearchBox = true;
include "template/header.php"
?>

<ul class="nav time-tab" role="tablist">
    <li class="nav-item">
        <a class="active" data-toggle="tab" href="#today-lunch" role="tab" aria-selected="true">
            오늘 점심
        </a>
    </li>
    <li class="nav-item">
        <a data-toggle="tab" href="#today-dinner" role="tab" aria-selected="false">오늘 저녁</a>
    </li>
    <li class="nav-item">
        <a data-toggle="tab" href="#tomorrow-lunch" role="tab" aria-selected="false">내일 점심</a>
    </li>
    <li class="nav-item">
        <a data-toggle="tab" href="#tomorrow-dinner" role="tab" aria-selected="false">내일 저녁</a>
    </li>
</ul>

<div class="tab-content mt-3">
    <div class="tab-pane fade active show" id="today-lunch" role="tabpanel">
        <div class="main-banner mt-2 mb-3 bg-black">
            <p>
                11시까지 주문하고<br>
                12시에 받아보세요
            </p>
            <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">
        </div>
        <ul class="nav nav-tabs size4" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#all" role="tab" aria-selected="true">
                    전체
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#dormitory1" role="tab"
                   aria-selected="false">
                    진리관
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#dormitory2" role="tab"
                   aria-selected="false">
                    웅비홀
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#dormitory3" role="tab"
                   aria-selected="false">
                    집현재
                </a>
            </li>
        </ul>
        <div class="tab-content mt-3">
            <div class="tab-pane fade active show" id="all" role="tabpanel">
                <div class="sectionTitle mb-2">
                    <div class="title">
                        <h1>새로 들어왔어요!</h1>
                    </div>
                    <div id="storeGaugeList"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="dormitory1" role="tabpanel">
                진리관
            </div>
            <div class="tab-pane fade" id="dormitory2" role="tabpanel">
                웅비홀
            </div>
            <div class="tab-pane fade" id="dormitory3" role="tabpanel">
                집현재
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="today-dinner" role="tabpanel">
        <div class="main-banner mt-2 mb-3 bg-yellow-gradient">
            <p>
                4시까지 주문하고<br>
                6시에 받아보세요
            </p>
            <!--            <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">-->
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
        <div class="main-banner mt-2 mb-3 bg-green-gradient">
            <p>
                내일 저녁을<br>
                미리 예약해보세요
            </p>
            <!--            <img src="assets/img/icon/hambuger_3d.png" alt="" class="hambuger-icon">-->
        </div>
    </div>
</div>


<?php
$_GET['jsFile'] = ["order", "index"];
include "template/footer.php";
?>
