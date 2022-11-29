<?php
$headerTitle = "문의하기";
include "../template/header.php"
?>
<div class="mt-4">
    <div class="card p-2 text-center txt-black">
        문의가 있으시다면 아래 번호로 연락주시거나<br>
        <p class="lg-txt mt-1 mb-1 font-weight-bold number-box">010-8225-0640(구지원 팀장)<br></p>

        아래 버튼 클릭 후 인스타그램 계정으로<br>
        DM 부탁드립니다.
    </div>
    <button class="btn btn-primary w-100 mt-2" onclick="moveInstagram()">인스타그램으로 연락하기</button>
</div>


<?php
$_GET['jsFile'] = "history";
include "../template/footer.php";
?>
