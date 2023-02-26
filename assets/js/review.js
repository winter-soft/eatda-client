// https://eat-da.com:8000/api/review/1?page=23&size=5

const reviewApiUrl = "/review";

// 리뷰 목록 조회
function callReviewApi(storeId, page, size) {
    return callFormTypeApi(`${reviewApiUrl}/${storeId}?page=${page}&size=${size}`, getEatdaToken(), METHOD_GET, {});
}

function setPreviewReviewList(storeId) {
    const response = callReviewApi(storeId, 0, 4);
    const reviewList = response.data;
    const reviewUrl = `../../store/review.php?id=${storeId}`;

    let reviewListHtml = "";

    $.each(reviewList, function (index, review) {
        reviewListHtml += ` <div class="review">
                <a href="${reviewUrl}">
                    <img src="${review.imageUrl == null ? '../img/sample/photo1.jpg' : review.imageUrl}" alt="">
                    <div class="rate-box">
                        ${getReviewRateHtml(review.id, review.star)}
                    </div>
                    <div class="review-content">
                        ${review.content}
                    </div>
                </a>
            </div>`;
    });

    if (reviewList.length >= 3) {
        reviewListHtml += `
          <div class="review-last">
              <a href="${reviewUrl}">
                 포토리뷰<br>더보기 >
              </a>
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

function setReviewList(storeId) {
    const response = callReviewApi(storeId, 0, 4);
    const reviewList = response.data;
    const reviewUrl = `../../store/review.php?id=${storeId}`;
    
    $("#reviewLength").html(reviewList.length);

    let reviewListHtml = "";

    $.each(reviewList, function (index, review) {

        let reviewTagHtml = "";
        $.each(review.menuName, function (index, menu) {
            reviewTagHtml += `<div class="review-tag">${menu.name}</div>`;
        });

        reviewListHtml += ` 
            <div class="review-detail">
                <img src="${review.imageUrl == null ? '../img/sample/photo1.jpg' : review.imageUrl}"
                     alt="">
                     <div class="review-detail-content">
                           <div class="name">${review.createdBy}</div>
                            <div class="review-detail-description">
                            ${review.content}
                            </div>
                            <div class="review-tag-list">
                            ${reviewTagHtml}
                            </div>                                
                      </div>
              
            </div>
        `;
    });

    $("#reviewAllList").html(reviewListHtml);
}
