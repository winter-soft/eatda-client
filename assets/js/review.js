// https://eat-da.com:8000/api/review/1?page=23&size=5

const reviewApiUrl = "/review";

// 리뷰 목록 조회
function callReviewApi(storeId, page, size) {
    return callFormTypeApi(`${reviewApiUrl}/${storeId}?page=${page}&size=${size}`, getEatdaToken(), METHOD_GET, {});
}

function setPreviewReviewList(storeId) {
    const response = callReviewApi(storeId, 0, 3);
    const reviewList = response.data;

    let reviewListHtml = "";

    $.each(reviewList, function (index, review) {
        reviewListHtml += ` <div class="review">
                <img src="${review.imageUrl}" alt="">
                <div class="rate-box">
                    ${getReviewRateHtml(review.id, review.star)}
                </div>
                <div class="review-content">
                    ${review.content}
                </div>
            </div>`;
    });

    if (reviewList.length >= 3) {
        reviewListHtml += `
          <div class="review-last">
                포토리뷰<br>더보기 >
            </div>
    `;
    }
    $("#reviewList").html(reviewListHtml);
}

function getReviewRateHtml(reviewId, rate) {
    let rateHtml = "";
    for (let i = 5; i >= 1; i--) {
        rateHtml += `
            <input type="radio" id="${reviewId}-star${i}" name="rate" value="${i}" disabled/>
            <label for="star${i}" title="text" class="${i <= rate ? 'txt-yellow' : ''}">${i}</label>
        `;
    }
    rateHtml = `<div class="rate">${rateHtml}</div>`;

    return rateHtml;
}