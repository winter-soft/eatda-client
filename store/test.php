<?php
$headerTitle = "가게 상세";
include "../template/header.php"
?>
<div>
    <div id="storeInfo"></div>
    <div class="review-list">
        <?php
        for ($i = 0; $i < 3; $i++) {
            ?>
            <div class="review">
                <img src="https://i.ytimg.com/vi/FWBYIIk3CuE/maxresdefault.jpg" alt="">
                <div class="rate-box">
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" disabled/>
                        <label for="star5" title="text">5</label>
                        <input type="radio" id="star4" name="rate" value="4" disabled/>
                        <label for="star4" title="text">4</label>
                        <input type="radio" id="star3" name="rate" value="3" disabled/>
                        <label for="star3" title="text">3</label>
                        <input type="radio" id="star2" name="rate" value="2" disabled/>
                        <label for="star2" title="text" class="txt-yellow">2</label>
                        <input type="radio" id="star1" name="rate" value="1" disabled/>
                        <label for="star1" title="text" class="txt-yellow">1</label>
                    </div>
                </div>
                <div class="review-content">
                    정말 맛있네요<br>
                    배달도 빠르고 ..
                </div>
            </div>
            <?php
        }
        ?>

        <div class="review-last">
            포토리뷰<br>더보기 >
        </div>

    </div>
    <div id="storeMenu"></div>
    <div class="store-menu-list bt-50">
        <div class="menu-box" id="menuList"></div>
    </div>
</div>
<div id="cartInfoBtn"></div>
<?php
$_GET['jsFile'] = ["cart", "store"];
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const response = callStoreApi(<?php echo $_GET["id"]?>);
        setStore(response.data);
    });
</script>

