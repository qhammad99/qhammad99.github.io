import { FaUser, FaFolderOpen, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./SidebarMenu.css"

function SidebarMenu() {
  return (
    <div className="menu-section-container">
      <NavLink to="/about" className={({ isActive }) => `sidebar-menu-buttons ${isActive ? 'active' : ''}`}>
        <FaUser size={20} color="var(--accent-color)" /> About Me
      </NavLink>
      <NavLink to="/notes" className={({ isActive }) => `sidebar-menu-buttons ${isActive ? 'active' : ''}`}>
        <FaBook size={20} color="var(--accent-color)" /> Notes
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => `sidebar-menu-buttons ${isActive ? 'active' : ''}`}>
        <FaFolderOpen size={20} color="var(--accent-color)" /> Projects
      </NavLink>
    </div>
  )
}

export default SidebarMenu;
