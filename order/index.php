<?php
$headerTitle = "주문완료";
include "../template/header.php"
?>
<img src="../assets/img/order/order-status.png" alt=""
<div class="mt-3">
    <p class="lg-txt txt-black font-weight-bold mt-3" id="storeName">
        배달주소 <span class="txt-yellow">*16번 라커</span>
    </p>
    <p class="txt-black mt-1">단국대학교 기숙사 진리관 로비</p>
    <div id="orderInfo"></div>

    <div class="divider mt-2 mb-2"></div>
    <div class="txt-black">
        <p class="lg-txt txt-black font-weight-bold mt-3" id="storeName"></p>
        <div class="divider mt-2 mb-2"></div>
        <div id="orderInfo"></div>
        <p><span>주문금액</span><span class="float-right total-price"></span></p>
        <p class="txt-red"><span>배달비</span><span class="float-right">0원</span></p>
        <p class="font-weight-bold"><span>총 결제금액</span><span class="float-right total-price"></span></p>
    </div>
    <div class="divider mt-4 mb-2"></div>
    <p class="txt-black"><span>결제수단</span><span class="float-right">카카오페이</span></p>
    <div class="mt-1">
        <div class="gauge mb-1">
            <div class="yellow total-price" style="width: 100%"></div>

        </div>
    </div>
</div>

<?php
$_GET['jsFile'] = "order";
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const response = callUserOrderApi(<?php echo $_GET["id"]?>);
        setStoreInfo();
        setOrderInfo(response.data);
    });
</script>