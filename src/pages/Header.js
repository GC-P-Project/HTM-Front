import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <StyledHeader className="HeaderFont">
                <div>
                    <Link to="/">
                        <button><img src={logo}></img></button>
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button>/&nbsp; Sign Up</button>
                    </Link>
                </div>
            </StyledHeader>
            <StyledNavigation>
                <div>
                    <Link to="/">
                        <button>HOME</button>
                    </Link>
                </div>
                <div>
                    <Link to="/all">
                        <button>ALL</button>
                    </Link>
                </div>
                <div>
                    <Link to="/upper">
                        <button>UPPER</button>
                    </Link>
                </div>
                <div>
                    <Link to="/lower">
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
