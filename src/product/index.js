import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import './index.css'

function ProductPage(){
    const {id} = useParams();
    const [product, setproduct] = useState(null);
    useEffect(
        function(){
            axios.get(`https://7d7b6283-b746-44a0-812b-9588e5e38002.mock.pstmn.io/products/${id}`).then(function(result){
                setproduct(result.data);
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
                <img src={"/"+product.imageUrl}/>
            </div>
            <div id="profile-box">
                <img src='../images/images/icons/avatar.png'/>
                <span>{product.seller}</span>
            </div>
            <div id='contents-box'>
                <div id='name'>{product.name}</div>
                <div id='price'>{product.price}원</div>
                <div id='createdAt'>2022-02-23</div>
                <div id='description'>{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;