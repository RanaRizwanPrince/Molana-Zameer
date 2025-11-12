import { useState, useEffect } from "react";
const Bazam_Evants = () => {
    const Bazam_Zameer = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/1?updatedAt=1762764258819",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/2?updatedAt=1762764258397",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/3?updatedAt=1762764258829",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/4?updatedAt=1762764257796",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/5?updatedAt=1762764257940",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/6?updatedAt=1762764259150",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/7?updatedAt=1762764256649",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/8?updatedAt=1762764259063",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/9?updatedAt=1762764258645",
        },
    ];
    const Highlights = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/6?updatedAt=1762764259150",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/7?updatedAt=1762764256649",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/8?updatedAt=1762764259063",
        },
    ];
    const Inspiring = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/4?updatedAt=1762764257796",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/5?updatedAt=1762764257940",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/6?updatedAt=1762764259150",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/7?updatedAt=1762764256649",
        },
    ];
    const Zameer_Awards = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/1?updatedAt=1762764258819",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/2?updatedAt=1762764258397",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/3?updatedAt=1762764258829",
        },
    ];
    const Community = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/5?updatedAt=1762764257940",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/6?updatedAt=1762764259150",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/7?updatedAt=1762764256649",
        },
    ];
    const Knowledge = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/7?updatedAt=1762764256649",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/8?updatedAt=1762764259063",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/9?updatedAt=1762764258645",
        },
    ];
    const Cultural = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/4?updatedAt=1762764257796",
        }, {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/5?updatedAt=1762764257940",
        },
    ];
    const Monthly_Digest = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/1?updatedAt=1762764258819",
        },
    ];
    const Announcements = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/Bazam%20Zameer/News/Bazam_Zameer/9?updatedAt=1762764258645",
        },
    ];
    const [selectedData, setSelectedData] = useState("");
    const [activeButton, setActiveButton] = useState("Bazam_Zameer");
    const data = {
        Bazam_Zameer: (
            <div className="techbox">
                <div className="row">
                    {Bazam_Zameer.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Highlights: (
            <div className="techbox">
                <div className="row">
                    {Highlights.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Inspiring: (
            <div className="techbox">
                <div className="row">
                    {Inspiring.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Zameer_Awards: (
            <div className="techbox">
                <div className="row">
                    {Zameer_Awards.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Community: (
            <div className="techbox">
                <div className="row">
                    {Community.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Knowledge: (
            <div className="techbox">
                <div className="row">
                    {Knowledge.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Cultural: (
            <div className="techbox">
                <div className="row">
                    {Cultural.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Monthly_Digest: (
            <div className="techbox">
                <div className="row">
                    {Monthly_Digest.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        Announcements: (
            <div className="techbox">
                <div className="row">
                    {Announcements.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
                                <h5>{data.title}</h5>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
    };
    const handleClick = (buttonKey) => {
        setSelectedData(data[buttonKey]);
        setActiveButton(buttonKey);
    };
    useEffect(() => {
        setSelectedData(data["Bazam_Zameer"]);
    }, []);
    return (
        <>
            <div className="Evatsbtn">
                <div className="container-fluid">
                    <div className="allbtn">
                        <button className={activeButton === "Bazam_Zameer" ? "active" : ""} onClick={() => handleClick("Bazam_Zameer")} >Bazam Zameer</button>
                        <button className={activeButton === "Highlights" ? "active" : ""} onClick={() => handleClick("Highlights")} >Highlights of the Day</button>
                        <button className={activeButton === "Inspiring" ? "active" : ""} onClick={() => handleClick("Inspiring")} >Inspiring Gatherings</button>
                        <button className={activeButton === "Zameer_Awards" ? "active" : ""} onClick={() => handleClick("Zameer_Awards")} >Zameer Awards & Honors</button>
                        <button className={activeButton === "Community" ? "active" : ""} onClick={() => handleClick("Community")} >Community Talks</button>
                        <button className={activeButton === "Knowledge" ? "active" : ""} onClick={() => handleClick("Knowledge")} >Knowledge Sessions</button>
                        <button className={activeButton === "Cultural" ? "active" : ""} onClick={() => handleClick("Cultural")} >Cultural Evenings</button>
                        <button className={activeButton === "Monthly_Digest" ? "active" : ""} onClick={() => handleClick("Monthly_Digest")} >Monthly Digest</button>
                        <button className={activeButton === "Announcements" ? "active" : ""} onClick={() => handleClick("Announcements")} >Special Announcements</button>
                    </div>
                    <div className="box">{selectedData}</div>
                </div>
            </div>
        </>
    );
};
export default Bazam_Evants;