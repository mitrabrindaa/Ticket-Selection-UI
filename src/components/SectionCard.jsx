import { useState } from "react";

function SectionCard({ name, price, count, available, onAdd, onRemove }) {
  const isSelected = count > 0;
  const soldOut = available <= 0;
  const fastFilling = available > 0 && available <= 3;
  const [showDetails, setShowDetails] = useState(false);

  // Define section details based on name
  const getSectionDetails = () => {
    const nameUpper = name.toUpperCase();
    
    if (nameUpper.includes('GA') && !nameUpper.includes('VIP')) {
      return [
        'Entry only',
        'Easy access to the bar'
      ];
    } else if (nameUpper.includes('GA VIP')) {
      return [
        'Exclusive front-row near the stage',
        'Easy access to the bar'
      ];
    } else if (nameUpper.includes('VVIP LOUNGE')) {
      return [
        'Unlimited food & beverages for 180 minutes (7pm - 10 pm)',
        'Access to all areas',
        'Exclusive round table service',
        'Unlimited IMFL pouring',
        'Clear and unobstructed view of the stage'
      ];
    } else if (nameUpper.includes('VVIP ROUND TABLE')) {
      return [
        'Exclusive round table',
        'Unlimited food & beverages for 180 minutes (7pm - 10 pm)',
        'Access to all areas',
        'Round table service',
        'Unlimited IMFL pouring',
        'Clear and unobstructed view of the stage'
      ];
    }
    
    return ['Entry to the venue'];
  };

  const details = getSectionDetails();

  return (
    <div className={`ticket-card${isSelected ? " selected" : ""}`}>
      {/* LEFT SIDE */}
      <div className="ticket-left">
        <h3>{name}</h3>

        <div className="price-row">
          <span className="price">₹{price.toLocaleString()}</span>
          <span className="excl-taxes">Excl. taxes</span>
          {!soldOut && fastFilling && (
            <span className="tag">Fast Filling</span>
          )}
        </div>

        {soldOut && (
          <p className="sold-out-text">Sold Out</p>
        )}

        {showDetails && (
          <div className="ticket-details">
            {details.map((detail, index) => (
              <p key={index} className="detail-item">- {detail}</p>
            ))}
          </div>
        )}

        <p 
          className="know-more" 
          onClick={() => setShowDetails(!showDetails)}
        >
          Know more {showDetails ? '⌃' : '⌄'}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="ticket-right">
        {count === 0 ? (
          <button
            className="add-btn-outline"
            onClick={onAdd}
            disabled={soldOut}
          >
            Add
          </button>
        ) : (
          <div className="counter">
            <button onClick={onRemove}>−</button>
            <span>{count}</span>
            <button
              onClick={onAdd}
              disabled={soldOut || count >= available}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionCard;