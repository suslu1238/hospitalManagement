import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare Medical Institute is a leading healthcare provider focused on delivering personalized, compassionate care to every patient. Our highly skilled team is committed to ensuring that each individual receives the attention and treatment they deserve, combining modern medical expertise with a holistic approach to health.
          </p>
          
          <p>
          Located in a state-of-the-art facility, ZeeCare offers a wide range of services designed to address the unique healthcare needs of our community. We emphasize prevention, advanced treatment options, and overall wellness, always prioritizing the well-being of our patients. At ZeeCare, we are more than just healthcare providers—we are partners in your health journey, dedicated to helping you live a healthier, happier life.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
