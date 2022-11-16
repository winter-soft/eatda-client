<!doctype html>
<html lang="ko">

<head>
    <meta charset="utf-8"/>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <title>잇다</title>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta content="대학교 기숙사생들을 위한 공동 배달 서비스" name="description">
    <meta content="잇다, 공동배달, eatda, 기숙사생 배달, 기숙사생, 단국대, 단국대 기숙사" name="keywords"/>
    <meta property="og:image" content="http://eat-da.com/assets/img/meta/kakao_og.png"/>
    <meta property="og:title" content="잇다 : EATDA">
    <meta property="og:description" content="단국대 기숙사생들 위한 공동 배달앱">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link rel="shortcut icon" href="../assets/img/icon/favicon.png" type="image/x-icon">
    <link rel="icon" href="../assets/img/icon/favicon.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="http://eat-da.com/assets/img/app_logo.png"/>
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet">
    <link href="../assets/css/style.css?<?php echo time() ?>" rel="stylesheet">
    <link href="../assets/css/custom.css?<?php echo time() ?>" rel="stylesheet">
    <script src="https://js.tosspayments.com/v1/payment"></script>
</head>

<body>

<!-- Page loading -->
<div class="loading">
    <div class="spinner-grow"></div>
</div>
<!-- * Page loading -->

<!-- App Header -->
<div class="appHeader">
    <div class="left">
		<?php
		echo !empty($isLogo) ? '<img alt="잇다" class="image" src="../assets/img/logo.png">' : '<div class="left">
    <a href="javascript:;" class="icon goBack">
      <i class="icon ion-ios-arrow-back"></i>
    </a>
  </div>';
		?>
    </div>
    <div class="pageTitle">
		<?php
		echo !empty($headerTitle) ? $headerTitle : "";
		?>
    </div>
    <div class="right">
		<?php
		echo !empty($isSearchBox) ? '<label class="mb-0 icon toggleSearchbox" for="searchInput">
            <i class="icon ion-ios-search"></i>
        </label>' : "";
		?>
    </div>
</div>
<!-- searchBox -->
<div class="searchBox">
    <form>
            <span class="inputIcon">
                <i class="icon ion-ios-search"></i>
            </span>
        <input class="form-control" id="searchInput" placeholder="저녁으로 마라탕 어떠세요?" type="text">
        <a class="toggleSearchbox closeButton" href="javascript:">
            <i class="icon ion-ios-close-circle"></i>
        </a>
    </form>
</div>
<!-- * searchBox -->
<!-- * App Header -->

<!-- App Capsule -->
<div id="appCapsule">

    <div class="appContent">