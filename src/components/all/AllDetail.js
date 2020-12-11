import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./All.css";
import "./StarRating.css";

const AllDetail = (props) => {

    const urlData = props.match.params.idx
    const [data, setData] = useState([""]);
    let loading = true;

    
    // call API
    useEffect(() => {
        fetch(`http://54.180.123.156:8080/HTM/video/${urlData}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(json => {
                        console.log(json)
                        setData(json)
                        loading = false
                    })
                } else {
                    console.log("Error: E01");
                }
            })
    }, [])


    // iframe src
    let iframeData = `${data.iframe}`
    let start = iframeData.indexOf(`src=`);
    let end = iframeData.indexOf(`'`, start + 5);
    let iframeSrc = iframeData.substring(start + 5, end);


    {/* 뒤로가기 */ }
    const goBack = () => {
        window.history.back();
    };


    return (
        <div className="container">

            {/* 뒤로가기 버튼 */}
            <div className="mb-4">
                <a onClick={goBack}>
                    <svg className="backIcon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 256 256" id="Layer_1" version="1.1" viewBox="0 0 256 256">
                        <path d="M179.199,38.399c0,1.637-0.625,3.274-1.875,4.524l-85.076,85.075l85.076,85.075c2.5,2.5,2.5,6.55,0,9.05s-6.55,2.5-9.05,0  l-89.601-89.6c-2.5-2.5-2.5-6.551,0-9.051l89.601-89.6c2.5-2.5,6.55-2.5,9.05,0C178.574,35.124,179.199,36.762,179.199,38.399z" />
                    </svg>
                </a>
            </div>

            {/* 영상 */}
            <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe
                    src={iframeSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}>
                </iframe>
            </div>

            {/** Star rating */}
            <div className="starBox mb-3">
                <p>별점을 기반으로 영상을 추천해 드립니다</p>
                <div className="rating">
                    <input type="radio" name="rating" value="5" id="5" /><label htmlFor="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4" /><label htmlFor="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3" /><label htmlFor="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" /><label htmlFor="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" /><label htmlFor="1">☆</label>
                </div>
            </div>

            {/** 시청완료 버튼 */}
            <div className="text-center">
                <button className="btn btnDone">시청완료</button>
            </div>

        </div >
    );
};

export default AllDetail;