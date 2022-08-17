<?php
$headerTitle = "가게 상세";
include "../template/header.php"
?>
<div>
    <img src="" alt="">
    <div class="card p-2">
        <p class="font-weight-bold bl lg-txt">단대 앞 분식집</p>
        <div class="mt-1">
            <i class="icon ion-ios-heart txt-pink mr-1"></i><span>68</span>
            <ion-icon name="people-circle-outline" class="ml-1 m-txt"></ion-icon>
            <span>65</span>
        </div>

        <div class="mt-1">
            <div class="gauge mb-1">
                <div class="green" style="width: 60%">30,000원</div>
                <div class="float-right">12,000원</div>
            </div>
            <p class="float-right text-black-50 font-weight-bold m-0 m-txt">10,000원부터 공동배달</p>
        </div>
    </div>
</div>

<?php
$_GET['jsFile'] = "search";
include "../template/footer.php";
?>
