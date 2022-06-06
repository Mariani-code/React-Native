import "./sidebar.css";
import {LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, Build} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <LineStyle/>    
                        Home 
                        </li>
                        <li className="sidebarListItem">
                        <Timeline/>    
                        Analytics
                        </li><li className="sidebarListItem">
                        <TrendingUp/>    
                        Watch Tower
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <PermIdentity className="sidebarIcon"/>    
                        Users
                        </li>
                        <li className="sidebarListItem">
                        <Storefront className="sidebarIcon"/>    
                        Leads
                        </li><li className="sidebarListItem">
                        <Build className="sidebarIcon"/>    
                        Scoring Tool
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <MailOutline/>    
                        Mail 
                        </li>
                        <li className="sidebarListItem">
                        <DynamicFeed/>    
                        Feedback
                        </li><li className="sidebarListItem">
                        <ChatBubbleOutline/>    
                        Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <WorkOutline/>    
                        Manage
                        </li>
                        <li className="sidebarListItem">
                        <BarChart/>    
                        Analytics
                        </li><li className="sidebarListItem">
                        <Report/>    
                        Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    }