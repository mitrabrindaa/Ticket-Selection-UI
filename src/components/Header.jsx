import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div>
        <img
          src="https://concerts.onlybees.in/_next/static/media/OnlyBees_light.3cfb6be4.svg"
          alt="OB Sports Logo"
          width="150"
          height="24"
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
}

export default Header;
