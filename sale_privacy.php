<?php
$headerTitle = "판매정책";
include "template/header.php"
?>
    <div class="mt-2 text-black">
        <p class="font-weight-bold m-0">배송안내</p><br>
        배송 방법 : 가게 측에서 직접 배달<br>
        배송 지역 : 단국대학교 기숙사 웅비홀<br>
        배송 비용 : 무료 : 주문 금액에 상관없이 배송비는 무료입니다.<br>
        배송 기간 : 매일 오후 5시 30분 ~ 오후 6시<br>
        배송 안내 :<br>

        -결제금액 상관없이 전상품 무료배송<br>
        -배송은 가게 사장님이 직접 해주십니다.<br>
        -주문하신 음식은 오후 4시 30분 주문 마감 후 바로 조리가 시작됩니다.<br>
        -주문하신 음식이 이미 조리되고 있는 경우 주문 취소가 불가합니다.<br>
    </div>
    <hr>
    <div>
        <p class="font-weight-bold m-0">환불안내</p><br>
        주문하신 음식이 조리 전 상태라면 취소가 가능합니다.
        취소를 원하실 경우 eatda.offical@gmail.com으로 전화번호를 알려주세요.
        신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이 청구되지 않게 합니다.
        (단, 신용카드 결제일자에 맞추어 대금이 청구 될수 있으면 이경우 익월 신용카드 대금청구시 카드사에서 환급처리
        됩니다.)
    </div>
    <hr>
    <div>
        <p class="font-weight-bold m-0">서비스제공기간</p><br>
        2022.11.26 ~ 2022.12.09 까지 베타 서비스 운영 기간입니다.<br>
        해당 기간동안 서비스를 제공합니다.<br>
        이 이후 정식 버전이 나올 때까지 조금만 기다려 주세요 :)
    </div>
<?php
$_GET['jsFile'] = "";
include "template/order_footer.php";
?>