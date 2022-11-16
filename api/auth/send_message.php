<?php
include_once '../../libs/toast_sms/ToastSMS.php';

// 1. 전화번호 입력
$phoneNumber = $_POST["phoneNumber"];

// 2. api 정보
$api_key = "apikey";
$sendNo = "sendno";
$rejectionNumber = "rejectNumber";

// 3. 수신인
$phoneNumList = array($phoneNumber);
$toastApi = new ToastSMS($api_key, $sendNo);

// 4. 문자 발송
$authNum = getRandomNumber();
$toastApi->sendAuthSMS($authNum, $phoneNumList, toastSMS::AUTH_REQUIRED_MSG_KR);
echo json_encode(array("result" => true));


function getRandomNumber(): int
{
	$randomNumber = rand(1000, 9999);
	setCookieByNameAndValue("auth_num", $randomNumber);

	return $randomNumber;
}

/**
 * @param $name
 * @param $value
 */
function setCookieByNameAndValue($name, $value)
{
	setcookie($name, $value, strtotime("+5 minutes"), '/');
}