<?php
include_once '../libs/toast_sms/ToastSMS.php';

$api_key = "ycYDOLE58UEQasek";
$sendNo = "01082250640";
$rejectionNumber = "0808880389";

$phoneNumList = array("01082250640");

$toastApi = new ToastSMS($api_key, $sendNo);

/* SMS */
// 1. 단문 SMS
//$toastApi->sendSMS("SMS 테스트", $phoneNumList);
//$toastApi->sendSMS("", $phoneNumList, $options);

// 2. 인증용 SMS
$toastApi->sendAuthSMS("문자보내기 성공", $phoneNumList, toastSMS::AUTH_REQUIRED_MSG_KR);
