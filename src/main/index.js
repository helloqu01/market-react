
import React from 'react'
import './index.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { API_URL } from "../config/constants.js";

dayjs.extend(relativeTime);
function MainPage() {
    const [products, setproduct] = React.useState([]);

    React.useEffect(
        function(){
            // axios.get('https://7d7b6283-b746-44a0-812b-9588e5e38002.mock.pstmn.io/products').then(function(result){
            axios.get(`${API_URL}/products`).then(function(result){
                console.log("통신결과:" , result);
                const products=result.data.products;
                setproduct(products);//프로덕트 업데이트
            }).catch(function(error){
                console.error('에러발생',error);
            });

        },[]);
        
        
        
     
    return (
    <div>
       
            <div id="banner">
                <img src="images/banners/banner1.png" alt=""/>
            </div>
            <h1 id='product-headline'>판매되는 상품들</h1>
            <div id="product-list">
                    {
                        products.map(function(product, index){
                            return (
                                <div className='product-card'>
                                    <Link className='product-link' to={`/products/${product.id}`}>
                                        <div>
                                            <img className='product-img' src={`${API_URL}/${product.imageUrl}`}/>
                                        </div>
                                        <div className='product-contents'>
                                            <span className='product-name'>{product.name}</span>
                                            <span className='product-price'>{product.price}원</span>
                                           
                                           <div className='product-footer'>
                                                <div className='product-seller'>
                                                    <img className='product-avatar' src="/images/icons/avatar.png"/>
                                                    <span>{product.seller}</span>
                                                </div>
                                                <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                
            </div>
     
    </div>
    );
}

export default MainPage;