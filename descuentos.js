const button = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
//const inputDiscount = document.querySelector("#discount");
const inputCoupon2 = document.querySelector("#coupon2");
const pResult = document.querySelector("#result");
//const pCupones = document.querySelector("#cupones");
/*const cuponesDescuento = {
  platziHappy: 15,
  platziJoy: 20,
  platziBeginner: 40,
};*/

const couponList = [];

couponList.push({
  name: "platziHappy",
  discount: 15,
});

button.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const price = inputPrice.value;
  let discount = 0;
  //const valueCoupons = document.getElementsByName("cupons");
  const cupon2 = inputCoupon2.value;
  const couponSelected = "";
  /*
  for (let index = 0; index < valueCoupons.length; index++) {
    if (valueCoupons[index].checked) {
      couponSelected = valueCoupons[index].value;
      console.log(couponSelected);
    }
  }*/
  if (!price || !cupon2) {
    pResult.innerText = "Porfavor llena el formulario";
    return;
  }

  function encontrarDescuento(cuponItem) {
    return cuponItem.name == cupon2;
  }

  const couponSelected2 = couponList.find(encontrarDescuento);

  if (couponSelected2) {
    discount = couponSelected2.discount;
  } else {
    pResult.innerText = "No es un descuento valido";
    return;
  }
  /*if (couponSelected > 100) {
    pResult.innerText = "Tu descuento esta mal";
    return;
  }*/

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = newPrice;
}
