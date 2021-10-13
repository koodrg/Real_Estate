import React from 'react'
import Chart from '../../components/chart/Chart'
import './home.css';
//import {userData} from '../../dummyData';
import NewUserWidget from '../../components/newUserWidget/NewUserWidget';


const Home = () => {
    return (
        <div className = "home">
            <Chart title="User Analytics" data={{}} dataKey="Active User" grid />
            <NewUserWidget/>
        </div>
    )
}

export default Home;

