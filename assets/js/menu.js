let menuApiUrl = "/menu";
let cardAddApiUrl = "/orderDetail";

function callMenuApi(menuId) {
    return callFormTypeApi(`${menuApiUrl}/${menuId}`, getEatdaToken(), METHOD_GET, {});
}

function setMenu(menu) {
    let menuHtml = `
    <div id="menu" class="txt-black">
        <div class="menu-img-box">
            <img src="${menu.imageUrl}" alt="">
        </div>
        <div class="menu-content">
             <p class="font-weight-bold lg-txt">${menu.name}</p>
            <div class="mt-1">
                <p><span class="font-weight-bold">가격</span><span class="float-right">${numberFormat(menu.price)}원</span></p>
                <p><span class="font-weight-bold">수량</span>
                    <span class="float-right quantity-box">
                    <span onclick="minusQuantity()">-</span>
                    <span class="quantity" id="quantity">1</span>
                    <span onclick="addQuantity()">+</span>
                </span>
                </p>
            </div>
            <div class="divider mt-3 mb-2"></div>
        </div>
    </div>
`;
    $('#menu').html(menuHtml);
}

function setAddCartButton(menuId, orderId) {
    const addCartBtnHtml = `<button class="bottom-btn" onclick="addCart(${menuId}, ${orderId})">장바구니에 담기</button>`;
    $('#addCartBtn').html(addCartBtnHtml);
}

function addQuantity() {
    const currentQuantity = $("#quantity").text();
    $("#quantity").text(parseInt(currentQuantity) + 1);
}

function minusQuantity() {
    const currentQuantity = $("#quantity").text();
    const editedQuantity = parseInt(currentQuantity) - 1 < 1 ? 1 : parseInt(currentQuantity) - 1;
    $("#quantity").text(editedQuantity);
}

function addCart(menuId, orderId) {
    const quantity = parseInt($("#quantity").text());
    const response = callAddCartApi(menuId, orderId, quantity);
    if (response.status === 200) {
        location.href = `../cart/index.php?id=${orderId}`;
    }
}

function callAddCartApi(menuId, orderId, quantity) {
    const data = {
        "quantity": quantity
    };
    return callApi(`${cardAddApiUrl}/${orderId}/${menuId}`, getEatdaToken(), METHOD_POST, data);
}