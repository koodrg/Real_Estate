import { React, useState, useEffect,  useContext, createContext,useReducer } from 'react'
import {useHistory, Link } from 'react-router-dom'
import './Homepage.css'
import { UserContext } from '../../../App'
import { Mainfilter, Mainfilter1, Mainfilter2, Mainfilter3 }from '../../Filter/Mainfilter'

const Homepage = () => {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    const [address,setAddress] = useState(null)
    const [category, setCategory] = useState('60c7253aed67c61170d872f7')
    const [price_max, setPriceMax] = useState()
    const [price_min, setPriceMin] = useState()
    const [id, setId] = useState('/mua-ban/can-ho')
    const [isClick, setIsClick] = useState(1)
    
    //ApartmentSale
    const [dataApartmentSale, setDataApartmentSale] = useState([])
    useEffect(() => {
        fetch('/real-estate/get-by-category/apartments_for_sale', {
        }).then(res => res.json())
            .then(result => {
                setDataApartmentSale(result)
            })
    }, [])
    const displayDataApartmentSale = dataApartmentSale.slice(6, 10)
    console.log(displayDataApartmentSale)

    //ApartmentRent
    const [dataApartmentRent, setDataApartmentRent] = useState([])
    useEffect(() => {
        fetch('/real-estate/get-by-category/apartments_for_rent', {
        }).then(res => res.json())
            .then(result => {
                setDataApartmentRent(result)
            })
    }, [])
    const displayDataApartmentRent = dataApartmentRent.slice(1, 5)
    console.log(displayDataApartmentRent)

    //HometownRent
    const [dataHometownRent, setDataHometownRent] = useState([])
    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_rent', {
        }).then(res => res.json())
            .then(result => {
                setDataHometownRent(result)
            })
    }, [])
    const displayDataHometownRent = dataHometownRent.slice(5, 9)

    //HometownSale
    const [dataHometownSale, setDataHometownSale] = useState([])
    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_sale', {
        }).then(res => res.json())
            .then(result => {
                setDataHometownSale(result)
            })
    }, [])
    const displayDataHometownSale = dataHometownSale.slice(1, 5)

    //hàm set giá trị cho biến sau sự kiện
    function onChangeInput(value) {
        setAddress(value.value)
    }
    async function onChangeInput1(value) {
        if (value.value == "căn hộ" && isClick == 1)
        {
            const response = await(await fetch('/categories/get-id-by-type/apartments_for_sale'));
            const responseJson = await response.json()
            setCategory(responseJson);
            console.log(category);
            setId('/mua-ban/can-ho');
        }
        else if (value.value == "căn hộ" && isClick == 2)
        {
            //category = await fetch('/categories/get-id-by-type/apartments_for_rent');
            const response = await(await fetch('/categories/get-id-by-type/apartments_for_rent'));
            const responseJson = await response.json()
            setCategory(responseJson);
            setId('/cho-thue/can-ho');
        }
        else if (value.value == "nhà" && isClick == 1)
        {
            //category = await fetch('/categories/get-id-by-type/townhouses_for_sale');
            const response = await(await fetch('/categories/get-id-by-type/townhouses_for_sale'));
            const responseJson = await response.json()
            setCategory(responseJson);
            setId('/mua-ban/nha-pho');
        }
        else if (value.value == "nhà" && isClick == 2)
        {
            //category = await fetch('/categories/get-id-by-type/townhouses_for_rent');
            const response = await(await fetch('/categories/get-id-by-type/townhouses_for_rent'));
            const responseJson = await response.json()
            setCategory(responseJson);
            setId('/cho-thue/nha-pho');
        }

    }
    function onChangeInput2(value) {
        setPriceMin(value.value[0]);
        setPriceMax(value.value[1]);
    }

    console.log(address);
    console.log(category);
    console.log(price_min);
    console.log(price_max);
    
    const search = () => {
        console.log(id)
        const data = [address, category, price_min, price_max]
        console.log(data)
        localStorage.setItem("address", data[0])
        localStorage.setItem("category", data[1])
        localStorage.setItem("price_min", data[2])
        localStorage.setItem("price_max", data[3])
        dispatch({ type: "DATA", payload: data })
        history.push(id)
    }

    const handleClick = (id) => {
        const data = null
        console.log(data)
        localStorage.setItem("data", data)
        dispatch({ type: "DATA", payload: data })
        history.push(id)
    }
    
    return (
        <main>
            <section className="home-banner">
                <div className="home-background">
                    <img src="/images/home-bg2.jpg" alt="" />
                </div>
                <div className="home-search">
                    <h1 className="title">Đúng nhà, đúng giá, đúng thời điểm</h1>
                    <div className="search-bar">
                        <ul className="services clearfix">
                            <li className={isClick === 1 ? "name-services active" : "name-services"} onClick={() => [setIsClick(1), setId('/mua-ban/can-ho'), setCategory('60c7253aed67c61170d872f7')]}>Mua</li>
                            <li className={isClick === 2 ? "name-services active" : "name-services"} onClick={() => [setIsClick(2), setId('/cho-thue/can-ho'), setCategory('60c7253aed67c61170d872f6')]}>Thuê</li>
                        </ul>
                        <div className="search clearfix">
                            <div className="search-keyword clearfix">
                                <input type="text" placeholder="Vui lòng nhập địa chỉ, đường, quận hoặc dự án ..." onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <button type="submit" class="btn-search" onClick={()=>search()}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        
                        <ul className="search-filter clearfix" id="sale">
                            <li>
                                <Mainfilter onChange={onChangeInput}/>
                            </li>
                            <li><Mainfilter1 onChange={onChangeInput1}/></li>
                            {isClick === 1 ? <li><Mainfilter2 onChange={onChangeInput2}/></li> : <li><Mainfilter3 onChange={onChangeInput2}/></li>}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="home-apartment">
                <div className="container">
                    <div className="apartment-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ bán</h2>
                            <a className="btn-view-all" onClick={()=>handleClick('/mua-ban/can-ho')}>
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div> 
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataApartmentSale.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <Link to={`/chi-tiet/${item._id}`}>
                                                            <img src={item.imgList[0]}></img>
                                                        </Link>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <Link to={`/chi-tiet/${item._id}`}>{item.name}</Link>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <Link to={`/chi-tiet/${item._id}`}>Xem chi tiết</Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment-for-rent ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Căn hộ cho thuê</h2>
                            <a className="btn-view-all" onClick={()=>handleClick('/cho-thue/can-ho')}>
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataApartmentRent.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <Link to={`/chi-tiet/${item._id}`}>
                                                            <img src={item.imgList[0]}></img>
                                                        </Link>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <Link to={`/chi-tiet/${item._id}`}>{item.name}</Link>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <Link to={`/chi-tiet/${item._id}`}>Xem chi tiết</Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hometown-for-sale ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố bán</h2>
                            <a className="btn-view-all" onClick={()=>handleClick('/mua-ban/nha-pho')}>
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        <div className="tabs-apartment">
                            <div className="property-items">
                            <div className="property-item">
                                    {
                                        displayDataHometownSale.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a href={`/chi-tiet/${item._id}`}>
                                                            <img src={item.imgList[0]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <a href={`/chi-tiet/${item._id}`}>{item.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <a href={`/chi-tiet/${item._id}`}>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hometown-for-rent ">
                        <div className="title clearfix">
                            <h2 className="hogi-title">Nhà phố cho thuê</h2>
                            <a className="btn-view-all" onClick={()=>handleClick('/cho-thue/nha-pho')}>
                                Xem tất cả
                                <em className="fa fa-angle-right"></em>
                            </a>
                        </div>
                        <div className="tabs-apartment">
                            <div className="property-items">
                                <div className="property-item">
                                    {
                                        displayDataHometownRent.map(item => {
                                            return (
                                                <div className="apartment-item">
                                                    <div className="item-image">
                                                        <Link to={`/chi-tiet/${item._id}`}>
                                                            <img src={item.imgList[0]}></img>
                                                        </Link>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                <Link to={`/chi-tiet/${item._id}`}>{item.name}</Link>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-details">
                                                        <Link to={`/chi-tiet/${item._id}`}>Xem chi tiết</Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Homepage;