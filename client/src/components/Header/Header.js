import { React, useState, useEffect,  useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import { useHistory, Link } from 'react-router-dom'
import {UserContext} from '../../App'

const Header = () => {
    const history = useHistory()
    const history1 = useHistory()
    const { state1, dispatch1 } = useContext(UserContext)

    console.log(state1)
    const renderList = () => {
        if (state1) {
            return [
                <li><Link to='/mua-ban/can-ho'>Mua bán</Link></li>,
                <li><Link to='/cho-thue/can-ho'>Cho thuê</Link></li>,
                <li>
                    <Link 
                        onClick={() => {
                            localStorage.clear()
                            dispatch1({ type: "CLEAR" })
                            history1.push('../')
                    }}
                    >
                        Đăng xuất
                    </Link>
                </li>
            ]
        } else {
            return [
                <li><Link to='/mua-ban/can-ho'>Mua bán</Link></li>,
                <li><Link to='/cho-thue/can-ho'>Cho thuê</Link></li>,
                <li><Link to='/dang-nhap'>Đăng nhập</Link></li>,
                <li><Link to='/dang-ki'>Đăng kí</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white">
                <div className="nav-logo">
                    <a href="/" className="brand-logo">Hogi</a>
                </div>
                <div className="nav-menu">
                    <ul className="right">
                        {renderList()}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;