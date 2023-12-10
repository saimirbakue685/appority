/* filename: complexCode.js */

// This code creates a complex and elaborate shopping cart system
// with advanced features such as adding products, calculating subtotal,
// applying discounts, and generating detailed receipts.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
    this.discount = 0;
  }

  addProduct(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.products.push(product);
    }
  }

  calculateSubtotal() {
    let subtotal = 0;
    for (let product of this.products) {
      subtotal += product.price;
    }
    return subtotal;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  calculateTotal() {
    const subtotal = this.calculateSubtotal();
    const total = subtotal - (subtotal * (this.discount / 100));
    return total;
  }

  generateReceipt() {
    let receipt = "========== RECEIPT ==========\n";
    for (let product of this.products) {
      receipt += `Product: ${product.name}, Price: $${product.price.toFixed(2)}\n`;
    }
    receipt += "-----------------------------\n";
    receipt += `Subtotal: $${this.calculateSubtotal().toFixed(2)}\n`;
    receipt += `Discount: ${this.discount}%\n`;
    receipt += `Total: $${this.calculateTotal().toFixed(2)}\n`;
    receipt += "==============================";

    return receipt;
  }
}

// Usage example:

const cart = new ShoppingCart();

const product1 = new Product("iPhone 12", 999.99);
const product2 = new Product("AirPods Pro", 199.99);

cart.addProduct(product1, 2);
cart.addProduct(product2, 1);
cart.applyDiscount(10);

console.log(cart.generateReceipt());
