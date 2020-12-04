import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div>
                    <Link to="/">
                        <button>HTM</button>
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        <button>Login / Sign Up</button>
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
    border-bottom-style: solid;
    border-color: lightgray;
    border-width: 3px;
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 100;
    display: flex;
    align-items: center;

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

    & > div > a > button {
        color: black;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
    }
`;

export default Header;
