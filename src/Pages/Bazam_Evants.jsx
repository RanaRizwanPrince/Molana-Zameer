import { useState, useEffect } from "react";
const Bazam_Evants = () => {
    const Yadgar_Aslaf = [
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
    const Zameer_Awards = [
        {
            img: "https://dummyimage.com/600x600/000/fff&text=Conference+Coming+Soon",
        },
    ];
    const Announcements = [
        {
            img: "https://dummyimage.com/600x600/000/fff&text=Conference+Coming+Soon",
        },
    ];
    const News = [
        {
            img: "https://ik.imagekit.io/hmdcfponi/13?updatedAt=1765188116906",
        },
    ];
    const [selectedData, setSelectedData] = useState("");
    const [activeButton, setActiveButton] = useState("Yadgar_Aslaf");
    const data = {
        Yadgar_Aslaf: (
            <div className="techbox">
                <div className="row">
                    {Yadgar_Aslaf.map((data, index) => (
                        <>
                            <div key={index} className="col-lg-2 col-md-3 my-2">
                                <img src={data.img} className="img-fluid img-thumbnail" />
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
        News: (
            <div className="techbox">
                <div className="row">
                    {News.map((data, index) => (
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
        setSelectedData(data["Yadgar_Aslaf"]);
    }, []);
    return (
        <>
            <div className="Evatsbtn">
                <div className="container-fluid">
                    <div className="allbtn">
                        <button className={activeButton === "Yadgar_Aslaf" ? "active" : ""} onClick={() => handleClick("Yadgar_Aslaf")}>Yadgar Aslaf Conference</button>
                        <button className={activeButton === "Zameer_Awards" ? "active" : ""} onClick={() => handleClick("Zameer_Awards")}>Allama Shabbir Ahmed Usmani Conference</button>
                        <button className={activeButton === "Announcements" ? "active" : ""} onClick={() => handleClick("Announcements")}>Ghulam Yahya Hashmi Conference</button>
                        <button className={activeButton === "News" ? "active" : ""} onClick={() => handleClick("News")} >Latest News</button>
                    </div>
                    <div className="box">{selectedData}</div>
                </div>
            </div>
        </>
    );
};
export default Bazam_Evants;