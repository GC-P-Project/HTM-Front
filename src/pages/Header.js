import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/icons/logo.png";

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <Link to="/">
                    <img src={logo} alt="img"></img>
                </Link>
            </div>
            <StyledNavigation>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                <button>페이지1</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <button>페이지2</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <button>페이지3</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </StyledNavigation>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    background-color: rgba(221, 221, 245, 1);
    border-bottom-style: solid;
    border-color: rgba(169, 188, 245, 1);
    border-width: 3px;
    position: fixed;
    width: 100%;
    z-index: 1000;

    & > div {
        margin: 0 auto;
        width: 80%;
    }

    & img {
        float: left;
        width: 250px;
    }

    @media (max-width: 768px) {
        & > div {
            margin: 0;
            width: 100%;
        }
    }
`;

const StyledNavigation = styled.div`
    & > div > ul {
        margin: 0;
    }

    & > div > ul > li {
        float: right;
        margin-left: 3%;
        padding-top: 21px;
        text-align: center;
    }

    & > div > ul > li > a > button {
        background-color: rgba(221, 221, 245, 0);
        border: 0;
        color: rgba(93, 109, 190, 1);
        font-size: 1.1rem;
        font-weight: 600;
        outline: 0;
    }

    @media (max-width: 768px) {
        & > div {
            background-color: rgba(221, 221, 245, 1);
            border-top-style: solid;
            border-color: rgba(169, 188, 245, 1);
            border-width: 3px;
            bottom: 0;
            position: fixed;
            width: 100%;
        }

        & > div > ul {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            padding-inline-start: 0;
        }

        & > div > ul > li {
            margin: 0;
            padding: 10px;
        }

        & > div > ul > li > a > button {
            font-size: 0.8rem;
            width: 80px;
        }
    }
`;

export default Header;
