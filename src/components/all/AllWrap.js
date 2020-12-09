import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./All.css";

const AllWrap = () => {


    // upper menu
    const typeofexercise = [
        "전체",
        "등",
        "어깨",
        "가슴",
        "허리",
    ];
    const [menu, setMenu] = useState({
        num: 0,
    });
    const { num } = menu;
    const onClick = (e) => {
        const index = e.target.value;
        setMenu({
            ...menu,
            num: index,
        });
    };

    return (
        <div className="container">
            {/** upper menu */}
            <div className="d-flex justify-content-between upperMenu">
                <button className="btn" value={0} onClick={onClick}>
                    전체
                </button>
                <button className="btn" value={1} onClick={onClick}>
                    등
                </button>
                <button className="btn" value={2} onClick={onClick}>
                    어깨
                </button>
                <button className="btn" value={3} onClick={onClick}>
                    가슴
                </button>
                <button className="btn" value={4} onClick={onClick}>
                    허리
                </button>
            </div>

            {/* <p>{typeofexercise[num]}</p> */}







            {/** card listView */}
            <Link to="/all_detail/:idx" className="row listView">
                {/** thumbnail */}
                <div className="col-6">
                    <img src={`${typeofexercise[0][1].img}`}
                        className="thumbnail img-fluid" />
                </div>
                {/** descriptions */}
                <div className="col-6">
                    <p className="title">영상제목</p>
                    <hr className="my-2" />
                    <p className="desc">
                        영상시간, 운동부위 관련 설명
                    </p>
                </div>
            </Link>

            {/** example */}
            <div className="row listView">
                {/** thumbnail */}
                <div className="col-6">
                    <Link to="/all_detail/:idx">
                        <img src="https://i.ytimg.com/vi/YSoT3T58QFY/hqdefault.jpg?
                        sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBxv_
                        Dkr6LrZuXm_C87FCtn6FckVw"
                            className="thumbnail img-fluid"></img>
                    </Link>
                </div>
                {/** descriptions */}
                <div className="col-6">
                    <p className="title">하체비만 탈출 6분 프로그램 Legs fat burn workout for women하체비만 탈출 6분 프로그램 Legs fat burn workout for women하체비만 탈출 6분 프로그램 Legs fat burn workout for women</p>
                    <hr className="my-2" />
                    <p className="desc">
                        10:02 하체
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AllWrap;