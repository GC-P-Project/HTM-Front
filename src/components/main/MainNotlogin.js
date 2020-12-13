import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import lyingIcon from "../../assets/icons/main_lying.svg";

const MainNotlogin = () => {
    const Allvalue = 75;
    const Uppservalue = 60;
    const Lowervalue = 90;

    return (
        <StyledMainnotlogin>
            <StyledMainIcon>
                <img src={lyingIcon} alt="Lying down Icon" width="300px"></img>
            </StyledMainIcon>
            <StyledProgressbar>
                <div>
                    <span>ALL</span> <ProgressBar variant="blue" animated now={Allvalue} label={`${Allvalue}분`} />
                </div>
                <div>
                    <span>UPPER</span> <ProgressBar variant="blue" animated now={Uppservalue} label={`${Uppservalue}분`} />
                </div>
                <div>
                    <span>LOWER</span> <ProgressBar variant="blue" animated now={Lowervalue} label={`${Lowervalue}분`} />
                </div>
            </StyledProgressbar>
            <StyledMaininformation>
                현재 <strong>[ 상체 ]</strong> 운동이 부족한 상태입니다.<br></br>
                오늘의 운동 영상으로 <strong>[ 상체 ]</strong> 운동 영상을 추천합니다.<br></br>
                <br></br>
                HTM과 함께 <strong>현재 필요한 운동</strong>이 무엇인지 알아보세요.
            </StyledMaininformation>
            <StyledMainbutton>
                <Link to="/login">
                    <Button variant="primary" size="lg">
                        Sign In
                    </Button>
                </Link>
                <Link to="signup">
                    <Button variant="primary" size="lg">
                        Sign Up
                    </Button>
                </Link>
            </StyledMainbutton>
        </StyledMainnotlogin>
    );
};

const StyledMainnotlogin = styled.div`
    background-color: #f0f7fe;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding-bottom: 50px;
`;

const StyledMainIcon = styled.div`
    text-align: center;
    padding-top: 80px;
`;

const StyledProgressbar = styled.div`
    padding-top: 30px;
    margin-bottom: 30px;

    & > div {
        display: flex;
    }

    & > div > span {
        width: 50px;
    }

    .progress {
        height: 1.4rem;
        width: 80%;
    }

    .progress-bar {
        margin: 0;
    }

    & > div {
        margin: 1rem;
    }
`;

const StyledMaininformation = styled.p`
    text-align: center;
    margin-bottom: 30px;
`;

const StyledMainbutton = styled.div`
    text-align: center;

    & > a > button {
        width: 200px;
        background-color: #015cee;
        border-radius: 5px;
    }

    & > a:nth-child(2) > button {
        margin-left: 30px;
    }
`;

export default MainNotlogin;
