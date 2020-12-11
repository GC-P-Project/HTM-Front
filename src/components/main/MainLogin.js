import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "../../assets/icons/pen.svg";
import StandingIcon from "../../assets/icons/main_standing.svg";

const MainLogin = () => {
    const Allvalue = 280;
    const Uppservalue = 240;
    const Lowervalue = 260;

    return (
        <>
            <StyledMainlogin>
                <div>
                    <StyledStandingIcon>
                        <img src={StandingIcon} alt="Lying down Icon" width="160px"></img>
                    </StyledStandingIcon>
                    <StyledUserinfo>
                        <StyledUsername>
                            <p>김민지 회원님</p>
                        </StyledUsername>
                        <StyledUserData>
                            <div>
                                <p>키: 170cm</p>
                                <p>몸무게: 50kg</p>
                            </div>
                            <div>
                                <img src={EditIcon} alt="User Data Edit Icon" width="60px"></img>
                            </div>
                        </StyledUserData>
                        <StyledWatcingtime>
                            <p>부위 별 운동 영상 시청 시간 (분)</p>
                        </StyledWatcingtime>
                        <StyledUserProgressbar>
                            <div>
                                <span>ALL</span> <ProgressBar variant="blue" max="300" animated now={Allvalue} label={`${Allvalue}분`}/>
                            </div>
                            <div>
                                <span>UPPER</span> <ProgressBar variant="blue" max="300" animated now={Uppservalue} label={`${Uppservalue}분`}/>
                            </div>
                            <div>
                                <span>LOWER</span> <ProgressBar variant="blue" max="300" animated now={Lowervalue} label={`${Lowervalue}분`}/>
                            </div>
                        </StyledUserProgressbar>
                    </StyledUserinfo>
                </div>
                <StyledRecommandTitle>
                    <p>
                        오늘은 <strong>[ 상체 ]</strong> 운동을 하는 게 어떨까요?
                    </p>
                </StyledRecommandTitle>
                <StyledRecommandButton>
                    <Link to="/">
                        <Button variant="outline-primary" size="lg">
                            부족한 운동 부위 추천 영상 보러 가기
                        </Button>
                    </Link>
                </StyledRecommandButton>
            </StyledMainlogin>
            <StyledTodayvideo>
                <StyledTodaytitle>
                    <p>오늘의 개인 맞춤형 추천 운동 영상</p>
                </StyledTodaytitle>
                <StyledTodayInfo>
                    <iframe
                        width="400"
                        height="220"
                        src="https://www.youtube.com/embed/54tTYO-vU2E"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="YouTube"
                    ></iframe>
                </StyledTodayInfo>
            </StyledTodayvideo>
        </>
    );
};

const StyledMainlogin = styled.div`
    background-color: #f0f7fe;
    border-radius: 50px;
    padding-bottom: 40px;

    & > div {
        display: flex;
    }

    & > div:nth-child(1) {
        padding-top: 50px;
    }
`;

const StyledStandingIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledUserinfo = styled.div`
    width: 300px;
`;

const StyledUsername = styled.div`
    text-align: center;
    border-radius: 50px;
    background-color: white;
    height: 40px;
    line-height: 40px;
`;

const StyledUserData = styled.div`
    margin-top: 10px;
    border-radius: 10px;
    background-color: #015cee;
    height: 115px;
    color: white;
    padding: 25px;
    display: flex;

    & > div:nth-child(1) {
        width: 300px;
    }
`;

const StyledWatcingtime = styled.div`
    text-align: center;
    border-radius: 50px;
    background-color: white;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
`;

const StyledUserProgressbar = styled.div`
    padding: 10px;
    color: white;
    background-color: #015cee;
    margin-top: 10px;
    border-radius: 10px;

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

const StyledRecommandTitle = styled.div`
    margin-top: 30px;
`;

const StyledRecommandButton = styled.div`
    margin-top: 10px;

    .btn-outline-primary {
        background-color: white;
    }

    .btn-outline-primary:hover {
        color: white;
        background-color: #015cee;
    }
`;

const StyledTodayvideo = styled.div`
    margin-top: 30px;
`;

const StyledTodaytitle = styled.div`
    text-align: center;
    border-radius: 50px;
    background-color: white;
    height: 40px;
    line-height: 40px;
    border-style: solid;
    border-color: #015cee;
    border-width: 1px thin;
    width: 60%;
`;

const StyledTodayInfo = styled.div`
    text-align: center;
    margin-top: 30px;
`;

export default MainLogin;
