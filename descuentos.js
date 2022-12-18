const button = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");

const pResult = document.querySelector("#result");
const pCupones = document.querySelector("#cupones");
button.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento(cuponesDescuento) {
  const price = inputPrice.value;
  const discount = inputDiscount.value;
  const valueCoupons = document.getElementsByName("cupons");

  let couponSelected = 0;

  for (let index = 0; index < valueCoupons.length; index++) {
    if (valueCoupons[index].checked) {
      couponSelected = valueCoupons[index].value;
      console.log(couponSelected);
    }
  }

  if (!price || !couponSelected) {
    pResult.innerText = "Porfavor llena el formulario";
    return;
  }

  if (couponSelected > 100) {
    pResult.innerText = "Tu descuento esta mal";
    return;
  }

  const newPrice = (price * (100 - couponSelected)) / 100;

  pResult.innerText = newPrice;
}
