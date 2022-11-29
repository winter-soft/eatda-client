<?php
if (!empty($_COOKIE['erole']) && $_COOKIE['erole'] === "USER") {
	echo "<script>location.replace('../index.php')</script>";
}

$isLogo = true;
$isSearchBox = true;
include "../template/header.php"
?>

<div xmlns="http://www.w3.org/1999/html">
    <div class="title mt-2" id="bossInfo">
        <h5 class="boss-title">
            안녕하세요, <span class="font-weight-bold"><span class="name"></span>대표님</span> :)<br>
            <span class="text-primary font-weight-bold">기숙사생</span>들을 위한 <span class="text-primary font-weight-bold">공동배달</span>
            서비스<br>
            <span class="font-weight-bold">잇다</span>입니다.
        </h5>
    </div>
    <ul class="nav nav-tabs size2 mt-2" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#order" role="tab" aria-selected="true">
                주문내역
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#deal" role="tab"
               aria-selected="false">
                오픈된 배달 딜
            </a>
        </li>
    </ul>
    <div class="tab-content mt-1">
        <div class="tab-pane fade active show" id="order" role="tabpanel">
            <div class="boss-order-date">2022-11-28(월) 오후 6시
                <span class="float-right"><ion-icon name="chevron-down-outline"></ion-icon></span></div>
            <div class="card p-2 mb-3">
                <p class="txt-black mb-0">스페셜 돈까스 외 1건 39,000원</p>
            </div>

            <div class="boss-order-date">
                    <span class="font-weight-bold">
                         2022-11-28(월) 오후 6시
                        <span class="float-right"><ion-icon name="chevron-up-outline"></ion-icon></span>
                    </span>
            </div>
            <div class="card p-2">
                <div class="boss-order">
                    <p class="txt-black">스페셜 돈까스 외 1건 39,000원</p>
                    <p class="order-no">[주문번호 1]</p>
                    <div class="row order-content">
                        <p class="col-7">스페셜카레 돈까스(M) + 감자고로케 + 새우튀김 + 닭튀김 + 기본카레 + 밥</p>
                        <p class="col-5 text-right">2개 26,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 2]</p>
                    <div class="row order-content">
                        <p class="col-7">버섯카레 SET 버섯카레 + 돈까스 (L) + 계란후라이 + 밥</p>
                        <p class="col-5 text-right">1개 13,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">
                        * 총액
                        <span class="float-right">
                        39,000원
                    </span>
                    </p>

                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="deal" role="tabpanel">
            <div class="sectionTitle mb-2">
                <div id="storeGaugeList"></div>
            </div>
        </div>
    </div>
</div>
</div>

<?php
$_GET['jsFile'] = ["order", "index", "boss"];
include "../template/footer.php";
?>
