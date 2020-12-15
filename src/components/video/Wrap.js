import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Video.css";

const Wrap = (props) => {
    const urlData = props.match.params.type
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        fetchData()
        reset_animation()
    }, [props.match.params.type])


    // call API
    const fetchData = async () => {
        await fetch(`http://54.180.123.156:8080/HTM/list/${urlData}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(json => {
                        setData(json)
                        setFilteredData(json)
                    })
                } else {
                    console.log("Error: E01");
                }
            })
    }


    // animation
    const reset_animation = () => {
        let el = document.getElementsByClassName('listView')
        for (let i = 0; i < el.length; i++) {
            el[i].style.animation = 'none';
            el[i].style.animation = el[0].offsetHeight;
            el[i].style.animation = null;
        }
    }


    // upper menu
    const onClick = (e) => {
        const i = e.target.value;
        var tmp = []
        if (i == 0) {
            setFilteredData(data)
        } else {
            data.map((data) => {
                if (data.kind && (data.kind.id == i)) {
                    tmp.push(data)
                    setFilteredData(tmp)
                }
            })
        }
    };


    // kindData
    const kindData = (obj) => {
        let kindList = [`전신`, `등`, `가슴`, `허리`, `어깨`, `하체`]
        let result = ``
        kindList.map((v, i) => {
            if (obj.kind.id === i + 1)
                result = v
        })
        return result
    };



    return (
        <div className="container">
            {/** upper menu */}
            {urlData == `upper` ?
                (<div className="d-flex justify-content-between upperMenu listViewAni">
                    <button className="btn" value={0} onClick={onClick}>전체</button>
                    <button className="btn" value={2} onClick={onClick}>등</button>
                    <button className="btn" value={3} onClick={onClick}>가슴</button>
                    <button className="btn" value={4} onClick={onClick}>허리</button>
                    <button className="btn" value={5} onClick={onClick}>어깨</button>
                </div>)
                : null}


            {/* listView */}
            {filteredData.map((obj, index) => (
                <Link to={`/detail/${obj.id}`} className="row listView listViewAni" key={index}>
                    {/** thumbnail */}
                    <div className="col-6">
                        <img src={`${obj.image}`} alt=""
                            className={`thumbnail img-fluid`} />
                    </div>
                    {/** descriptions */}
                    <div className="col-6">
                        <p className="title">{obj.title}</p>
                        <hr className="my-2" />
                        <p className="desc">
                            {obj.time}분 {kindData(obj)}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Wrap;