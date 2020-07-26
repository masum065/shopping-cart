/** @format */

// document.getElementById("increase-item").addEventListener("click", function () {
//   const itemInput = document.getElementById("phone-quantity");
//   let itemQuantity = parseInt(itemInput.value);
//   let itemNewQuantity = itemQuantity + 1;
//   itemInput.value = itemNewQuantity;

//   document.getElementById("phone-price").innerText = itemNewQuantity * 1219;
// });

// document.getElementById("decrease-item").addEventListener("click", function () {
//   handleProductChange(false, "phone", 1219);
// });

function handleProductChange(isIncrease, item, itemPrice) {
  const itemInput = document.getElementById(item + "-quantity");
  let itemQuantity = parseInt(itemInput.value);
  let itemNewQuantity = itemQuantity;
  if (isIncrease == true) {
    itemNewQuantity = itemQuantity + 1;
  }
  if (isIncrease == false && itemQuantity > 0) {
    itemNewQuantity = itemQuantity - 1;
  }
  itemInput.value = itemNewQuantity;

  document.getElementById(item + "-price").innerText =
    itemNewQuantity * itemPrice;

  // let productTotalAmount = document.getElementById("product-total").innerText;
  // let productTotal = parseInt(productTotalAmount);
  let subTotal = getInput("sub-total");

  let subTotalPrice = subTotal + itemNewQuantity * itemPrice;
  document.getElementById("sub-total").innerText = `${subTotalPrice}`;

  let taxTotal = (document.getElementById("tax-total").innerText =
    (subTotalPrice / 100) * 8);

  document.getElementById("total-price").innerText = subTotalPrice + taxTotal;
}

function getInput(id) {
  let totalAmount = document.getElementById(id).innerText;
  return (Total = parseInt(totalAmount));
}

// const increaseItem = document.getElementById('increaseItem');

// increaseItem.addEventListener('click',function(event){
//    let itemQuantity = document.getElementById('itemQuantity')
//   //  let itemQuantityNumber = parseInt(itemQuantity);

//    let itemIncrease = itemQuantityNumber + 1;
//    console.log(itemIncrease);
//    document.getElementById('itemQuantity').value = itemIncrease;

//    document.getElementById('phonePrice').innerText = itemIncrease * 1219;

//   //  let phonePrice = document.getElementById('phonePrice').innerText;
//   //  let priceNumber = parseInt(phonePrice);

//   //  let totalAmount = priceNumber * itemIncrease;

// })
