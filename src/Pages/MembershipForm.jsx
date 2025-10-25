import React, { useState } from "react";
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        age: "",
        education: "",
        address: "",
        phone: "",
        profession: "",
        signature: "",
        date: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false); // NEW
    // handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // show loader on button
        try {
            await fetch("https://formspree.io/f/xgvnrzwq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            // success modal
            setShowModal(true);
            // clear form
            setFormData({
                name: "",
                fatherName: "",
                age: "",
                education: "",
                address: "",
                phone: "",
                profession: "",
                signature: "",
                date: "",
            });
            // hide modal after 3 seconds
            setTimeout(() => setShowModal(false), 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false); // hide loader
        }
    };
    return (
        <section className="membershipform">
            <div className="container-fluid">
                <h1>Membership Form</h1>
                <div style={{ margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", fontFamily: "Noto Nastaliq Urdu, serif", }} >
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }} >
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Full Name</h3>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Father's Name</h3>
                                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Age</h3>
                                    <input type="number" name="age" value={formData.age} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Educational Qualification</h3>
                                    <input type="text" name="education" value={formData.education} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Address</h3>
                                    <input type="text" name="address" value={formData.address} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Phone Number</h3>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Profession/Position</h3>
                                    <input type="text" name="profession" value={formData.profession} onChange={handleChange} required style={inputStyle} />
                                </label>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Message</h3>
                                    <input type="text" name="signature" value={formData.signature} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <label className="w-100">
                                    <h3>Date</h3>
                                    <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} />
                                </label>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <h3 className="text-white">Date</h3>
                                <button type="submit" style={buttonStyle} disabled={loading}>
                                    {loading ? (
                                        <div style={{ border: "3px solid #fff", borderTop: "3px solid transparent", borderRadius: "50%", width: "20px", height: "20px", margin: "0 auto", animation: "spin 1s linear infinite", }} ></div>
                                    ) : (
                                        "SUBMIT"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Success Modal */}
                {showModal && (
                    <div style={modalOverlay}>
                        <div style={modalBox}>
                            <h3>Thank You! Your form has been successfully submitted.</h3>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
// input styles
const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    border: "1px solid #DB9933",
    borderRadius: "6px",
};
// button style
const buttonStyle = {
    backgroundColor: "#DB9933",
    border: "none",
    padding: "10px 20px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
};
// modal styles
const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
};
const modalBox = {
    background: "white",
    padding: "20px 40px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#28a745",
};
// spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);
export default RegistrationForm;