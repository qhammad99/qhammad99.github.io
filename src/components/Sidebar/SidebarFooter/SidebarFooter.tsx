import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function SidebarFooter() {
    return(
        <div className="sidebar-footer-section-container">
            <h3 className="sidebar-footer-title">Let's Connect</h3>

            <button className="sidebar-menu-buttons">
                <FaWhatsapp size={20} color="#25D366"/> WhatsApp
            </button>
            <button className="sidebar-menu-buttons">
                <FaGithub size={20} color="var(--github-color)"/> Github
            </button>
            <button className="sidebar-menu-buttons">
                <FaLinkedin size={20} color="#0A66C2"/> LinkedIn
            </button>
        </div>
    )
}

export default SidebarFooter