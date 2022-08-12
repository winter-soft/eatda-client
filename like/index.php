<?php
$headerTitle = "즐겨찾기";
include "../template/header.php"
?>

<div class="sectionTitle mb-2 mt-2">
    <div id="storeLikeList"></div>
</div>

<?php
$_GET['jsFile'] = "like";
include "../template/footer.php";
?>
