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
    border-bottom-style: solid;
    border-color: lightgray;
    border-width: 3px;
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1000;
    display: flex;
    align-items: center;
    background-color: rgba(250, 250, 250, 1);

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
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    background-color: rgba(250, 250, 250, 1);

    & > div > a > button {
        color: black;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
    }
`;

export default Header;
