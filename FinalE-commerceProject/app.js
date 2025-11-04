/* app.js — Basic cart interactions and calculations
   - Quantity increase / decrease
   - Delete item (remove DOM node)
   - Promo apply / close (applies 20% discount if field not empty)
   - Recalculates subtotal, discount, total, shows them in the order summary
*/

/* ---------------------------
   Helper functions
   --------------------------- */

// Format number to currency string (no localization - simple USD format as in design)
function formatCurrency(n){
  return '$' + Math.round(n);
}

// Read numeric price from cart-item data-price attribute
function getItemBasePrice(itemEl){
  return Number(itemEl.getAttribute('data-price')) || 0;
}

// Recalculate subtotal & total and update DOM
function recalcTotals(){
  const cartItems = document.querySelectorAll('.cart-item');
  let subtotal = 0;

  cartItems.forEach(item => {
    const qtyEl = item.querySelector('.qty-count');
    const qty = Number(qtyEl.textContent) || 1;
    const base = getItemBasePrice(item);
    const itemTotal = base * qty;
    subtotal += itemTotal;

    // Update individual price display (design shows single price; keep single item price as unit price)
    const priceDisplay = item.querySelector('.price');
    priceDisplay.textContent = formatCurrency(base);
  });

  // Update subtotal DOM
  const subtotalEl = document.getElementById('subtotal');
  if(subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);

  // Calculate discount if promo applied (20%)
  const promoApplied = !!document.body.dataset.promoApplied;
  let discount = 0;
  if(promoApplied){
    discount = subtotal * 0.20;
  }

  const discountEl = document.getElementById('discount');
  if(discountEl) discountEl.textContent = (discount > 0 ? '- ' + formatCurrency(discount) : '- $0');

  // Delivery fee static as per design
  const deliveryFee = 15;
  const deliveryEl = document.getElementById('delivery');
  if(deliveryEl) deliveryEl.textContent = formatCurrency(deliveryFee);

  // Total = subtotal - discount + delivery
  const total = Math.round(subtotal - discount + deliveryFee);
  const totalEl = document.getElementById('total');
  if(totalEl) totalEl.textContent = formatCurrency(total);
}

/* ---------------------------
   Quantity controls
   --------------------------- */
function bindQuantityControls(){
  document.addEventListener('click', function(e){
    const dec = e.target.closest('.qty-decrease');
    const inc = e.target.closest('.qty-increase');

    if(dec || inc){
      const btn = dec || inc;
      const item = btn.closest('.cart-item');
      const countEl = item.querySelector('.qty-count');
      let qty = Number(countEl.textContent) || 1;

      if(dec){
        qty = Math.max(1, qty - 1);
      }
      if(inc){
        qty = qty + 1;
      }

      countEl.textContent = qty;
      recalcTotals();
    }
  });
}

/* ---------------------------
   Delete item controls
   --------------------------- */
function bindDeleteControls(){
  document.addEventListener('click', function(e){
    const del = e.target.closest('.cart-item__delete');
    if(del){
      const item = del.closest('.cart-item');
      if(item){
        item.remove();
        recalcTotals();
      }
    }
  });
}

/* ---------------------------
   Promo code apply
   --------------------------- */
function bindPromo(){
  const applyBtn = document.getElementById('apply-promo');
  const promoInput = document.getElementById('promo-input');

  applyBtn.addEventListener('click', function(){
    const code = promoInput.value.trim();
    if(code === ''){
      // If empty, treat as no promo
      document.body.dataset.promoApplied = '';
    } else {
      document.body.dataset.promoApplied = 'true';
    }
    recalcTotals();
    // feedback: briefly change button text
    applyBtn.textContent = document.body.dataset.promoApplied ? 'Applied' : 'Apply';
    setTimeout(()=>{ applyBtn.textContent = document.body.dataset.promoApplied ? 'Applied' : 'Apply'; }, 600);
  });
}

/* ---------------------------
   Initialize
   --------------------------- */
document.addEventListener('DOMContentLoaded', function(){
  bindQuantityControls();
  bindDeleteControls();
  bindPromo();
  recalcTotals();
});
