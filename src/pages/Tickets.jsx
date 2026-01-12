import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

function Tickets() {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ticketCounts, setTicketCounts] = useState({});

  useEffect(() => {
    const initFromData = (data) => {
      const sectionsArray = data.sections || [];
      setSections(sectionsArray);
      const initialCounts = {};
      sectionsArray.forEach((section) => {
        initialCounts[section._id] = 0;
      });
      setTicketCounts(initialCounts);
    };

    const fetchJson = async (url) => {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return res.json();
    };

    (async () => {
      try {
        const data = await fetchJson("https://concertsapi.onlybees.in/api/sections/availability");
        initFromData(data);
      } catch (err) {
        console.error("Failed to fetch /api/sections/availability:", err);
        try {
          const fallback = await fetchJson("/mock-sections.json");
          initFromData(fallback);
        } catch (fallbackErr) {
          console.error("Failed to fetch fallback /mock-sections.json:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleAdd = (sectionId) => {
    setTicketCounts((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] + 1,
    }));
  };

  const handleRemove = (sectionId) => {
    setTicketCounts((prev) => ({
      ...prev,
      [sectionId]: Math.max(0, prev[sectionId] - 1),
    }));
  };

  const totalQuantity = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);
  const totalPrice = sections.reduce((sum, section) => {
    return sum + section.price * (ticketCounts[section._id] || 0);
  }, 0);

  const handleCheckout = () => {
    const selectedTickets = sections
      .filter((section) => ticketCounts[section._id] > 0)
      .map((section) => ({
        sectionId: section._id,
        sectionName: section.name,
        quantity: ticketCounts[section._id],
        pricePerTicket: section.price,
        totalPrice: section.price * ticketCounts[section._id],
      }));

    console.log("=== CHECKOUT DATA ===");
    console.log("Selected Tickets:", selectedTickets);
    console.log("Total Quantity:", totalQuantity);
    console.log("Total Price: ₹", totalPrice);
    console.log("====================");

    navigate("/checkout", {
      state: {
        selectedTickets,
        totalPrice,
      },
    });
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading tickets...</p>
      </div>
    );
  }

  return (
    <div className="tickets-page-container">
      <div className="tickets-container">
        <h1 className="tickets-heading">TICKETS</h1>

        <div className="tickets-main-layout">
        {/* LEFT SIDE - Tickets */}
        <div className="tickets-left">
          {sections.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '40px' }}>
              No tickets available or failed to load.
            </p>
          ) : (
            sections.map((section) => (
              <SectionCard
                key={section._id}
                name={section.name}
                price={section.price}
                count={ticketCounts[section._id] || 0}
                available={section.availableQuantity}
                onAdd={() => handleAdd(section._id)}
                onRemove={() => handleRemove(section._id)}
              />
            ))
          )}
        </div>

        {/* RIGHT SIDE - Venue Layout */}
        <div className="tickets-right">
          <div className="venue-image-container">
            <img
              src="https://concerts.onlybees.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStage.a5e7e11c.png&w=1920&q=75"
              alt="Venue Layout"
              className="venue-image"
            />
          </div>
        </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="total-info">
            <span className="total-label">Total:</span>
            <span className="total-price">₹{totalPrice.toLocaleString()}</span>
          </div>
          <button
            className="proceed-btn"
            onClick={handleCheckout}
            disabled={totalQuantity === 0}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
