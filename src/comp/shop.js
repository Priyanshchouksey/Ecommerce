import React, { useState } from 'react'
import './shop.css'
import { AiFillEye, AiFillHeart , AiOutlineClose } from 'react-icons/ai';

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false)
    const [detail,setDetail] = useState([])

    const detailpage = (product) =>{

        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail =() =>{
        setShowDetail(false)
    }
    return (
        <> 
            {
                showDetail ?
                    <>

                        <div className='product-detail'>
                           <button className='close-btn' onClick={closedetail}><AiOutlineClose/></button>
                           <div className='container'>
                               <div className='img-box'>
                                      <img src={detail.image} alt=''></img>
                               </div>
                               <div className='info'>
                                <h4># {detail.cat}</h4>
                                <h2> {detail.Name}</h2>
                                <p>A Screen Everyone will Love: Weather your family is streaming or video chatting with friends tablet A8...</p>
                                <h3>${detail.price}</h3>
                                <button onClick={() => addtocart (detail)}>Add To Cart</button>
                               </div>
                           </div>
                        </div>
                    </>
                    : null

        }
            <div className='shop'>
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className='container'>
                    <div className='left-box'>
                        <div className='category'>
                            <div className='header'>
                                <h2>all categories</h2>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}># All</li>
                                    <li onClick={() => Filter("tv")}># tv</li>
                                    <li onClick={() => Filter("laptop")}># laptop</li>
                                    <li onClick={() => Filter("watch")}># watch</li>
                                    <li onClick={() => Filter("speaker")}># speaker</li>
                                    <li onClick={() => Filter("electronic")}># electronic</li>
                                    <li onClick={() => Filter("headphone")}># headphone</li>
                                    <li onClick={() => Filter("phone")}># phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img-box'>
                                <img src='image/watch4.jpg' alt=''></img>
                            </div>
                        </div>

                    </div>
                    <div className='right-box'>
                        <div className='banner'>
                            <div className='img-box'>
                                <img src='image/watch3.jpg' alt='' height='250px'></img>
                            </div>
                        </div>
                        <div className='product-box'>
                            <h2>Shop Product</h2>
                            <div className='product-container'>
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <>
                                                <div className='box'>
                                                    <div className='img-box'>
                                                        <img src={curElm.image} alt=''></img>
                                                        <div className='icon'>
                                                            <li><AiFillHeart /></li>
                                                            <li onClick={()=> detailpage (curElm)}><AiFillEye /></li>

                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>{curElm.Name}</h3>
                                                        <p>{curElm.price}</p>
                                                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Shop