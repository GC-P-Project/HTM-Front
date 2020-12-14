import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Highcharts from "highcharts/highstock";
import LineChart from "highcharts-react-official";
import EditIcon from "../../assets/icons/pen.svg";
import StandingIcon from "../../assets/icons/main_standing.svg";

const MainLogin = () => {
    const nameinfo = window.sessionStorage.getItem("nameinfo");
    const heightinfo = window.sessionStorage.getItem("heightinfo");
    const weightinfo = window.sessionStorage.getItem("weightinfo");
    const upperinfo = window.sessionStorage.getItem("upperinfo");
    const lowerinfo = window.sessionStorage.getItem("lowerinfo");
    const allinfo = window.sessionStorage.getItem("allinfo");

    const uppervalue = "/list/upper";
    const lowervalue = "/list/lower";
    const allvalue = "/list/all";

    const uppername = "[ 상체 ]";
    const lowername = "[ 하체 ]";
    const allname = "[ 전신 ]";

    const timevalue = ({ upperinfo, lowerinfo, allinfo }) => {
        const workoutvalue = lowerinfo > upperinfo && allinfo > upperinfo ? upperinfo : lowerinfo > allinfo ? allinfo : lowerinfo;
        if (workoutvalue === upperinfo) {
            return uppervalue;
        } else if (workoutvalue === lowerinfo) {
            return lowervalue;
        } else if (workoutvalue === allinfo) {
            return allvalue;
        }
    };

    const recommandvalue = ({ upperinfo, lowerinfo, allinfo }) => {
        const workoutvalue = lowerinfo > upperinfo && allinfo > upperinfo ? upperinfo : lowerinfo > allinfo ? allinfo : lowerinfo;
        if (workoutvalue === upperinfo) {
            return uppername;
        } else if (workoutvalue === lowerinfo) {
            return lowername;
        } else if (workoutvalue === allinfo) {
            return allname;
        }
    };

    const options = {
        chart: {
            type: "line",
            backgroundColor: "#458bfc",
            borderRadius: 10,
            style: {
                fontFamily: "LotteMartDream",
                color: "white",
            },
        },
        colors: ["white"],
        credits: {
            enabled: false,
        },
        title: {
            text: "지난주 요일별 운동 시간",
            style: {
                fontFamily: "LotteMartDream",
                color: "#458bfc",
            },
        },
        xAxis: {
            categories: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
            labels: {
                style: {
                    fontFamily: "LotteMartDream",
                    color: "white",
                },
            },
            title: {
                style: {
                    fontFamily: "LotteMartDream",
                    color: "white",
                },
            },
        },
        yAxis: {
            labels: {
                style: {
                    fontFamily: "LotteMartDream",
                    color: "white",
                },
            },
            title: {
                text: "운동 시간",
                style: {
                    fontFamily: "LotteMartDream",
                    color: "black",
                },
            },
        },
        series: [
            {
                name: "요일별 운동 시간",
                data: [50, 35, 45, 50, 45, 40, 55],
            },
        ],
    };

    return (
        <>
            <StyledMainlogin>
                <div>
                    <StyledStandingIcon>
                        <div>함께 운동한 지</div>
                        <div>28일</div>
                        <img src={StandingIcon} alt="Lying down Icon" width="130px"></img>
                    </StyledStandingIcon>
                    <StyledUserinfo>
                        <StyledUsername>
                            <p>{nameinfo} 회원님</p>
                        </StyledUsername>
                        <StyledUserData>
                            <div>
                                <p>키: {heightinfo}cm</p>
                                <p>몸무게: {weightinfo}kg</p>
                            </div>
                            <div>
                                <img src={EditIcon} alt="User Data Edit Icon" width="60px"></img>
                            </div>
                        </StyledUserData>
                        <StyledWatcingtime>
                            <p>부위 별 운동 영상 시청 시간</p>
                        </StyledWatcingtime>
                        <StyledUserProgressbar>
                            <div>
                                <span>ALL</span> <ProgressBar variant="blue" max="300" animated now={allinfo} label={`${allinfo}분`} />
                            </div>
                            <div>
                                <span>UPPER</span> <ProgressBar variant="blue" max="300" animated now={upperinfo} label={`${upperinfo}분`} />
                            </div>
                            <div>
                                <span>LOWER</span> <ProgressBar variant="blue" max="300" animated now={lowerinfo} label={`${lowerinfo}분`} />
                            </div>
                        </StyledUserProgressbar>
                    </StyledUserinfo>
                </div>
                <StyledGraphtitle>
                    <p>지난주 요일별 운동 시간</p>
                </StyledGraphtitle>
                <StyledLastweekgraph>
                    <LineChart highcharts={Highcharts} options={options}></LineChart>
                </StyledLastweekgraph>
                <StyledRecommandTitle>
                    <p>
                        오늘은 <span style={{ color: "#015cee" }}>{recommandvalue({ upperinfo, lowerinfo, allinfo })}</span> 운동을 하는 게 어떨까요?
                    </p>
                </StyledRecommandTitle>
                <StyledRecommandButton>
                    <Link to={timevalue({ upperinfo, lowerinfo, allinfo })}>
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
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
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
    margin: 10px;

    & > div {
        display: flex;
    }

    & > div:nth-child(1) {
        padding-top: 50px;
    }
`;

const StyledStandingIcon = styled.div`
    display: block;
    text-align: center;

    & > div:nth-child(1) {
        text-align: center;
        border-radius: 50px;
        background-color: white;
        height: 40px;
        line-height: 40px;
        font-weight: 900;
    }

    & > div:nth-child(2) {
        margin-top: 10px;
        border-radius: 10px;
        background-color: #bdd5fe;
        height: 115px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }

    & > img {
        margin-top: 70px;
    }
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
    font-weight: 900;
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
    font-weight: 900;
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

const StyledGraphtitle = styled.div`
    margin-top: 10px;
    text-align: center;
    border-radius: 50px;
    background-color: white;
    height: 40px;
    line-height: 40px;
    width: 450px;
    font-weight: 900;
`;

const StyledLastweekgraph = styled.div`
    margin-top: 10px;

    & > div {
        width: 450px;
        height: 250px;
        border-radius: 10px;
    }
`;
const StyledRecommandTitle = styled.div`
    margin-top: 30px;
    font-weight: 900;
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
