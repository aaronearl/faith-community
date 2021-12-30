import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Mission</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {/* <div className="row item">
        <div className="twelve columns">
          <h3>University of Life</h3>
          <p className="info">
            Master in Graphic Design
            <span>&bull;</span>
            <em className="date">April 2007</em>
          </p>


        </div>
      </div> */}

      <div className="row item">
        <div className="twelve columns">
          {/* <h3>Our Assignment</h3> */}
          <p className="info">
           <h4>
            Our Mission is to build a community of Faith that is motivated by love, via evangelistic zeal that operates in the priciples and teachings of the Holy Bible.  Where people find and live out their divine purpose and fulfill the Great Commission of God. 
            </h4>
            <span>&bull;</span>

          </p>

        </div>
      </div>
    </div>
  </div>
);

export default Education;
