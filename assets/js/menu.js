let menuApiUrl = "/menu";
let cartAddApiUrl = "/orderDetail";

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
    // 장바구니에 담기전, 동일한 딜에 담는지 체크
    const result = checkSameOrderWhenPutInCart(orderId);
    if (result) {
        // 장바구니에 메뉴 추가
        addMenuToCart(menuId, orderId);
    }
}

function addMenuToCart(menuId, orderId) {
    const storeId = window.localStorage.getItem("sid");
    const quantity = parseInt($("#quantity").text());

    const response = callAddCartApi(menuId, orderId, quantity, 0);

    if (response.status === 200) {
        location.href = `../store/index.php?id=${storeId}`;
    }
}

// 담으려고 하는 메뉴가 같은 가게인지 체크하는 함수
function checkSameOrderWhenPutInCart(orderId) {
    const response = callCartApi();
    let result = true;
    if (response.data && response.data.length > 0) {
        if (response.data[0].order.id != orderId) {
            let answer = confirm("같은 딜에 해당하는 메뉴만 담을 수 있습니다.\n" +
                "주문할 딜을 변경하실 경우 \n" +
                "이전에 담은 메뉴가 삭제됩니다.");
            if (!answer) {
                result = false;
            }
        }
    }

    return result;
}

function callAddCartApi(menuId, orderId, quantity, option_id) {
    const data = {
        "menuOptions": [
            {
                "menuOption_id": option_id
            }
        ],
        "quantity": quantity
    };

    return callApi(`${cartAddApiUrl}/${orderId}/${menuId}`, getEatdaToken(), METHOD_POST, data);
}