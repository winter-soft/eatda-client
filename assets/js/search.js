let categoryList;

$(document).ready(function () {
    categoryList = callCategoryListApi();
    setCategorytList();
});

function setCategorytList() {
    let categoryHtml = "";
    $.each(categoryList.data, function (index, category) {
        categoryHtml += `
            <div class="col-4 text-center">
                <img src="../assets/img/category/${category.category}.png" alt="">
                <p class="text-dark font-weight-bold mt-1">${category.category_ko}</p>
            </div>`;
    });

    $('#categoryList').html(categoryHtml);
}