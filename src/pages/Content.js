import React from 'react';
import {Route} from "react-router-dom";
import MainWrap from "../components/main/MainWrap";
import AllWrap from "../components/all/AllWrap";
import AllDetail from "../components/all/AllDetail";
import UpperWrap from "../components/upper/UpperWrap";
import UpperDetail from "../components/upper/UpperDetail";
import LowerWrap from "../components/lower/LowerWrap";
import LowerDetail from "../components/lower/LowerDetail";
import LoginWrap from "../components/login/LoginWrap";
import SignupWrap from "../components/singup/SignupWrap";

const Content = () => {
    return (
        <div style={{ paddingTop:"120px" }}>
            <Route exact path="/" component={MainWrap} />
            <Route path="/all" component={AllWrap}/>
            <Route path="/all_detail/:idx" component={AllDetail}/>
            <Route path="/upper" component={UpperWrap}/>
            <Route path="/upper_detail/:idx" component={UpperDetail}/>
            <Route path="/lower" component={LowerWrap}/>
            <Route path="/lower_detail/:idx" component={LowerDetail}/>
            <Route path="/login" component={LoginWrap}/>
            <Route path="/signup" component={SignupWrap}/>
        </div>
    );
};

export default Content;