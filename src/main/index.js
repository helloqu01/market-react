
import React from 'react'
import './index.css'
import axios from 'axios';

function MainPage() {
    const [products, setproduct] = React.useState([]);

    React.useEffect(
        function(){
            axios.get('https://7d7b6283-b746-44a0-812b-9588e5e38002.mock.pstmn.io/products').then(function(result){
                console.log("통신결과:" , result);
                const products=result.data.products;
                setproduct(products);//프로덕트 업데이트
            }).catch(function(error){
                console.error('에러발생',error);
            });

        },[]);
        
        
        
     
    return (
    <div>
        <div id="header">
        <div id="header-area">
            <img src="./images/images/icons/logo.png" alt=""/>
        </div>
        </div>
        <div id="body">
            <div id="banner">
                <img src="./images/images/banners/banner1.png" alt=""/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                    {
                        products.map(function(product, index){
                            return (
                                <div className='product-card'>
                                        <div>
                                            <img className='product-img' src={product.imageUrl}/>
                                        </div>
                                        <div className='product-contents'>
                                            <span className='product-name'>{product.name}</span>
                                            <span className='product-price'>{product.price}원</span>
                                            <div className='product-seller'>
                                                <img className='product-avatar' src="./images/images/icons/avatar.png"/>
                                                <span>{product.seller}</span>
                                            </div>

                                        </div>
                                </div>
                            );
                        })
                    }
                
            </div>
        </div>
        <div id="footer"></div>
    </div>
    );
}

export default MainPage;