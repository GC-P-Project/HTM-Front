import React from 'react';
import { Link } from 'react-router-dom';
import "./All.css";

const AllWrap = () => {
    return (
        <div className="container">
            {/** upper menu */}
            <div>
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#qwe">전체</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#asd">등</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#zxc">어깨</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#zxc">가슴</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#zxc">허리</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="qwe" className="container tab-pane active"><br />111</div>
                    <div id="asd" className="container tab-pane active"><br />222</div>
                    <div id="zxc" className="container tab-pane fade"><br />333</div>
                </div>
            </div>


            {/** card listView */}
            <div className="row listView">
                {/** thumbnail */}
                <div className="col-6">
                    <Link to="/all_detail/:idx">
                        <img src="https://via.placeholder.com/1600"
                            className="thumbnail img-fluid"></img>
                    </Link>
                </div>
                {/** descriptions */}
                <div className="col-6">
                    <p className="title">영상제목</p>
                    <hr className="my-2" />
                    <p className="desc">
                        영상시간, 운동부위 관련 설명
                    </p>
                </div>
            </div>
            {/** example */}
            <div className="row listView">
                {/** thumbnail */}
                <div className="col-6">
                    <Link to="/all_detail/:idx">
                        <img src="https://i.ytimg.com/an_webp/dBtk6T-aWQ4/mqdefault_6s.webp?du=3000&sqp=CMKmuf4F&rs=AOn4CLDC2MVf_PrkCk5BMI4dEzEOw5cnkw"
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