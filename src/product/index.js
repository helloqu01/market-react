import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import './index.css'
import { API_URL } from "../config/constants.js";
import dayjs from 'dayjs';
function ProductPage(){
    const {id} = useParams();
    const [product, setproduct] = useState(null);
    useEffect(
        function(){
            // axios.get(`https://7d7b6283-b746-44a0-812b-9588e5e38002.mock.pstmn.io/products/${id}`).then(function(result){
            axios.get(`${API_URL}/products/${id}`).then(function(result){
                setproduct(result.data.product);
                console.log("통신결과:" , result);
               
            }).catch(function(error){
                console.error('에러발생',error);
            });

        },[]);
    
        if(product === null){
            return <h1>상품정보를 받고 있습니다...</h1>
        }
    return (
        <div>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`}/>
            </div>
            <div id="profile-box">
                <img src='/images/icons/avatar.png'/>
                <span>{product.seller}</span>
            </div>
            <div id='contents-box'>
                <div id='name'>{product.name}</div>
                <div id='price'>{product.price}원</div>
                <div id='createdAt'>{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
                <pre id='description'>{product.description}</pre>
            </div>
        </div>
    );
}

export default ProductPage;