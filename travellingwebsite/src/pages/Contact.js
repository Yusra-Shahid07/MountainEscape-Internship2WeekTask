import React, { useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const styles = {
    mapSection: { padding: "40px 0", textAlign: "center" },
    mapHeading: { fontSize: "28px", fontWeight: "bold", marginBottom: "20px" },
    mapContainer: { maxWidth: "1000px", margin: "0 auto" },
    iframe: { border: "none", borderRadius: "8px" },
    mapInfo: { marginTop: "20px" },
    mapInfoCard: {
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    },
    mapInfoTitle: { marginBottom: "10px", fontSize: "20px" },
    mapInfoText: { margin: "5px 0" }
  };

  useEffect(() => {
    const contactdivs = document.querySelectorAll(".contactdiv");

    const handleMouseEnter = (event) => {
      const contactDiv = event.currentTarget;
      const iconDiv = contactDiv.querySelector(".icondiv");
      const icon = contactDiv.querySelector(".icondiv i");

      if (iconDiv && icon) {
        if (!iconDiv.dataset.originalPaddingLeft) {
          iconDiv.dataset.originalPaddingLeft =
            window.getComputedStyle(iconDiv).paddingLeft;
          iconDiv.dataset.originalPaddingRight =
            window.getComputedStyle(iconDiv).paddingRight;
        }
        if (!icon.dataset.originalFontSize) {
          icon.dataset.originalFontSize =
            window.getComputedStyle(icon).fontSize;
        }

        const currentPaddingLeft =
          parseInt(iconDiv.dataset.originalPaddingLeft) || 9;
        const currentPaddingRight =
          parseInt(iconDiv.dataset.originalPaddingRight) || 9;
        const currentFontSize = parseInt(icon.dataset.originalFontSize) || 25;

        iconDiv.style.paddingLeft = currentPaddingLeft + 3 + "px";
        iconDiv.style.paddingRight = currentPaddingRight + 3 + "px";
        icon.style.fontSize = currentFontSize + 3 + "px";

        iconDiv.style.transition = "padding 0.3s ease";
        icon.style.transition = "font-size 0.3s ease";
      }
    };

    const handleMouseLeave = (event) => {
      const contactDiv = event.currentTarget;
      const iconDiv = contactDiv.querySelector(".icondiv");
      const icon = contactDiv.querySelector(".icondiv i");

      if (iconDiv && icon) {
        const originalPaddingLeft =
          iconDiv.dataset.originalPaddingLeft || "9px";
        const originalPaddingRight =
          iconDiv.dataset.originalPaddingRight || "9px";
        const originalFontSize = icon.dataset.originalFontSize || "25px";

        iconDiv.style.paddingLeft = originalPaddingLeft;
        iconDiv.style.paddingRight = originalPaddingRight;
        icon.style.fontSize = originalFontSize;
      }
    };

    contactdivs.forEach((div) => {
      div.addEventListener("mouseenter", handleMouseEnter);
      div.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      contactdivs.forEach((div) => {
        div.removeEventListener("mouseenter", handleMouseEnter);
        div.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="contactdivmain">
      <div className="abovepart">
        <div className="imagemain">
          <img src="/Assets/about main image.jpg" alt="Northern Wonders" />
        </div>
        <div id="maintext">
          We are a travel company focused on mountain adventures
        </div>
      </div>

      <div className="contactmainheading">Contact</div>
      <div className="contactmainwork">
        <div className="contactinfo">
          <div className="getintouchHeading">Get In Touch</div>
          <div className="getintouchpara">
            We’re here to help you plan your perfect escape to the mountains.
            Whether you’re booking a tour, need travel tips, or just want to
            learn more about our destinations, our team is ready to assist.
            <br />
            Let’s make your next adventure unforgettable — reach out today!
          </div>

          <div className="contactdivs">
            <div className="contactdiv">
              <div className="icondiv">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">Email Us</p>
                <p className="iconmtinfo">mountainescape@gmail.com</p>
              </div>
            </div>
            <div className="contactdiv">
              <div className="icondiv">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">LinkedIn</p>
                <p className="iconmtinfo">Connect with us</p>
              </div>
            </div>
            <div className="contactdiv">
              <div className="icondiv">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">WhatsApp</p>
                <p className="iconmtinfo">+92 300 1234862</p>
              </div>
            </div>
            <div className="contactdiv">
              <div className="icondiv">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="icontextdiv">
                <p className="iconheading">Our Location</p>
                <p className="iconmtinfo">
                  Mountain Escape HQ, Liberty Market, Gulberg, Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactrightside">
          <div className="sendamessageHeading">Send a Message</div>
          <div className="contactitems">
            <div className="contactitem">
              <div className="contactheading">Name</div>
              <input
                type="text"
                placeholder="Enter your name"
                className="enter"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Email</div>
              <input
                type="email"
                placeholder="Enter your email"
                className="enter"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Subject</div>
              <input
                type="text"
                placeholder="What's this about"
                className="enter"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="contactitem">
              <div className="contactheading">Message</div>
              <textarea
                placeholder="Enter your message"
                className="enter enterMessage"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary submitbutton"
            onClick={() => {
              if (name === "") {
                alert("Enter your name");
              } else if (email === "") {
                alert("Enter your email");
              } else if (!email.includes("@") || !email.includes(".")) {
                alert("Invalid Email");
              } else if (message === "") {
                alert("Enter your message");
              } else if (subject === "") {
                alert("Enter your subject");
              } else {
                const mailtoLink = `mailto:syusra841@gmail.com?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                )}`;
                window.location.href = mailtoLink;
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <div style={styles.mapSection}>
        <div style={styles.mapHeading}>Find Us Here</div>
        <div style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.672620857825!2d74.35436731508236!3d31.522872548182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xa23b3d330041ce0e!2sLiberty%20Market%2C%20Gulberg%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1658123456789!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={styles.iframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}