<?php
$headerTitle = "주문내역";
include "../template/header.php"
?>
<div class="mt-3">
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


<?php
$_GET['jsFile'] = "history";
include "../template/footer.php";
?>
