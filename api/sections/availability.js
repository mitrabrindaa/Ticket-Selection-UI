module.exports = function handler(req, res) {
  // Minimal mock payload to match the UI expectations.
  res.status(200).json({
    sections: [
      { _id: "ga", name: "GA", price: 799, availableQuantity: 120 },
      { _id: "ga_vip", name: "GA VIP", price: 1299, availableQuantity: 24 },
      { _id: "vvip_lounge", name: "VVIP LOUNGE", price: 2999, availableQuantity: 8 }
    ]
  });
};
