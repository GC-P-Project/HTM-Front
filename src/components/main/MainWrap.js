import React from "react"
import MainLogin from "./MainLogin";
import MainNotlogin from "./MainNotlogin";

const MainWrap = () => {
    const loginActive = window.sessionStorage.getItem("token");
    const loginFlag = loginActive !== null ? true : false;

    return (
        <div>
            {loginFlag ? (
                <MainLogin />
            ) : (
                <MainNotlogin />
            )}
        </div>
    );
};

export default MainWrap;
