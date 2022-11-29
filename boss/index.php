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
        <div class="tab-pane active" id="order" role="tabpanel">
            <div id="bossOrderListHtml"></div>
        </div>

        <div class="tab-pane fade" id="deal" role="tabpanel">
            <div class="sectionTitle mb-2">
                <div id="bossOpenOrder"></div>
            </div>
        </div>
    </div>
</div>

<?php
$_GET['jsFile'] = ["order", "index", "boss"];
include "../template/footer.php";
?>
