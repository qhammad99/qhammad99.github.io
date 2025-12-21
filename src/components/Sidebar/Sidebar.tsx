import SidebarHeader from "./SidebarHeader/SidebarHeader"
import SidebarMenu from "./SidebarMenu/SidebarMenu"
import SidebarFooter from "./SidebarFooter/SidebarFooter"

import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react"

import "./Sidebar.css"

function Sidebar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="sidebar">
      <SidebarHeader />
      
      <button className="hamburger" onClick={() => setNavBarOpen(!navBarOpen)}>
        {navBarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <div className={`sidebar-content ${navBarOpen ? "nav-bar-open" : ""}`}>
        <SidebarMenu />
        <SidebarFooter />
      </div>
    </div>
  )
}

export default Sidebar
