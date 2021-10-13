import React from 'react';
import './newuserwiget.css';
import { Visibility } from '@material-ui/icons';

const NewUserWidget = () => {
    return (
        <div className ="newUserWidget">
            <span className="widgetTitle">
                New Join Member
            </span>
            <ul className ="widgetList">
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="avatarAndName">
                        <img src="https://spartabeerclub.vn/media/images/article/507/min.jpg" alt="" className="widgetImg" />
                        <span className ="userName">Nguyen Huu Minh Quy</span>
                    </div>
                    <span className="userTitle">koodrg@gmail.com</span>
                    <span className = "userPhoneNumber">0916649109</span>
                    <button className ="widgetButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NewUserWidget;
