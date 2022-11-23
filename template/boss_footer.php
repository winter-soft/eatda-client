<div class="appBottomMenu">
    <div class="item <?php echo isActiveCurrentPage("boss/index.php"); ?>">
        <a href="../boss/index.php">
            <p>
                <i class="icon ion-ios-home"></i>
                <span>홈</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActiveCurrentPage("boss/order.php"); ?>">
        <a href="../boss/order.php">
            <p>
                <i class="icon ion-ios-list"></i>
                <span>주문내역</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActiveCurrentPage("store"); ?>">
        <a href="" id="storeUrl">
            <p>
                <ion-icon name="fast-food-outline"></ion-icon>
                <span>가게상세</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActiveCurrentPage("boss/ask.php"); ?>">
        <a href="../boss/ask.php">
            <p>
                <ion-icon name="call-outline"></ion-icon>
                <span>문의</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActiveCurrentPage("mypage"); ?>">
        <a href="../mypage/index.php">
            <p>
                <ion-icon name="person-outline"></ion-icon>
                <span>MY</span>
            </p>
        </a>
    </div>
</div>