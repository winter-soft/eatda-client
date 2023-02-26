<?php
$headerTitle = "리뷰";
include "../template/header.php"
?>
<div>
    <div id="storeInfo"></div>
    <div class="review-info mt-5">
        <div>
            <span class="review-rate float-left">4.3</span>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" disabled/>
                <label for="star5" title="text" class="txt-yellow">5</label>
                <input type="radio" id="star4" name="rate" value="4" disabled/>
                <label for="star4" title="text" class="txt-yellow">4</label>
                <input type="radio" id="star3" name="rate" value="3" disabled/>
                <label for="star3" title="text" class="txt-yellow">3</label>
                <input type="radio" id="star2" name="rate" value="2" disabled/>
                <label for="star2" title="text" class="txt-yellow">2</label>
                <input type="radio" id="star1" name="rate" value="1" disabled/>
                <label for="star1" title="text" class="txt-yellow">1</label>
            </div>
        </div>
        <br>
        <div class="review-info-content w-100">
            <p>리뷰 <span id="reviewLength"></span>개가 있어요 :)</p>
            <div class="photo-review">
                <div class="custom-control custom-checkbox mb-1">
                    <input type="checkbox" id="photoReview" name="photoReview" class="custom-control-input" checked>
                    <label class="custom-control-label" for="photoReview">포토리뷰만 볼래요</label>
                </div>
            </div>
            <hr class="review-hr">
        </div>
    </div>

    <div class="review-detail-list" id="reviewAllList">

    </div>
</div>
<?php
$_GET['jsFile'] = ["cart", "store", "review"];
include "../template/footer.php";
?>
<script>
    $(document).ready(function () {
        const storeId = <?php echo $_GET["id"]?>;
        const response = callStoreApi(storeId);
        setStore(response.data, true);

        setReviewList(storeId);
    });
</script>