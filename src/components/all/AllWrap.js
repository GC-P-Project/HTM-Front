import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./All.css";

const AllWrap = () => {

    const urlData = `upper`
    const [data, setData] = useState([""]);
    const [kindData, setKindData] = useState([""]);
    let loading = true;

    // call API
    useEffect(() => {
        fetch(`http://54.180.123.156:8080/HTM/list/${urlData}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(json => {
                        console.log(json)
                        setData(json)
                        setKindData(json[0].kind)
                        loading = false
                    })
                } else {
                    console.log("Error: E01");
                }
            })

    }, [])


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


    // loading
    if (loading) {

    }

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

            {data.map((data, index) => (
                <Link to={`/all_detail/${data.id}`} className="row listView">
                    {/** thumbnail */}
                    <div className="col-6">
                        <img src={`${data.image}`}
                            className="thumbnail img-fluid" />
                    </div>
                    {/** descriptions */}
                    <div className="col-6">
                        <p className="title">{data.title}</p>
                        <hr className="my-2" />
                        <p className="desc">
                            {data.time}분 {kindData.kind}
                        </p>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default AllWrap;