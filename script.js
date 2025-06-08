
// JavaScript content from the original HTML
const accordion = document.querySelector('.accordion');
const panel = document.querySelector('.panel');
accordion.addEventListener('click', () => {
  const expanded = accordion.getAttribute('aria-expanded') === 'true';
  accordion.setAttribute('aria-expanded', !expanded);
  panel.style.maxHeight = !expanded ? panel.scrollHeight + "px" : null;
});
const packageSelect = document.getElementById('package');
const quantityInput = document.getElementById('quantity');
const totalPriceEl = document.getElementById('totalPrice');
const priceMap = { "1month": 30000, "3month": 85000, "6month": 160000 };
function updatePrice() {
  const selectedPackage = packageSelect.value;
  const quantity = parseInt(quantityInput.value) || 1;
  const total = (priceMap[selectedPackage] || 30000) * quantity;
  totalPriceEl.textContent = `총 금액: ${total.toLocaleString()}원`;
}
packageSelect.addEventListener('change', updatePrice);
quantityInput.addEventListener('input', updatePrice);
updatePrice();
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('주문이 접수되었습니다. 감사합니다!');
  orderForm.reset();
  updatePrice();
});
