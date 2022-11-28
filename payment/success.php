<?php include "../template/login_header.php" ?>
<div class="text-center mt-5" id="loading">
    <img src="../assets/img/login/loading.gif" alt="" class="w-100">
</div>
<?php include "../template/kakao_login_footer.php"; ?>
<script src="../assets/js/cart.js"></script>
<script>
    $(document).ready(function () {
        successOfPaymentWithToss();
    });

    function successOfPaymentWithToss() {
        let couponUseId = "<?php echo empty($_GET["couponUseId"]) ? 0 : $_GET["couponUseId"]?>";
        couponUseId = couponUseId === "" ? 0 : parseInt(couponUseId);
        const tossOrderId = "<?php echo $_GET["orderId"];?>";
        const paymentId = "<?php echo $_GET["paymentKey"];?>";

        const data = {
            "orderId": tossOrderId,
            "paymentKey": paymentId,
            "amount": "<?php echo $_GET["amount"];?>",
        };

        const response = callFormTypeApi("/success", '', METHOD_GET, data);
        let isSuccess = false;
        if (response.status === 200) {
            const orderId = response.data.order_id;
            const orderedResponse = callUserOrderApi(orderId, tossOrderId, couponUseId);
            if (orderedResponse.status === 200) {
                isSuccess = true;
                location.href = `../order/index.php?id=${orderId}`;
            }
        }

        if (!isSuccess) {
            alert("결제가 실패하였습니다.");
            // location.href = INDEX;
        }

    }
</script>


