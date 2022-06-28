import React from "react";
import ancient from "../assets/images/ancient.png";
import pastoranddoctor from "../assets/images/pastoranddoctor.jpg";
import youngmen from "../assets/images/youngmen.jpg";
const Skills = () => (
  <div className="row skill">
    {/* <div className="three columns header-col"> */}
    <h1>
      <span>Ministry</span>
    </h1>
    <div className="three columns">
      <img src={pastoranddoctor} alt="" />
      <img src={ancient} alt="" />
      <img src={youngmen} alt="" />
    </div>
    {/* </div> */}

    <div className="nine columns main-col">


      <div className="bars">
        <h4>
          {/* <p>What are the of a Foursquare Church?</p> */}

          <p>The MINISTRIES of FAITH COMMUNITY FOURSQUARE CHURCH are Manifold; including but not limited to...</p>
          <ul>
            -MUSIC
            -FOOD FELLOWSHIP
            -COMMUNITY OUTREACH AND EDUCATION
            -DRAMA: 'The Faith Community Players'
            -COUNSELING and MORE
          </ul>
          <p>One of our Strenghts is Our Willingness to "Submit to One Another in Love" Ephesians 5:21</p>
          <p>Rev. D.T. Paredes and Dr. Mardra J. Paredes Are a Brother and Sister Ministry Team they Serve as Senior Pastor and Assistant Pastor; Perspectively.</p>
          <br></br>
          <h2>Why attend the Faith Community Foursquare Church?</h2>
          <br></br>
          <p>For Increased Spiritual Strength Phillipians 4:13 'I can do all this through him who gives me strength'.  Thus, we invite you to fellowship with us this Sunday at 10am.  Let's get Free! Let's Spread Love and Get Stronger through the Power of Jesus Christ! </p>

          <p>Our name reflects the unchanging ministry of Jesus Christ and our mission to declare it worldwide. The four squares of our logo represent the four scriptural roles of Jesus as Savior, Baptizer with the Holy Spirit, Healer and Soon-Coming King.</p>

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
