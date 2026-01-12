import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTickets = [], totalPrice = 0 } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutes in seconds
  const [showFeesBreakdown, setShowFeesBreakdown] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      window.location.reload();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate amounts
  const ticketTotal = totalPrice;
  const gst = Math.round(ticketTotal * 0.18); // 18% GST
  
  // Booking fees breakdown
  const platformFees = Math.round(ticketTotal * 0.05); // 5% platform fees
  const feesGst = Math.round(ticketTotal * 0.009); // 0.9% GST on booking
  const bookingFees = platformFees + feesGst; // Total booking fees
  
  const grandTotal = ticketTotal + gst + bookingFees;

  const handleCheckout = () => {
    console.log("Checkout:", { name, email, phone, selectedTickets, grandTotal });
    // Process checkout
  };

  return (
    <>
      <Header />
      <div className="checkout-page">
        <div className="checkout-container">
          {/* Left Side - Form */}
          <div className="checkout-left">
            <h1 className="checkout-title">CHECKOUT</h1>
            <p className="checkout-timer">Time left: <span className="timer-value">{formatTime(timeLeft)}</span></p>

            <form className="checkout-form">
              <div className="form-group">
                <label>Name :</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Email :</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="form-input"
                />
                <p className="form-note">Note: You'll receive a copy of the tickets here</p>
              </div>

              <div className="form-group">
                <label>Phone :</label>
                <div className="phone-input">
                  <span className="country-code">🇮🇳 +91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input phone-number"
                  />
                </div>
              </div>

              <div className="form-terms">
                <p>By purchasing you'll receive an account, and agree to our general <span className="link">Terms of use</span>, <span className="link">Privacy Policy</span> and the <span className="link">Ticket Purchase Terms</span>.</p>
              </div>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="checkout-right">
            <div className="order-summary">
              <div className="event-info">
                <img
                  src="https://concerts.onlybees.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmohombi_flyer.959f436b.png&w=1080&q=75"
                  alt="Event"
                  className="event-thumbnail"
                />
                <div className="event-details">
                  <h3>Mohombi Live in Shillong</h3>
                  <p className="event-location">Lariti, Mawdiangdiang</p>
                  <p className="event-date">Sat, Oct 25, 2025</p>
                  <p className="event-venue">Shillong</p>
                </div>
              </div>

              <div className="order-details">
                <h2 className="summary-title">Order Summary</h2>
                
                {selectedTickets.length > 0 ? (
                  selectedTickets.map((ticket) => (
                    <div className="order-item" key={ticket.sectionId}>
                      <div className="item-name">
                        <span>{ticket.sectionName}</span>
                        <span className="item-quantity">x{ticket.quantity}</span>
                      </div>
                      <span className="item-price">₹{ticket.totalPrice.toLocaleString()}</span>
                    </div>
                  ))
                ) : (
                  <div className="order-item">
                    <div className="item-name">
                      <span>No tickets selected</span>
                    </div>
                    <span className="item-price">₹0</span>
                  </div>
                )}

                <div className="order-item">
                  <span>GST (excl.)</span>
                  <span className="item-price">₹{gst.toLocaleString()}</span>
                </div>

                <div className="order-item booking-fees-item">
                  <div 
                    className="booking-fees" 
                    onClick={() => setShowFeesBreakdown(!showFeesBreakdown)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span>Booking Fees</span>
                    <span className={`dropdown-arrow ${showFeesBreakdown ? 'open' : ''}`}>▲</span>
                  </div>
                  <span className="item-price">₹{bookingFees}</span>
                </div>

                {showFeesBreakdown && (
                  <>
                    <div className="order-item fee-breakdown">
                      <span>Platform Fees</span>
                      <span className="item-price">₹{platformFees}</span>
                    </div>
                    <div className="order-item fee-breakdown">
                      <span>GST</span>
                      <span className="item-price">₹{feesGst}</span>
                    </div>
                  </>
                )}

                <div className="order-total">
                  <span className="total-label">Total</span>
                  <span className="total-amount">₹{grandTotal.toLocaleString()}</span>
                </div>

                <div className="coupon-section">
                  <p className="coupon-title">Have a Coupon Code?</p>
                  <div className="coupon-input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter code here"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="coupon-input"
                    />
                    <button className="apply-btn">APPLY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Checkout Bar */}
        <div className="checkout-bottom-bar">
          <div className="bottom-bar-content">
            <div className="bottom-total">
              <span className="bottom-total-label">Total:</span>
              <span className="bottom-total-amount">₹{grandTotal.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
