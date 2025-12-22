import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./SidebarHeader.css";
import { useTheme } from "../../../hooks/useTheme";

function SidebarHeader() {
  const colors = ["#a07926", "#6468b7", "#2d922d", "#2f71b4"];
  const [selectedColor, setSelectedColor] = useState(() => {
    const savedColor = localStorage.getItem("accentColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--accent-color", savedColor);
      return savedColor;
    }
    return colors[0];
  });
  const [openColorMenu, setOpenColorMenu] = useState(false);
  const { theme, toggleTheme } = useTheme("light");

  const colorSelector = (color: any) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty("--accent-color", color);
    localStorage.setItem("accentColor", color);
    setOpenColorMenu(false);
  };

  return (
    <div className="section-container">
      {/* <img src="/logo.png" alt="Logo" className="logo-image"/> */}
      <div className="sidebar-title">Hammad Qureshi</div>
      <div className="sidebar-header-btns-container">
        <div className="color-selection-container">
          <button
            className="color-button"
            onClick={() => setOpenColorMenu(!openColorMenu)}
          >
            <div
              className="color-circle"
              style={{ backgroundColor: selectedColor }}
            />
          </button>

          {openColorMenu && (
            <div className="color-dropdown">
              {colors.map((color) => (
                <div key={color} onClick={() => colorSelector(color)}>
                  <div className="color-circle-option">
                    <div
                      className="color-circle"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="color-button" onClick={toggleTheme}>
          {theme === "dark" ? (
            <FaSun size={20} color="#fbfbfb" />
          ) : (
            <FaMoon size={20} color="#1d1d22" />
          )}
        </button>
      </div>
    </div>
  );
}

export default SidebarHeader;
