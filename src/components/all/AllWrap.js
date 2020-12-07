import React from 'react';
import { Link } from 'react-router-dom';
import "./All.css";

const AllWrap = () => {
    return (
        <div className="container">

            {/** upper menu 1 */}
            <div className="row">
                <div className="col-3">
                    <button className="btn btnUpper">등</button>
                </div>
                <div className="col-3">
                    어깨
                </div>
                <div className="col-3">
                    가슴
                </div>
                <div className="col-3">
                    허리
                </div>
            </div>

            {/** upper menu 2 */}
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Disabled</a>
                    </li>
                </ul>
            </div>
            <hr></hr>




            {/** card listView */}
            <div className="row listView">
                {/** thumbnail */}
                <div className="col-6 thumb">
                    <Link to="/all_detail/:idx">
                        <img src="https://via.placeholder.com/1600x900" className="img-fluid"></img>
                    </Link>
                </div>
                {/** descriptions */}
                <div className="col-6 desc">
                    <p style={{ fontSize: "14px" }}>영상제목</p>
                    <hr className="my-2" />
                    <p>
                        영상시간, 운동부위 관련 설명
                    </p>
                </div>
            </div>

            {/** example */}
            <div className="row listView">
                {/** thumbnail */}
                <div className="col-6">
                    <Link to="/all_detail/:idx">
                        <img src="https://i.ytimg.com/an_webp/dBtk6T-aWQ4/mqdefault_6s.webp?du=3000&sqp=CMKmuf4F&rs=AOn4CLDC2MVf_PrkCk5BMI4dEzEOw5cnkw" className="img-fluid"></img>
                    </Link>
                </div>
                {/** descriptions */}
                <div className="col-6">
                    <p className="title">하체비만 탈출 6분 프로그램 Legs fat burn workout for women하체비만 탈출 6분 프로그램 Legs fat burn workout for women하체비만 탈출 6분 프로그램 Legs fat burn workout for women</p>
                    <hr className="my-2" />
                    <p className="desc">
                        10:02 하체운동
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AllWrap;