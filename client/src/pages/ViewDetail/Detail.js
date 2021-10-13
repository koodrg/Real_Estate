import { React, useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import './Detail.css'

const Detail = () => {
    const params = useParams()
    const [product, setProduct] = useState([])
    const [utilities, setUtilities] = useState([])
    const [productRecommend, setProductRecommend] = useState([])
    const [q, setQ] = useState([])
    const [categoryDetail, setCategoryDetail] = useState([])
    const [price_maxDetail, setPriceMaxDetail] = useState([])
    const [price_minDetail, setPriceMinDetail] = useState([])

    console.log(params.id)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/real-estate/get-by-id-elastic/${params.id}`)
                const responseJson = await response.json()
                const { data } = responseJson
                const listOfUtilitiesName =  data.utilsList.map(async util => {
                    try {
                        const response = await  fetch(`http://localhost:8080/utilities/name/${util}`);
                        const responseJson = await response.json()
                        const {name} = responseJson;
                        return name;
                    } catch(err){
                        console.log(err)
                    }
                })
                Promise.all(listOfUtilitiesName)
                    .then((results) => {
                        setUtilities(results)
                }) 
                
                await setQ(data.detail_address.district)
                await setCategoryDetail(data.id_category)
                await setPriceMaxDetail(data.price_by_num * 1.1)
                await setPriceMinDetail(data.price_by_num * 0.9)
                await setProduct(data)
            
            } catch (error) {
                console.log("Error:", error.message)
            }
        };
        fetchData()
    }, [params.id])


    console.log(product)
    console.log(q)
    console.log(categoryDetail)
    console.log(price_maxDetail)
    console.log(price_minDetail)
    
    useEffect(() => {
        async function fetchData() {
            try {
                
                    const response = await fetch(`http://localhost:8080/real-estate/recommend/${q}/${categoryDetail}/${price_maxDetail}/${price_minDetail}`)
                    const responseJson = await response.json()
                    const { data } = responseJson
                    console.log(data)
                    setProductRecommend(data)
                
            } catch (error) {
                console.log("Error:", error.message)
            }
        };
        fetchData()
    },[product]);
    

    if (productRecommend.length === 0) {
        return <main></main>
    } else if (productRecommend.length !== 0) {
        var string = product.more_description.split('\n', 10);
        return (
            <main>
                <section className="hogi-details">
                    <div className="container">
                        <div className="all-images">
                            <div className="image-left">
                                <img src={product.imgList[0]}></img>
                            </div>
                            <div className="image-right">
                                <div className="image-top">
                                    <div className="image-top-left">
                                        <img src={product.imgList[1]}></img>
                                    </div>
                                    <div className="image-top-right">
                                        <img src={product.imgList[2]}></img>
                                    </div>
                                </div>
                                <div className="image-bottom">
                                    <div className="image-bottom-left">
                                        <img src={product.imgList[3]}></img>
                                    </div>
                                    <div className="image-bottom-right">
                                        <img src={product.imgList[4]}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="infor-property">
                            <div className="breadcrumb-scroll">
                                <ul className="breadcrumb clearfix">
                                    <li className="breadcrumb-item">
                                        <a>Hogi</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="fa fa-chevron-right"></i>
                                        <a>{product.detail_address.district}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="list-name">
                                <h1 className="project-name">{product.name}</h1>
                            </div>
                            <div className="list-basic-infor">
                                <ul className="about-infor">
                                    <li>
                                        <div className="icon bg-selection"></div>
                                        <p>{product.area.split(" ", 1)}  m<sup>2</sup></p>
                                    </li>
                                    <li>
                                        <div className="icon bg-hotel"></div>
                                        <p>{product.num_bedroom}</p>
                                    </li>
                                    <li>
                                        <div className="icon bg-bathroom"></div>
                                        <p>{product.num_wc}</p>
                                    </li>
                                </ul>
                                <div className="about-price">
                                    <strong>{product.price}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion" id="property-accordion">
                            <div className="property-info-item">
                                <div className="property-info-title">
                                    <img src="/images/house.png"></img>
                                    <strong>Tổng quan</strong>
                                </div>
                                <div className="property-info-content">
                                    <div className="property-content-detail">
                                        <div className="content-container">
                                            <p id="paragraph_0">{string[0]}</p>
                                            <p id="paragraph_1">{string[1]}</p>
                                            <p id="paragraph_2">{string[2]}</p>
                                            <p id="paragraph_3">{string[3]}</p>
                                            <p id="paragraph_4">{string[4]}</p>
                                            <p id="paragraph_5">{string[5]}</p>
                                            <p id="paragraph_6">{string[6]}</p>
                                            <p id="paragraph_7">{string[7]}</p>
                                            <p id="paragraph_8">{string[8]}</p>
                                            <p id="paragraph_9">{string[9]}</p>
                                            <p id="paragraph_10">{string[10]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="property-info-item">
                                <div className="property-info-title">
                                    <img src="/images/furnitures.png"></img>
                                    <strong>Nội thất</strong>
                                </div>
                                <div className="property-info-content">
                                    <div className="property-content-detail">
                                        <div className="property-facility">
                                            <ul className="list-unstyled">
                                                {utilities.map((util) => {
                                                    return (<li>
                                                        <img src="/images/checked.png"></img>
                                                        <p>{util}</p>
                                                    </li>)
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hogi-more">
                    <div className="container">
                        <div className="property-similar">
                            <div className="property-title clearfix">
                                <h2 className="property-name">Sản phẩm tương tự/ cùng tầm giá </h2>
                            </div>
                            <div className="list-property">
                                <div className="list-items">
                                    <div className="list-item">
                                        {
                                            productRecommend.map((item) => {
                                                return(
                                                    <div className="apartment-item">
                                                    <div className="item-image">
                                                        <a href={`/chi-tiet/${item._id}`}>
                                                            <img src={item._source.imgList[1]}></img>
                                                        </a>
                                                    </div>
                                                    <div className="item-caption">
                                                        <div className="top-caption">
                                                            <div className="caption-title">
                                                                    <a href={`/chi-tiet/${item._id}`}>{item._source.name}</a>
                                                            </div>
                                                            <div className="caption-address">
                                                                <address>{item._source.full_address}</address>
                                                            </div>
                                                            <ul className="caption-list-infor">
                                                                <li>
                                                                    <div className="icon bg-selection"></div>
                                                                    <p>{item._source.area.split(" ",1)}  m<sup>2</sup></p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-hotel"></div>
                                                                    <p>{item._source.num_bedroom}</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon bg-bathroom"></div>
                                                                    <p>{item._source.num_wc}</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-caption">
                                                            <div className="caption-price">
                                                                <p>{item._source.price}</p>
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
                    </div>
                </section>
            </main>
        )
    }
}

export default Detail;