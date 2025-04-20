const express = require("express");

const Cart = require("../schema/cart.schema");
const Product = require("../schema/products.schema");

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("product");

    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching Cart", error: err });
  }
};

const addToCart = async (req, res) => {
  const { product, quantity, name, price } = req.body;

  try {
    const existing = await Cart.findOne({ product });

    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.status(200).json(existing);
    }

    const newItem = new Cart({ product, quantity, name, price });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    return res.status(500).json({ message: "Failed to add to cart !!", err });
  }
};

const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany();
    return res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to clear cart" });
  }
};

const increaseCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findOne({ product: id });
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    cartItem.quantity += 1;
    await cartItem.save();

    return res.status(200).json(cartItem);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to increase cart item", details: err });
  }
};

const decreaseCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findOne({ product: id });
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      await cartItem.save();
      return res.status(200).json(cartItem);
    } else {
      await cartItem.deleteOne({ _id: cartItem._id });
      return res.status(200).json({ message: "Cart item removed" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to decrease cart item", details: err });
  }
};

const orderSuccessfull = async (req, res) => {
  const { products } = req.body;

  try {
    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Invalid products" });
    }

    for (const item of products) {
      const product = await Product.findById(item.id);

      if (product) {
        product.quantity -= item.quantity;

        if (product.quantity < 0) {
          product.quantity = 0;
        }

        await product.save();
      }
    }

    return res
      .status(200)
      .json({ message: "Order placed and product quantities updated" });
  } catch (err) {
    console.error("Order success error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getCart, addToCart, clearCart, increaseCart, decreaseCart, orderSuccessfull };
