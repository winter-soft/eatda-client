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
        const data = {
            "orderId": "<?php echo $_GET["orderId"];?>",
            "paymentKey": "<?php echo $_GET["paymentKey"];?>",
            "amount": "<?php echo $_GET["amount"];?>",
        };

        const response = callFormTypeApi("/success", '', METHOD_GET, data);
        let isSuccess = false;
        if (response.status === 200) {
            const orderId = response.data.order_id;
            const orderedResponse = callUserOrderApi(orderId);
            if (orderedResponse.status === 200) {
                isSuccess = true;
                location.href = `../order/index.php?id=${orderId}`;
            }
        }

        if (!isSuccess) {
            alert("결제가 실패하였습니다.");
            location.href = INDEX;
        }

    }
</script>


