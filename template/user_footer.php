<div class="appBottomMenu">
    <div class="item <?php echo isActivePage("/"); ?>">
        <a href="../index.php">
            <p>
                <i class="icon ion-ios-home"></i>
                <span>홈</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("cart"); ?>">
        <a href="../cart/history.php">
            <p>
                <ion-icon name="cart-outline"></ion-icon>
                <span>장바구니</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("like"); ?>">
        <a href="../like/index.php">
            <p>
				<?php echo isActivePage("like") ? '<i class="icon ion-ios-heart txt-yellow"></i>' : '<ion-icon name="heart-outline"></ion-icon>' ?>
                <span>즐겨찾기</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("history"); ?>">
        <a href="../history/index.php">
            <p>
                <i class="icon ion-ios-list"></i>
                <span>주문내역</span>
            </p>
        </a>
    </div>
    <div class="item <?php echo isActivePage("mypage"); ?>">
        <a href="../mypage/index.php">
            <p>
                <ion-icon name="person-outline"></ion-icon>
                <span>MY</span>
            </p>
        </a>
    </div>
</div>