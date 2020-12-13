import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import styled from "styled-components";

const Header = () => {
    const loginActive = window.sessionStorage.getItem("token");
    const loginFlag = loginActive !== null ? true : false;

    const LogoutClick = () => {
        window.sessionStorage.clear();
        alert("HTM을 이용해 주셔서 감사합니다.");
        window.location.reload();
    }

    return (
        <>
            <StyledHeader className="HeaderFont">
                <div>
                    <Link to="/">
                        <button>
                            <img src={logo} alt="HTM logo" style={{ paddingBottom: "5px" }} ></img>
                        </button>
                    </Link>
                </div>
                {loginFlag ? (
                    <div>
                        <Link to="/">
                            <button onClick={LogoutClick} >LOGOUT</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">
                            <button>SIGN IN</button>
                        </Link>
                        <Link to="/signup">
                            <button>/&nbsp; SIGN UP</button>
                        </Link>
                    </div>
                )}
            </StyledHeader>
            <StyledNavigation>
                <div>
                    <Link to="/">
                        <button>HOME</button>
                    </Link>
                </div>
                <div>
                    <Link to="/list/all">
                        <button>ALL</button>
                    </Link>
                </div>
                <div>
                    <Link to="/list/upper">
                        <button>UPPER</button>
                    </Link>
                </div>
                <div>
                    <Link to="/list/lower">
                        <button>LOWER</button>
                    </Link>
                </div>
            </StyledNavigation>
        </>
    );
};

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 100;
    display: flex;
    align-items: center;
    background-color: white;
    padding-left: 33px;
    padding-right: 34px;

    & > div:nth-child(2) {
        width: 300px;
        text-align: right;
    }

    & > div > a > img {
        color: black;
        cursor: pointer;
    }

    & > div > a > button {
        color: black;
        cursor: pointer;
    }

    & > div:nth-child(1) > a > button {
        font-size: 2rem;
        font-weight: 600;
    }

    & > div:nth-child(2) > a > button {
        font-size: 1rem;
        font-weight: 600;
    }
`;

const StyledNavigation = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    border-top-style: solid;
    border-color: lightgray;
    border-width: 3px;
    background-color: white;

    & > div > a > button {
        color: black;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
    }
`;

export default Header;
