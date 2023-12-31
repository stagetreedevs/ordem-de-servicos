import { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./responsive.css"
import { LogOut } from "lucide-react";
import { AuthContext } from "../../contexts/Auth";
import Cookies from "js-cookie";

export default function Navbar() {
  const { setToken } = useContext(AuthContext)
  
  return (
    <nav className="navbar">
      <Link className="link" to={"/dashboard"}>
        <img src="./dashboard.svg" alt="" />
        <div className="tooltip">
           
            <p>Dashboard</p>
        </div>
      </Link>

      <Link className="link" to={"/financeiro"}>
        <img src="./attach_money.svg" alt="" />
        <div className="tooltip">
         
          <p>Financeiro</p>
        </div>
      </Link>

      <Link className="link" to={"/arquivo"}>
        <img src="./inventory.svg" alt="" />
        <div className="tooltip">
        
            <p>Arquivo</p>
        </div>
      </Link>

      <LogOut className="btnLogOut" size={30} style={{
            cursor: "pointer"
          }} onClick={() => {
            
            Cookies.remove('token')
            setToken(null)
            
      }} />
    </nav>
  );
}
