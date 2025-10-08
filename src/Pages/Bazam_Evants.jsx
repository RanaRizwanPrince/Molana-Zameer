import { useState, useEffect } from "react";
const Bazam_Evants = () => {
    const Zameer_Updates = [
        {
            title: "Latest Announcements",
            img: "https://placehold.co/400",
        }, {
            title: "Press Releases",
            img: "https://placehold.co/400",
        }, {
            title: "New Project Launches",
            img: "https://placehold.co/400",
        }, {
            title: "Organizational Notices",
            img: "https://placehold.co/400",
        }, {
            title: "Public Statements",
            img: "https://placehold.co/400",
        }, {
            title: "Public Statements",
            img: "https://placehold.co/400",
        },
    ];
    const Highlights = [
        {
            title: "Daily Event Recaps",
            img: "https://placehold.co/400",
        }, {
            title: "Photo of the Day",
            img: "https://placehold.co/400",
        }, {
            title: "Video Highlights",
            img: "https://placehold.co/400",
        }, {
            title: "Key Quotes",
            img: "https://placehold.co/400",
        }, {
            title: "Featured Moment",
            img: "https://placehold.co/400",
        },
    ];
    const Inspiring = [
        {
            title: "Conferences",
            img: "https://placehold.co/400",
        }, {
            title: "Seminars",
            img: "https://placehold.co/400",
        }, {
            title: "Youth Meets",
            img: "https://placehold.co/400",
        }, {
            title: "Guest Sessions",
            img: "https://placehold.co/400",
        }, {
            title: "Guest Sessions",
            img: "https://placehold.co/400",
        }, {
            title: "Open Discussions",
            img: "https://placehold.co/400",
        },
    ];
    const Zameer_Awards = [
        {
            title: "Student Achievements",
            img: "https://placehold.co/400",
        }, {
            title: "Teacher Recognition",
            img: "https://placehold.co/400",
        }, {
            title: "Community Heroes",
            img: "https://placehold.co/400",
        }, {
            title: "Annual Award Ceremonies",
            img: "https://placehold.co/400",
        }, {
            title: "Certificates & Appreciation Posts",
            img: "https://placehold.co/400",
        },
    ];
    const Community = [
        {
            title: "Public Lectures",
            img: "https://placehold.co/400",
        }, {
            title: "Guest Speakers",
            img: "https://placehold.co/400",
        }, {
            title: "Panel Discussions",
            img: "https://placehold.co/400",
        }, {
            title: "Awareness Programs",
            img: "https://placehold.co/400",
        }, {
            title: "Educational Debates",
            img: "https://placehold.co/400",
        },
    ];
    const Knowledge = [
        {
            title: "Workshops",
            img: "https://placehold.co/400",
        }, {
            title: "Training Programs",
            img: "https://placehold.co/400",
        }, {
            title: "Research Discussions",
            img: "https://placehold.co/400",
        }, {
            title: "Study Circles",
            img: "https://placehold.co/400",
        }, {
            title: "Skill Development",
            img: "https://placehold.co/400",
        },
    ];
    const Cultural = [
        {
            title: "Naat & Qira’at Nights",
            img: "https://placehold.co/400",
        }, {
            title: "Literary Gatherings",
            img: "https://placehold.co/400",
        }, {
            title: "Theater & Drama",
            img: "https://placehold.co/400",
        }, {
            title: "Art & Culture Exhibits",
            img: "https://placehold.co/400",
        }, {
            title: "Traditional Music Events",
            img: "https://placehold.co/400",
        },
    ];
    const Monthly_Digest = [
        {
            title: "Monthly Reports",
            img: "https://placehold.co/400",
        }, {
            title: "Event Summaries",
            img: "https://placehold.co/400",
        }, {
            title: "Highlights Gallery",
            img: "https://placehold.co/400",
        }, {
            title: "Community Growth Updates",
            img: "https://placehold.co/400",
        }, {
            title: "Upcoming Plans",
            img: "https://placehold.co/400",
        },
    ];
    const Announcements = [
        {
            title: "Event Invitations",
            img: "https://placehold.co/400",
        }, {
            title: "Policy Updates",
            img: "https://placehold.co/400",
        }, {
            title: "Holiday Notices",
            img: "https://placehold.co/400",
        }, {
            title: "Important Alerts",
            img: "https://placehold.co/400",
        }, {
            title: "Volunteer Calls",
            img: "https://placehold.co/400",
        },
    ];
    const [selectedData, setSelectedData] = useState("");
    const [activeButton, setActiveButton] = useState("Backend");
    const data = {
        Zameer_Updates: (
            <div className="techbox">
                <div className="row">
                    {Zameer_Updates.map((data, index) => (
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
        setSelectedData(data["Zameer_Updates"]);
    }, []);
    return (
        <>
            <div className="Evatsbtn">
                <div className="container-fluid">
                    <div className="allbtn">
                        <button className={activeButton === "Zameer_Updates" ? "active" : ""} onClick={() => handleClick("Zameer_Updates")} >Zameer Updates</button>
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