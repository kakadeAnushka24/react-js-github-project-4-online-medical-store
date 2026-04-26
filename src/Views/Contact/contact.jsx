import { useState } from "react";
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import "./contact.css";
import Navbar from "../../Components/Navbar/navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      return;
    }

    alert("Message Sent Successfully 📩");
    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-card">

          <h2>Contact Us</h2>

          {/* Error */}
          {error && (
            <div className="message-box error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Contact Info */}
          <div className="contact-info">
            <p><Phone size={16} /> +91 9876543210</p>
            <p><Mail size={16} /> support@medicalstore.com</p>
            <p><MapPin size={16} /> Mumbai, India</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
            />

            <button className="primary-button">Send Message</button>
          </form>

        </div>
      </div>
    </>
  );
}