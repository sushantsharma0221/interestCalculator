const Calculate = () => {
  let PA = document.querySelector(".PA").value;
  let IR = document.querySelector(".IR").value;
  let time = document.querySelector(".DIY").value;
  let btn = document.querySelector(".btn");
  let amount = PA * (1 + (IR / 100) * time);
  document.querySelector(
    ".result"
  ).innerHTML = `<h2> Total Amount : ₹​ <span>${amount}</span></h2>`;
};
btn.addEventListener("click", () => {
  Calculate();
});
