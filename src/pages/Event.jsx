import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Event() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="event-page">
      <header className="event-header">
        <img
          src="https://concerts.onlybees.in/_next/static/media/OnlyBees_light.3cfb6be4.svg"
          alt="ONLYBEES."
          width="150"
          height="24"
        />
      </header>

      <div className="event-container">
        <div className="event-content">
          <div className="event-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C5.243 0 3 2.243 3 5c0 4.5 5 11 5 11s5-6.5 5-11c0-2.757-2.243-5-5-5zm0 7.5c-1.381 0-2.5-1.119-2.5-2.5S6.619 2.5 8 2.5s2.5 1.119 2.5 2.5S9.381 7.5 8 7.5z"/>
            </svg>
            Lariti, Mawdiangdiang
          </div>

          <h1 className="event-title">Mohombi Live in Shillong</h1>

          <div className="event-meta">
            <p className="event-date">Sat, Oct 25, 2025, 3:00 PM <span className="event-timezone">GMT +5:30</span></p>
            <p className="event-venue-name">Shillong</p>
          </div>

          <div className="event-tabs">
            <button 
              className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button 
              className={`tab-btn ${activeTab === "venue" ? "active" : ""}`}
              onClick={() => setActiveTab("venue")}
            >
              Venue Layout
            </button>
            <button 
              className={`tab-btn ${activeTab === "terms" ? "active" : ""}`}
              onClick={() => setActiveTab("terms")}
            >
              Terms and Conditions
            </button>
            <button 
              className={`tab-btn ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </div>

          <div className="event-description">
            {activeTab === "about" && (
              <div>
                <p>
                  Get ready for a high-energy night with global pop & Afro-Latin star Mohombi—the Congolese-Swedish hitmaker behind chart-toppers like "Bumpy Ride", "Coconut Tree" and "mi amor." Expect a power-packed set blending pop, dancehall, reggaeton, and Afrobeats with unforgettable energy.
                </p>
                <p>
                  Mohombi is known for his infectious energy and dynamic stage presence. His music combines contemporary pop with traditional African rhythms, creating a unique sound that captivates audiences worldwide. This performance in Shillong promises an unforgettable experience with cutting-edge production and top-notch sound quality.
                </p>
                <p>
                  The venue will feature state-of-the-art lighting and sound systems, ensuring every beat and lyric resonates perfectly. Whether you're a longtime fan or discovering Mohombi's music for the first time, this is an event you won't want to miss.
                </p>
              </div>
            )}
            {activeTab === "venue" && (
              <div className="venue-layout">
                <img 
                  src="https://concerts.onlybees.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStage.a5e7e11c.png&w=1920&q=75"
                  alt="Venue Layout"
                  className="venue-layout-img"
                />
              </div>
            )}
            {activeTab === "terms" && (
              <div>
                <h3>Terms and Conditions</h3>
                <p>
                  <strong>Ticket Purchase:</strong> All tickets are non-refundable and non-transferable unless otherwise stated. Tickets are valid only for the specified date and time.
                </p>
                <p>
                  <strong>Age Restrictions:</strong> Attendees must be 18+ years old. Valid ID is required for entry.
                </p>
                <p>
                  <strong>Venue Rules:</strong> No outside food or beverages are allowed. Recording the event without permission is prohibited.
                </p>
                <p>
                  <strong>Liability:</strong> Organizers are not responsible for lost, stolen, or damaged personal belongings. Attendees assume all risks related to their participation.
                </p>
                <p>
                  <strong>Cancellation:</strong> In case of event cancellation, refunds will be issued within 30 days. The organizers reserve the right to change the date or artist with prior notice.
                </p>
              </div>
            )}
            {activeTab === "faq" && (
              <div>
                <h3>Frequently Asked Questions</h3>
                <p>
                  <strong>Q: What time does the event start?</strong><br/>
                  A: The event starts at 3:00 PM. Gates open at 2:00 PM for check-in.
                </p>
                <p>
                  <strong>Q: Can I bring a guest?</strong><br/>
                  A: Each ticket is valid for one person only. Additional guests require separate tickets.
                </p>
                <p>
                  <strong>Q: Is parking available?</strong><br/>
                  A: Yes, complimentary parking is available at the venue.
                </p>
                <p>
                  <strong>Q: What items are prohibited?</strong><br/>
                  A: Weapons, glass bottles, and large bags are not allowed. Refer to venue guidelines for more details.
                </p>
                <p>
                  <strong>Q: Can I get a refund if I can't attend?</strong><br/>
                  A: Tickets are non-refundable. However, you may transfer your ticket to another person if requested in advance.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="event-poster">
          <img
            src="https://concerts.onlybees.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmohombi_flyer.959f436b.png&w=1080&q=75"
            alt="Mohombi Live in Shillong"
          />
          
          <div className="event-price-cta">
            <div className="event-price">
              <span className="price-label">Starting</span>
              <span className="price-amount">₹799</span>
            </div>
            <button className="event-book-now" onClick={() => navigate("/tickets")}>
              Book Now
            </button>
          </div>
        </div>

        <div className="event-guide-section">
          <h2 className="event-guide-title">Event Guide</h2>
          <div className="event-guide-main">
            <div className="guide-item-main">
              <span className="guide-label">Language</span>
              <span className="guide-value">English</span>
            </div>
            <div className="guide-item-main">
              <span className="guide-label">Duration</span>
              <span className="guide-value">TBI</span>
            </div>
            <div className="guide-item-main">
              <span className="guide-label">Entry Allowed</span>
              <span className="guide-value">14 yrs & above</span>
            </div>
          </div>
        </div>

        <div className="event-artist-section">
          <h2 className="event-artist-title">Artist</h2>
          <div className="event-artist">
            <div className="artist-card">
              <img
                src="/mohombi.webp"
                alt="Mohombi"
                className="artist-img"
              />
              <p className="artist-name">Mohombi</p>
              <p className="artist-subtitle">Musician, Singer, Composer and Dancer</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="event-footer">
        <div className="event-footer-inner">
          <div className="event-footer-divider" />

          <div className="event-footer-top">
            <div className="event-footer-brand">ONLYBEES.</div>

            <div className="event-footer-cols">
              <div className="event-footer-col">
                <div className="event-footer-col-title">Explore</div>
                <a className="event-footer-link" href="#">About</a>
              </div>

              <div className="event-footer-col">
                <div className="event-footer-col-title">Support</div>
                <a className="event-footer-link" href="#">Contact us</a>
                <a className="event-footer-link" href="#">Refund</a>
              </div>
            </div>
          </div>

          <div className="event-footer-divider" />

          <div className="event-footer-bottom">
            <div className="event-footer-copy">
              Copyright © Onlybees 2025, KL & Sons - ONLYBEES
            </div>

            <div className="event-footer-legal">
              <a className="event-footer-legal-link" href="#">Privacy Policy</a>
              <a className="event-footer-legal-link" href="#">Terms and Conditions</a>
            </div>

            <div className="event-footer-social">
              <a className="event-footer-social-btn" href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9h3V6h-3c-2.76 0-5 2.24-5 5v3H7v3h2v7h3v-7h3l1-3h-4v-3c0-.55.45-1 1-1Z" fill="currentColor"/>
                </svg>
              </a>
              <a className="event-footer-social-btn" href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" fill="currentColor"/>
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor"/>
                </svg>
              </a>
              <a className="event-footer-social-btn" href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 9H3.75V21H6.5V9ZM5.125 3A1.625 1.625 0 1 0 5.126 6.25 1.625 1.625 0 0 0 5.125 3ZM10 9H7.5V21H10v-6.25c0-1.8.34-3.55 2.58-3.55 2.21 0 2.24 2.06 2.24 3.67V21H17.5v-6.8c0-3.34-.72-5.9-4.63-5.9A4.05 4.05 0 0 0 10 9.7V9Z" fill="currentColor"/>
                </svg>
              </a>
              <a className="event-footer-social-btn" href="#" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a9.5 9.5 0 0 0-8.22 14.27L3 22l5.9-1.55A9.5 9.5 0 1 0 12 2Zm0 2a7.5 7.5 0 0 1 0 15 7.46 7.46 0 0 1-3.35-.8l-.36-.18-3.45.9.93-3.33-.2-.37A7.5 7.5 0 0 1 12 4Zm3.73 10.88c-.2-.1-1.2-.6-1.39-.67-.18-.07-.32-.1-.46.1-.13.2-.53.67-.65.81-.12.13-.24.15-.44.05-.2-.1-.85-.31-1.62-1-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.46-1.1-.63-1.5-.17-.4-.35-.34-.46-.34h-.4c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.68 0 1 .72 1.96.82 2.1.1.13 1.41 2.15 3.41 3.01.48.2.85.32 1.14.41.48.15.92.13 1.26.08.38-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96-.05-.09-.18-.14-.38-.24Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Event;
