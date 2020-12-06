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

            {/** listView */}
            {/** for */}
            <div className="row listView">
                <div className="col-6">
                    <Link to="/all_detail/:idx">
                        <img src="https://via.placeholder.com/1600x900" className="img-fluid"></img>
                    </Link>
                </div>
                <div className="col-6">
                    제목<br />운동부위<br />설명<br />시간<br />??
                    </div>
            </div>
            {/** endfor */}


        </div>
    );
};

export default AllWrap;