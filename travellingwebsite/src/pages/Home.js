import React,{useEffect} from "react";

export default function Home(props) {
  let maxDestination=4;
  const destinationsall = [
    {
      id: 1,
      name: "Swat Valley",
      image: "./Assets/Swat Valley.jpg",
      description: "A beautiful valley with rivers and mountains."
    },
    {
      id: 2,
      name: "Naran and Kaghan Valley",
      image: "./Assets/Naran and Kaghan Valley.jpg",
      description: "Known for crystal-clear lakes and green meadows."
    },
    {
      id: 3,
      name: "Murree and Nathia Gali",
      image: "./Assets/Murree and Nathia Gali.jpg",
      description: "Popular hill stations with pine-covered hills."
    },
    {
      id: 4,
      name: "Arang Kel",
      image: "./Assets/Arang Kel.png",
      description: "A hidden gem in Neelum Valley."
    }
  ];
    useEffect(() => {
    for (let i = 1; i <= maxDestination; i++) {
      let destination = document.querySelector(`.destination${i}`);
      if (destination) {
        destination.style.height = "43rem";
        destination.style.width = "35rem";
        destination.style.backgroundColor = "#047857";
        destination.style.color = "#ffffff";
        destination.style.borderRadius = "20px";
         let destinationName = destination.querySelector('.destinationName');
      let destinationDescription = destination.querySelector('.destinationDescription');
      
      if (destinationName) {
        destinationName.style.fontSize = "2.2rem";
        destinationName.style.fontWeight = "bold";
        destinationName.style.color = "#ffffff";
        destinationName.style.marginTop = "0.6rem";
        destinationName.style.marginBottom = "1rem";
      }
      
      if (destinationDescription) {
        destinationDescription.style.fontSize = "1.4rem";
        destinationDescription.style.color = "#d1fae5";
        destinationDescription.style.lineHeight = "1.6";
        destinationDescription.style.marginTop = "1rem";
        destinationDescription.style.padding = "0 1rem";
      }
        destination.addEventListener("mouseenter", () => {
          destination.style.transform = `translateY(-10px)`;
          destination.style.transition = `transform 0.5s linear`;
           destination.style.background = "linear-gradient(135deg, #10b981, #16a085)";
          destination.style.boxShadow = "0 20px 20px 2px rgba(16, 185, 129, 0.3)";
        });
        destination.addEventListener("mouseleave", () => {
          destination.style.transform = `translateY(0px)`;
          destination.style.backgroundColor = "#047857";
          destination.style.boxShadow = "none";
        });
      }
    }
  });
  return (
    <div>
      {/* Hero Section */}
      <div className="abovepart">
        <div className="imagemain">
          <img src="./Assets/home image 5.jpg" alt="Main Tour" />
        </div>
        <div id="maintext">Explore the Northern Wonders of Pakistan</div>
      </div>

      {/* Destinations */}
      <div id="destinationsDiv">
        <div className="destinationHeading">{props.heading}</div>
        <div className="traveldestinations">
          {destinationsall.map((dest, index) => (
            <div key={dest.id} className={`destination${index + 1}`}>
              <div className="imagedestination">
                <img src={dest.image} alt={dest.name} />
              </div>
              <div className="destinationName">{dest.name}</div>
              <div className="destinationDescription">{dest.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials animate-on-scroll">
        <div className="testimonials-heading">WHAT OUR CUSTOMERS SAY</div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">
              "We explored hidden gems I had never seen in any travel blogs.
              Comfortable travel, delicious food, and scenery that truly felt
              straight out of a painting — an experience I’ll cherish forever."
            </div>
            <div className="nameinfo">
              <div className="customer-avatar">SJ</div>
              <div className="testimonial-author">Sarah Johnson</div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">
              "Visiting the northern valleys with this tour service was a dream
              come true. Every spot was breathtaking, and the arrangements made
              the trip completely stress-free."
            </div>
            <div className="nameinfo">
              <div className="customer-avatar">MC</div>
              <div className="testimonial-author">Michael Chen</div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <div className="testimonial-text">
              "From snow-capped peaks to crystal-clear lakes, this was the most
              memorable journey of my life. The guides were friendly and made
              every moment special."
            </div>
            <div className="nameinfo">
              <div className="customer-avatar">ER</div>
              <div className="testimonial-author">Emma Rodriguez</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
