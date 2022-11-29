<?php
$headerTitle = "장바구니";
include "../template/header.php"
?>

<select class="custom-select mt-2 place-select">
    <!--    <option value="1">단국대학교 기숙사 진리관 로비</option>-->
    <option value="2">단국대학교 기숙사 웅비홀 로비</option>
    <!--    <option value="3">단국대학교 기숙사 집현재 로비</option>-->
</select>

<div class="mt-2">
    <p class="lg-txt txt-black font-weight-bold" id="storeName"></p>
    <div id="cartList"></div>

    <div class="divider mt-4 mb-2"></div>
    <div id="couponBox">
        <div class="form-group row mb-3">
            <input class="form-control col-8 ml-1 mr-1" placeholder="쿠폰 등록 버튼을 눌러주세요" type="text" id="couponCode">
            <button class="btn btn-primary col-3" onclick="clickCouponModal()">등록
            </button>
        </div>
    </div>
    <div class="txt-black">
        <p><span>주문금액</span><span class="float-right total-price"></span></p>
        <p class="txt-red"><span>배달비</span><span class="float-right">0원</span></p>
        <p class="text-warning"><span>쿠폰</span><span class="float-right">0원</span></p>
        <p class="font-weight-bold"><span>총 결제금액</span><span class="float-right total-price"></span></p>
    </div>
    <!--    <div class="divider mt-4 mb-2"></div>-->
    <!--    <p class="txt-black"><span>결제수단</span><span class="float-right">카카오페이</span></p>-->
    <!--    <div class="mt-1">-->
    <!--        <div class="gauge mb-1">-->
    <!--            <div class="yellow total-price" style="width: 100%"></div>-->
    <!---->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="card p-2 mt-2 bg-light-gray mb-4">-->
    <!--        공동 배달이 가능합니다!<br>-->
    <!--        배달이 시작되면 알림을 보내드릴께요-->
    <!--    </div>-->
</div>
<div id="orderBtnBox"></div>
<!-- Modal -->
<!-- The Modal -->
<div id="couponModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div>
            <p class="txt-black font-weight-bold text-center">쿠폰 등록
                <span class="close text-right" onclick="closeCouponModal()">&times;</span>
            </p>
            <hr>
        </div>

        <div>
            <input class="form-control" placeholder="프로모션 코드 입력" type="text" id="couponCode">
            <button class="btn btn-primary w-100 mt-1">등록</button>
        </div>
    </div>

</div>

<?php
$_GET['jsFile'] = ["store", "cart"];
include "../template/order_footer.php";
?>
<script>
    const modal = document.getElementById("couponModal");
    $(document).ready(function () {
        reloadCartList();
    });

    function clickCouponModal() {
        modal.style.display = "block";
    }

    function closeCouponModal() {
        modal.style.display = "none";
    }
</script>