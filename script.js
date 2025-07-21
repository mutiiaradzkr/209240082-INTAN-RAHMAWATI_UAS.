document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartModal = document.getElementById("cartModal");
  const notif = document.getElementById("notif");

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      cart.push(productName);
      cartCount.textContent = cart.length;
      renderCartItems();
      showNotification(`${productName} ditambahkan ke keranjang`);
    });
  });

  document.getElementById("cartIcon").addEventListener("click", () => {
    cartModal.classList.toggle("hidden");
  });

  function renderCartItems() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }

  function showNotification(message) {
    notif.textContent = message;
    notif.style.display = "block";
    setTimeout(() => {
      notif.style.display = "none";
    }, 2000);
  }
});

function closeCart() {
  document.getElementById("cartModal").classList.add("hidden");
}
