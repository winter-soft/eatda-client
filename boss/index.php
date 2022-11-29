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
            <!--            <div class="boss-order-date">2022-11-28(월) 오후 6시-->
            <!--                <span class="float-right"><ion-icon name="chevron-down-outline"></ion-icon></span></div>-->
            <!--            <div class="card p-2 mb-3">-->
            <!--                <p class="txt-black mb-1">스페셜 돈까스 외 1건 39,000원</p>-->
            <!--                <div class="row mb-1">-->
            <!--                    <button class="btn btn-dark mr-1 w-48">주문수락</button>-->
            <!--                    <button class="btn btn-success w-48">배달시작</button>-->
            <!--                </div>-->
            <!--                <div class="row mb-1">-->
            <!--                    <button class="btn btn-primary mr-1 w-48">배달완료</button>-->
            <!--                    <button class="btn btn-danger w-48">주문취소</button>-->
            <!--                </div>-->
            <!--            </div>-->

            <div class="boss-order-date">
                    <span class="font-weight-bold">
                         2022-11-28(월) 오후 6시 주문 7건
                        <span class="float-right"><ion-icon name="chevron-up-outline"></ion-icon></span>
                    </span>
            </div>
            <div class="card p-2">
                <div class="boss-order">
                    <p class="order-no">[주문번호 1] 김*영</p>
                    <div class="row order-content">
                        <p class="col-7">순두부찌개&비빔</p>
                        <p class="col-5 text-right">1개 7,500원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 2] 김*승</p>
                    <div class="row order-content">
                        <p class="col-7">참치샐러드김밥</p>
                        <p class="col-5 text-right">1개 4,500원</p>
                    </div>
                    <div class="row order-content">
                        <p class="col-7">사이다(500ml)</p>
                        <p class="col-5 text-right">1개 2,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 3] 권*영</p>
                    <div class="row order-content">
                        <p class="col-7">모다기</p>
                        <p class="col-5 text-right">1개 9,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 4] 홍*희</p>
                    <div class="row order-content">
                        <p class="col-7">라몬모다기</p>
                        <p class="col-5 text-right">1개 9,000원</p>
                    </div>
                    <div class="row order-content">
                        <p class="col-7">사이다(500ml)</p>
                        <p class="col-5 text-right">1개 2,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 5] 구*원</p>
                    <div class="row order-content">
                        <p class="col-7">날치알 톡톡김밥</p>
                        <p class="col-5 text-right">1개 5,000원</p>
                    </div>
                    <div class="row order-content">
                        <p class="col-7">얌샘감자(소)</p>
                        <p class="col-5 text-right">1개 3,500원</p>
                    </div>
                    <div class="row order-content">
                        <p class="col-7">콜라</p>
                        <p class="col-5 text-right">1개 2,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 6] 최*정</p>
                    <div class="row order-content">
                        <p class="col-7">김치찌개&비빔</p>
                        <p class="col-5 text-right">1개 8,000원</p>
                    </div>
                    <div class="row order-content">
                        <p class="col-7">사이다(500ml)</p>
                        <p class="col-5 text-right">1개 2,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">[주문번호 7] 구*서</p>
                    <div class="row order-content">
                        <p class="col-7">라돈모다기</p>
                        <p class="col-5 text-right">1개 9,000원</p>
                    </div>
                </div>
                <hr>
                <div class="boss-order">
                    <p class="order-no">
                        * 총액
                        <span class="float-right">
                        61,500원
                    </span>
                    </p>

                </div>
                <hr>
                <div class="row mb-1">
                    <button class="btn btn-dark mr-1 w-48" onclick="callOrderAccept(9)">주문수락</button>
                    <button class="btn btn-success w-48">배달시작</button>
                </div>
                <div class="row mb-1">
                    <button class="btn btn-primary mr-1 w-48">배달완료</button>
                    <button class="btn btn-danger w-48">주문취소</button>
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
