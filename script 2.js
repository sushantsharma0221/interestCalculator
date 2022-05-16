const Calculate = () => {
  let PA = document.querySelector(".PA").value;
  let IR = document.querySelector(".IR").value;
  let time = document.querySelector(".DIY").value;
  let CF = document.querySelector(".CF").value;
  let btn = document.querySelector(".btn");
  let amount = PA * Math.pow(1 + IR / (100 * CF), CF * time);
  document.querySelector(
    ".result"
  ).innerHTML = `<h2> Total Amount : ₹​ <span>${amount.toFixed(2)}</span></h2>`;
};
btn.addEventListener("click", () => {
  Calculate();
});
