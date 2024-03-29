import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
               
                Courses
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
                Get Help Now
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
           
            
            
           
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}
