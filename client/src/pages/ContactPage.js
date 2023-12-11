import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contacts = [
    {
      name: "Shouvik Dey",
      image: "https://i.postimg.cc/rpL6V5wn/230940320107-Shouvik-Dey-KH.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/shouvik-dey-91841122a/",
      },
    },
    {
      name: "Sumedha Devkar",
      image: "https://i.postimg.cc/VNwTQ1K2/Whats-App-Image-2023-12-11-at-12-27-48-PM.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/sumedha/",
      },
    },
    {
      name: "Harsh Chavan",
      image: "https://i.postimg.cc/yx9Rhq0y/Whats-App-Image-2023-12-11-at-12-32-54-PM.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/harsh-chavan-0b961a223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
  ];

  return (
    <div className="contact-page">
      <h1 style={{ textAlign: "center", marginTop: "-40px" }}>Contact Us</h1>
      {contacts.map((contact, index) => (
        <div key={index} className="contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={contact.image}
            alt={contact.name}
            style={{ width: "100%", height: "200px", maxWidth: "200px", objectFit: "cover" }}
          />
          <h2 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>{contact.name}</h2>
          <div className="social-media-links" style={{ textAlign: "center", marginTop: "5px", marginBottom:"10px" }}>
            {contact.socialMedia.linkedin && (
              <a
                href={contact.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "grey",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                }}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
