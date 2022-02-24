import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import MainPageComponent from "./main/index.js"
import React from 'react'
import {Button} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'

//페이지 이동 라우터 관련
import {Switch, Route,Link,useHistory} from 'react-router-dom'
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  const history = useHistory();
  return (
      <div>
        <div id="header">
          <div id="header-area">
            <Link to={"/"}>
            <img src="../images/images/icons/logo.png" alt=""/>
            </Link>
            <Button size='large' onClick={function(){
              // alert('업로드클릭')
              history.push("/upload");
            }} icon={<DownloadOutlined/>}>상품업로드</Button>
          </div>
        </div>
        <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
           <MainPageComponent />
          </Route>
          <Route exact={true} path={"/products/:id"}>
           <ProductPage />
          </Route>
          <Route exact={true} path={"/upload"}>
           <UploadPage />
          </Route>
        </Switch>
        </div>
        <div id="footer"></div>
      </div>
    
  
  );
}

export default App;
