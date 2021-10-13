import {React,useState,useEffect, useContext} from 'react'
import './ViewAll.css'
import ReactPaginate from 'react-paginate'
import { UserContext } from '../../App'
import {useHistory, Link } from 'react-router-dom'
import { ViewAllfilter, ViewAllfilter1, ViewAllfilter2, ViewAllfilter3 } from '../../components/Filter/ViewAllFilter'

const HometownSale = () => {
    const history = useHistory()
    const [data, setData] = useState([])
    const [datas, setDatas] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [isClick, setIsClick] = useState(1)
    var [id, setId] = useState('/mua-ban/nha-pho')
    var displayDatas = 0
    var pageCount = 0
    var changePage = 0
    var address = null
    var category = null
    var price_min
    var price_max
    if (state) {
        address = state[0]
        category = state[1]
        price_min = state[2]
        price_max = state[3]
    }

    //hàm set giá trị cho biến sau sự kiện
    function onChangeInput(value) {
        console.log(value)
        if (value == "ForBuy")
            setIsClick(1)
        else if(value == "ForRent")
            setIsClick(2)
    }
    function onChangeInput1(value) {
        address = value.value
    }

    async function onChangeInput2(value) {
        if (value.value == "căn hộ" && isClick == 1)
        {
            const response = await(await fetch('/categories/get-id-by-type/apartments_for_sale'));
            const responseJson = await response.json()
            category = responseJson;
            //console.log(category);
            id = '/mua-ban/can-ho';
        }
        else if (value.value == "căn hộ" && isClick == 2)
        {
            //category = await fetch('/categories/get-id-by-type/apartments_for_rent');
            const response = await(await fetch('/categories/get-id-by-type/apartments_for_rent'));
            const responseJson = await response.json()
            category = responseJson;
            id = '/cho-thue/can-ho';
        }
        else if (value.value == "nhà" && isClick == 1)
        {
            //category = await fetch('/categories/get-id-by-type/townhouses_for_sale');
            const response = await(await fetch('/categories/get-id-by-type/townhouses_for_sale'));
            const responseJson = await response.json()
            category = responseJson;
            id = '/mua-ban/nha-pho';
        }
        else if (value.value == "nhà" && isClick == 2)
        {
            //category = await fetch('/categories/get-id-by-type/townhouses_for_rent');
            const response = await(await fetch('/categories/get-id-by-type/townhouses_for_rent'));
            const responseJson = await response.json()
            category = responseJson;
            id = '/cho-thue/nha-pho';
        }
    }
    function onChangeInput3(value) {
        price_min = value.value[0]
        price_max = value.value[1]
    }

    
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


    useEffect(() => {
        fetch('/real-estate/get-by-category/townhouses_for_sale', {
        }).then(res => res.json())
            .then(result => {
                setData(result)
            })
    }, [])

    console.log(address)
    console.log(category)
    console.log(price_min)
    console.log(price_max)

    useEffect(() => {
            fetch(`/real-estate/api/_search?q=${address}&category=${category}`, {
            }).then(res => res.json())
                .then(result => {
                    setDatas(result.data)
                })
    }, [category])
    
    useEffect(() => {
        if (price_min !== undefined && price_max !== undefined) {
            fetch(`/real-estate/api/_search?q=${address}&category=${category}&price_max=${price_max}&price_min=${price_min}`, {
            }).then(res => res.json())
                .then(result => {
                    setDatas(result.data)
            })
        }
    },[price_min])

    const [pageNumber, setPageNumber] = useState(0)
    const datasPerPage = 15
    const pagesVisited = pageNumber * datasPerPage
    var length = 0
    if (datas.length!=0)
    {
        displayDatas = datas.slice(pagesVisited, pagesVisited + datasPerPage)
        displayDatas = displayDatas.map((item) => {
            return item._source
        })
        pageCount = Math.ceil(datas.length / datasPerPage)
        changePage = ({selected}) => {
            setPageNumber(selected)
        }
        length = datas.length
    } else {
        displayDatas = data.slice(pagesVisited, pagesVisited + datasPerPage)
        pageCount = Math.ceil(data.length / datasPerPage)
        changePage = ({selected}) => {
            setPageNumber(selected)
        }
        length = data.length
    }

    console.log(data)
    console.log(datas)
    console.log(displayDatas.length)
    console.log(isClick)
    
    if (displayDatas.length === 0)
    {
        return <main></main>    
    } else if (displayDatas.length !== 0)
    {
        return (
            <main>
                <section className="hogi-search-bar">
                    <div className="main-form">
                        <div className="form-group form-search-box">
                            <div className="form-select">
                                <select className="form-control" onChange={(e) => onChangeInput(e.target.value)}>
                                    <option value="ForBuy">Mua Bán</option>
                                    <option value="ForRent">Cho thuê</option>
                                </select>
                            </div>
                            <div className="form-search">
                                <input className="form-control" type="text" autoComplete="off" placeholder="Từ khóa, địa chỉ, quận,..." onChange={(e)=>address = e.target.value}></input>
                                <button className="btn-filter btn-primary" onClick={()=>search()}>
                                    <em className="fa fa-search"></em>
                                </button>
                            </div>
                        </div>
                        <div className="property-location-filter search-dropdown">
                            <div className="btn-group dropdown" auto-close="outsideClick">
                                <button type="button" className="btn-filter btn-search-dropdown">
                                    <i className="fa fa-map-marker"></i>
                                </button>
                                <ViewAllfilter onChange={onChangeInput1}/>
                            </div>
                        </div>  
                        <div className="property-type-filter search-dropdown">
                            <div className="btn-group dropdown" auto-close="outsideClick">
                                <button type="button" className="btn-filter btn-search-dropdown">
                                    <i className="fa fa-home"></i>
                                </button>
                                <ViewAllfilter1 onChange={onChangeInput2}/>
                            </div>
                        </div>  
                        <div className="property-price-filter search-dropdown">
                            <div className="btn-group dropdown" auto-close="outsideClick">
                                <button type="button" className="btn-filter btn-search-dropdown">
                                    <i className="fa fa-usd"></i>
                                </button>
                                {isClick === 1 ? <ViewAllfilter2 onChange={onChangeInput3}/> : <ViewAllfilter3 onChange={onChangeInput3}/>}
                            </div>
                        </div>  
                    </div>
                </section>
                <section className="hogi-ds-bds main-section">
                    <div className="container">
                        <div className="breadcrumb-scroll">
                            <ul className="breadcrumb clearfix">
                                <li className="breadcrumb-item">
                                    <a>Hogi</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <i className="fa fa-chevron-right"></i>
                                    <a>Nhà phố</a>
                                </li>
                            </ul>
                        </div>
                        <div className="head-ds-bds">
                            <h2 className="title">Mua Bán Nhà Phố</h2>
                            <div className="apartment-number">
                                <p>
                                    <span>
                                        {length} bất động sản
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="body-ds-bds">
                            {
                                displayDatas.map(item => {
                                    return (
                                        <div className="col-sm-6 col-lg-4">
                                            <div className="apartment-item" key={item._id}>
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
                                                                <p>{item.area_by_num}  m<sup>2</sup></p>
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
                                        </div>
                                    )
                                })
                            }
                        </div> 
                        <div className="paging">
                            <ReactPaginate
                                previousLabel={<i className="fa fa-angle-left"></i>}
                                nextLabel={<i className="fa fa-angle-right"></i>}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                activeClassName={"paginationActive"}
                                previousLinkClassName={"previousBtn"}
                                nextLinkClassName={"nextBtn"}
                                disabledClassName={"paginationDisabled"}
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default HometownSale;