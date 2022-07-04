import React from "react";
import ancient from "../assets/images/ancient.png";
import pastoranddoctor from "../assets/images/pastoranddoctor.jpg";
import youngmen from "../assets/images/youngmen.jpg";
import deacons from "../assets/images/deacons.jpg";
import foursquareicon from "../assets/images/foursquareicon.jpg";
import brian from "../assets/images/brian.png";
import dru from "../assets/images/dru.png";

const Skills = () => (
  <div className="row skill">
    {/* <div className="three columns header-col"> */}
    <h1>
      <span>Ministry</span>
    </h1>
    <div className="three columns">
      <img src={foursquareicon} alt="" />
      <img src={pastoranddoctor} alt="" />
      <img src={deacons} alt="" />
      <img src={ancient} alt="" />
      <img src={youngmen} alt="" />
      <img src={brian} alt="" />
      <img src={dru} alt="" />
    </div>
    {/* </div> */}

    <div className="nine columns main-col">


      <div className="bars">
        <h4>
          {/* <p>What are the of a Foursquare Church?</p> */}

          <p>The MINISTRIES of FAITH COMMUNITY FOURSQUARE CHURCH are Manifold; including but not limited to...</p>
          <ul>
            -IN DEPTH STUDY OF GOD'S WORD
            -MUSIC
            -FOOD FELLOWSHIP
            -COMMUNITY OUTREACH AND EDUCATION
            -DRAMA: 'The Faith Community Players'
            -COUNSELING and MORE
          </ul>
          <p>One of Our Strengths is Our Willingness to "Submit to One Another in Love" Ephesians 5:21</p>
          <p>Rev. D.T. Paredes and Dr. Mardra J. Paredes are 'A Brother and Sister Ministry Team' that Serve as Senior Pastor and Assistant Pastor; Respectively.</p>
          <br></br>
          <h2>Why attend the Faith Community Foursquare Church?</h2>
          <br></br>
          <p>For Increased Spiritual Strength  "I can do all this through Christ who strengthens me" Phillipians 4:13.  Thus, we invite you to fellowship with us this Sunday at 10am.  Let's get Free! Let's Spread Love and Get Stronger through the Power of Jesus Christ! </p>

          <p>The Foursquare Gospel represents the unchanging ministry of Jesus Christ and our mission to declare it worldwide. The four "Symbols" of our logo represent the four scriptural roles of Jesus as Savior, Baptizer with the Holy Spirit, Healer and Soon-Coming King. "Jesus Christ the Same Yesterday, and Today and Forever."  Hebrew 13:8 </p>

        </h4>
        <br />
        {/* <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Bible Knowledge</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>Christanity</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>Love</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>Self Control</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Kindness</em>
          </li>
          <li>
            <span className="bar-expand photoshop" />
            <em>Joy and Happiness</em>
          </li>
        </ul> */}
      </div>
    </div>
  </div>
);

export default Skills;