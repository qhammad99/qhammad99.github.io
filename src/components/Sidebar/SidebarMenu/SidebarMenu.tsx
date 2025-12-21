import { FaUser, FaFolderOpen, FaBook } from "react-icons/fa";

import "./SidebarMenu.css"

function SidebarMenu() {
  return (
    <div className="menu-section-container">
        <button className="sidebar-menu-buttons">
            <FaUser size={20} color="var(--accent-color)"/> About Me
        </button>
        <button className="sidebar-menu-buttons">
            <FaBook size={20} color="var(--accent-color)"/> Notes
        </button>
        <button className="sidebar-menu-buttons">
            <FaFolderOpen size={20} color="var(--accent-color)"/> Projects
        </button>
    </div>
  )
}

export default SidebarMenu;
