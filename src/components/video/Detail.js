import React, { useEffect, useState } from 'react';
import "./Video.css";
import "./StarRating.css";

const Detail = (props) => {
    const urlData = props.match.params.idx
    const [data, setData] = useState([""]);
    const userToken = window.sessionStorage.getItem("token");
    const loginFlag = (userToken !== null) ? true : false;
    const [ratingData, setRatingData] = useState(3);


    useEffect(() => {
        fetchData()
    }, [])


    // call API
    const fetchData = async () => {
        await fetch(`http://54.180.123.156:8080/HTM/video/${urlData}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(json => {
                        setData(json)
                    })
                } else {
                    console.log("Error: E01");
                }
            })
    }


    // iframe src
    const findSrc = () => {
        let iframeData = data.iframe ? data.iframe : ""
        let start = iframeData.indexOf(`src=`);
        let end = iframeData.indexOf(`'`, start + 5);
        let iframeSrc = iframeData.substring(start + 5, end);
        return iframeSrc
    }


    // go Back 
    const goBack = () => {
        alert("시청 데이터가 기록되었습니다.")
        window.history.back();
    };


    // Star Rating Data
    const starRatingData = (e) => {
        const index = e.target.value;
        setRatingData(index);
    };


    // Video Complete
    const videoComplete = async () => {
        if (data.kind)
            await fetch("http://54.180.123.156:8080/HTM/watch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": userToken
                },
                body: JSON.stringify({
                    id: data.id,
                    time: `${data.time}`,
                    kindId: data.kind.id,
                    score: ratingData
                }),
            })
                .then(res => {
                    if (res.ok) {
                        goBack()
                    }
                    else {
                        console.log("Error: E02");
                        console.log(res)
                    }
                })
    };


    return (
        <div className="container">
            {/* 뒤로가기 버튼 */}
            <div className="mb-4">
                <p onClick={goBack}>
                    <svg className="backIcon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 256 256" id="Layer_1" version="1.1" viewBox="0 0 256 256">
                        <path d="M179.199,38.399c0,1.637-0.625,3.274-1.875,4.524l-85.076,85.075l85.076,85.075c2.5,2.5,2.5,6.55,0,9.05s-6.55,2.5-9.05,0  l-89.601-89.6c-2.5-2.5-2.5-6.551,0-9.051l89.601-89.6c2.5-2.5,6.55-2.5,9.05,0C178.574,35.124,179.199,36.762,179.199,38.399z" />
                    </svg>
                </p>
            </div>


            {/* 영상 */}
            <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe
                    title={data.id}
                    src={findSrc()}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}>
                </iframe>
            </div>


            {/** Star rating */}
            <div className="starBox mb-3">
                <p>별점을 기반으로 영상을 추천해 드립니다</p>
                <div className="rating">
                    <input type="radio" name="rating" value="5" id="5" onClick={starRatingData} /><label htmlFor="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4" onClick={starRatingData} /><label htmlFor="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3" onClick={starRatingData} /><label htmlFor="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2" onClick={starRatingData} /><label htmlFor="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1" onClick={starRatingData} /><label htmlFor="1">☆</label>
                </div>
            </div>


            {/** 시청완료 버튼 */}
            <div className="text-center">
                {loginFlag ?
                    <button className="btn btnDone" onClick={videoComplete}>시청완료</button> :
                    <button className="btn btnDone" disabled>로그인 후 이용해 주세요</button>
                }
            </div>
        </div>
    );
};

export default Detail;