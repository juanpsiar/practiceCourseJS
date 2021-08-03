// TODO SECOND WORKSHOP

//* Setting Variables
const arrayCoupons = [
  { name: 'FreeCoupon', discount: 10 },
  { name: 'SuperCoupon', discount: 25 },
  { name: 'PremiumCoupon', discount: 50 },
];

const blockCoupons = document.getElementById('BlockCoupons');
blockCoupons.style.display = 'none';
const couponDiscount = document.getElementById('CouponDiscount');
couponDiscount.style.display = 'none';

//* functions for calculate
calcPriceWithDiscount = (originalPrice, discount) => {
  const precioPercentage = 100 - discount;
  const finalPrice = (originalPrice * precioPercentage) / 100;
  return finalPrice;
};

//? check the coupon entered for the user
checkCouponValue = () => {
  const coupon = InputCoupon.value;
  let result = arrayCoupons.filter(
    (itemCoup) => itemCoup['name'].toLowerCase() === coupon.toLowerCase()
  );

  return result;
};

onHandleDiscount = () => {
  const discountCoupon = checkCouponValue();
  const price = document.getElementById('InputPrice').value;
  let discount = document.getElementById('InputDiscount').value;
  if (discountCoupon.length > 0) {
    discount = discountCoupon[0]['discount'];
    couponDiscount.innerHTML = `The new discount is ${discount}%`;
  }
  const result = calcPriceWithDiscount(price, discount);
  FinalPrice.innerText = result;
};

showCoupons = () => {
  const couponFlag = document.getElementById('CouponFlag');
  if (couponFlag.checked) {
    InputDiscount.disabled = true;
    blockCoupons.style.display = '';
    couponDiscount.style.display = '';
  }
};
