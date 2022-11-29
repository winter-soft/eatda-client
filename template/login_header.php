<?php
function isActivePage($needle): string
{
	$currentPage = str_replace(basename($_SERVER["PHP_SELF"]), "", $_SERVER["REQUEST_URI"]);
	return ($currentPage == "/" && $needle == "/") || strpos($currentPage, $needle) ? "active" : "";
}

function isActiveCurrentPage($needle): string
{
	$currentPage = $_SERVER["PHP_SELF"];
	return strpos($currentPage, $needle) ? "active" : "";
}

$bgColor = isActiveCurrentPage("auth/login") ? "bg-dark" : "";

?>
<!doctype html>
<html lang="ko">

<head>
    <meta charset="utf-8"/>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <title>잇다</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <meta content="대학교 기숙사생들을 위한 공동 배달 서비스" name="description">
    <meta content="잇다, 공동배달, eatda, 기숙사생 배달, 기숙사생, 단국대, 단국대 기숙사" name="keywords"/>
    <meta property="og:image" content="https://eat-da.com/assets/img/meta/kakao_og3.png"/>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link rel="shortcut icon" href="../assets/img/icon/favicon.png" type="image/x-icon">
    <link rel="icon" href="../assets/img/icon/favicon.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="https://eat-da.com/assets/img/app_logo.png"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet">
    <link href="../assets/css/style.css?<?php echo time() ?>" rel="stylesheet">
    <link href="../assets/css/custom.css?<?php echo time() ?>" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body class="<?php echo $bgColor; ?>">

<!-- Page loading -->
<div class="loading">
    <div class="spinner-grow"></div>
</div>
<!-- * Page loading -->

<!-- App Capsule -->
<div id="appCapsule">

    <div class="appContent <?php echo $bgColor; ?>">