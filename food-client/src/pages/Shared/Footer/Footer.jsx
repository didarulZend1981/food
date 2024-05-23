
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
        <div className="footer p-10 bg-neutral text-neutral-content">
            <aside>
            <IoLogoBuffer />
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </aside> 
            <nav>
                <h6 className="footer-title">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                    <a><FaFacebook /></a>
                    <a><FaYoutube /></a>
                    <a><FaLinkedinIn /></a>
                </div>
            </nav>


            
        </div>
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
                  <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                  </aside>
            </div>
        

    </footer>
  );
};

export default Footer;