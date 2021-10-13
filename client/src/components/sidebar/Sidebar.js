import React from 'react';
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const sideBar = () => {
    return (
        <div className = "sidebar">
            <div className ="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <div className="sidebarList">
                        <Link to='/admin' className="link">
                        <li className="sidebarListItem" >
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem" active>
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className ="sidebarIcon"/>
                            Sales
                        </li>
                        
                    </div>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <div className="sidebarList">
                        <Link to='/admin/realestate' className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className ="sidebarIcon"/>
                                RealEstate
                            </li>
                        </Link>
                        <Link to='/admin/users' className="link">
                            <li className="sidebarListItem" >
                                <LineStyle className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to='/admin/categories' className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Categories
                            </li>
                        </Link>
                        <Link to='/admin/utilities' className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className ="sidebarIcon"/>
                                Utilities
                            </li>
                        </Link>
                        
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default sideBar;