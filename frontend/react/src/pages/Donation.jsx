import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "./Donat.css";

const descriptions = {
"Education": "Education is the key to a brighter future. Your donation helps provide books, school supplies, and scholarships to children in need.",
  "Tree Plantation": "Support tree plantation to create a greener and healthier environment for future generations.",
  "Seminar Class": "Help organize educational and awareness seminars for various social and professional topics.",
  "Sports": "Encourage physical fitness and sportsmanship by supporting sports programs and activities.",
  "Welfare": "Contribute to welfare initiatives aimed at improving community living standards.",
  "Electricity": "Provide electricity to underprivileged areas, bringing light to homes and schools.",
  "Housing": "Help build homes for homeless families, giving them a safe and secure place to live.",
  "Temple Donation": "Support temple maintenance, religious activities, and cultural preservation.",
  "Transgender": "Empower transgender individuals with education, employment, and social inclusion programs.",
  "Disability": "Assist people with disabilities by providing medical aid, support equipment, and accessibility solutions.",
  "Old Age Home": "Ensure elderly individuals receive the care, shelter, and companionship they deserve.",
  "Annadanam-Food": "Donate food to the needy and help eliminate hunger through meal distribution programs.",
  "Children's Home": "Provide shelter, education, and care for orphaned and homeless children.",
  "Medical": "Support medical aid, treatments, and health checkups for those in need.",
  "Yoga": "Promote physical and mental well-being through yoga programs and awareness.",
  "Animal": "Help protect and rescue animals, ensuring their safety and well-being.",
  "Below Poverty": "Guidance of Below Poverty",
  "Transportations": "Support transportation initiatives to improve mobility for underprivileged communities.",
  "Cultural Programmes": "Preserve and promote cultural heritage through events and artistic initiatives.",
  "Library": "Help establish and maintain libraries to encourage education and knowledge-sharing.",
  "Awareness programs": "Awareness is the first step towards change – Act now, make a difference!",
  "Swachh Bharat": "Swasth Bharat – Clean India for a Healthy India!",
  "School": "School is the first step towards turning dreams into reality.",
  "Ex- Army": "Served with honor, living with pride."
};

const DonationPage = () => {
  const [focusArea, setFocusArea] = useState("Education");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("Education");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRemarks(focusArea);
  }, [focusArea]);

  const handlePayment = () => {
    if (!name || !email || !contact || !amount || !city || amount <= 0) {
      toast.warning("Please fill in all required fields with valid data.");
      return;
    }

    const options = {
      key: "rzp_test_WAG2H4yqS0mQLo",
      amount: amount * 100,
      currency: "INR",
      name: "Nation First Trust",
      description: `Donation for ${focusArea} - Remarks: ${remarks}`,
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name,
        email,
        contact,
      },
      notes: {
        focusArea,
        remarks,
        donorName: name,
        donorEmail: email,
        donorPhone: contact,
        donorCity: city,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentGateway = new window.Razorpay(options);
    paymentGateway.open();
  };

  return (
    <div className="container py-4">
      <ToastContainer />

      {/* Donation Process */}
      <div className="row align-items-center mb-5 donate-section">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3 className="text-primary">Donate Process</h3>
          <p><FcApproval className="me-2" /> Select a focus area you wish to support.</p>
          <p><FcApproval className="me-2" /> Enter your donation and personal details.</p>
          <p><FcApproval className="me-2" /> Proceed to secure payment.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="images/donate-side.svg" alt="Donate" className="img-fluid" />
        </div>
      </div>

      {/* Focus Area */}
      <div className="mb-4">
        <h3 className="text-success text-center">Richness Begins With Giving</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
          {Object.keys(descriptions).map((area) => (
            <label key={area} className="btn btn-outline-secondary">
              <input
                type="radio"
                name="focus"
                value={area}
                checked={focusArea === area}
                onChange={() => setFocusArea(area)}
                className="d-none"
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      {/* Donor Details */}
      <div className="mb-3">
        <h5>Your Name *</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <h5>Email *</h5>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <h5>Phone Number *</h5>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter phone number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <h5>City *</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Donation Amount */}
      <div className="mb-3">
        <h5>Enter Amount (₹) *</h5>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Remarks */}
      <div className="mb-4">
        <h5>Donation Remarks</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </div>

      {/* Donate Button */}
      <div className="text-center mb-5">
        <button className="btn btn-primary px-4" onClick={handlePayment}>
          Donate <img src="images/rupee.svg" alt="₹" style={{ width: "18px", marginLeft: "6px" }} />
        </button>
      </div>

      {/* Bank Info */}
      <div className="bg-light p-4 rounded border">
        <h6>NATIONS FIRST TRUST</h6>
        <p><strong>Bank:</strong> Union Bank of India</p>
        <p><strong>Account Number:</strong> 333802010461947</p>
        <p><strong>IFSC:</strong> UBIN0533386</p>
        <p><strong>Branch Code:</strong> 533386</p>
        <p><strong>MICR Code:</strong> 635026103</p>
        <p><strong>Branch:</strong> Natrampalli, Vellore, Tamil Nadu - 635852</p>
        <p><strong>Country:</strong> India</p>
        <p className="mb-0"><strong>Used for:</strong> RTGS, IMPS, NEFT</p>
      </div>
    </div>
  );
};

export default DonationPage;
