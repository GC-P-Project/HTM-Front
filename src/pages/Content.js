import React from 'react';
import {Route} from "react-router-dom";
import MainWrap from "../components/main/MainWrap";
import Wrap from "../components/video/Wrap";
import Detail from "../components/video/Detail";
import LoginWrap from "../components/login/LoginWrap";
import SignupWrap from "../components/singup/SignupWrap";

const Content = () => {
    return (
        <div style={{ paddingTop:"120px" }}>
            <Route exact path="/" component={MainWrap}/>
            <Route exact path="/list/:type" component={Wrap}/>
            <Route path="/detail/:idx" component={Detail}/>
            <Route path="/login" component={LoginWrap}/>
            <Route path="/signup" component={SignupWrap}/>
        </div>
    );
};

export default Content;