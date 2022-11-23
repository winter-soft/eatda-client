<?php include "../template/login_header.php" ?>
<div class="text-center mt-5" id="loading">
    <img src="../assets/img/login/loading.gif" alt="" class="w-100">
</div>
<?php include "../template/kakao_login_footer.php"; ?>
<script>
    $(document).ready(function () {
        failOfPaymentWithToss();
    });

    function failOfPaymentWithToss() {
        const data = {
            "orderId": "<?php echo $_GET["orderId"];?>",
        };

        callFormTypeApi("/fail", '', METHOD_GET, data);
        alert("결제가 취소되었습니다");
        location.href = INDEX;
    }
</script>