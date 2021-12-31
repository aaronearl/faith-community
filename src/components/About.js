import React from "react";
// import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Our Pastor</h2>
        <h4>
        <p>
        Rev. D.T. Paredes has had the honor of preaching, teaching, and singing the Gospel of Jesus Christ from South Central Los Angeles to Cape Town, South Africa.
Rev. Paredes, a native of Los Angeles, CA has served for 17 years as a Christian School Educator 
and 30 consecutive years as a Senior Pastor in The International Church of the  Foursquare Gospel, serving in the heart of the inner-city of Los Angeles.
Rev. D.T. Paredes was academically prepared at both L.I.F.E. Bible College and Fuller Theological Seminary.  Rev. D.T. Paredes has taught and trained pastors and leaders internationally.
Through Music and Ministry, the doors of opportunity have been opened across the globe. 
Rev. Paredes has traveled to Five continents and sung at some of the world's most celebrated music venues; from New York's Legendary Carnegie Hall to U.C.L.A.’s Historic Royce Hall, as well as some of the great Concert Halls of the United Kingdom, including working with The Royal Philharmonic Orchestra and recording at the legendary Abbey Road Studio.
Rev. Paredes also has a long history of fruitfulness in the area of Discipleship and Community Development.  His work in the area of Community Development as a Board Member of the 
West Angeles Church of God In Christ CDC (Community Development Corporation) has been distinguished by being written into the Congregational Record of The United States of America (Currently on file in The United States Library of Congress.) 
His legacy of discipleship began nearly twenty years prior to the beginning of his “formal” pastorate and spans well over two generations.
Even with his long history of service, “Pastor” as he is lovingly called; is still passionate about people and letting them know that no matter how disenfranchised or disqualified they may feel, they are truly…
“Accepted in the Beloved!”  Ephesians 1:6

        </p>
        </h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SlpzUInKZsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <h3>
            <p className="address">
              <span>Faith Community Foursquare Church</span>
              <br />
              <span>Sunday Morning Service 10am</span>
              <br />
              <span>Wednesday Night Bible Study 6pm</span>
              <span>
                <br /> 5519 Avalon Blvd. 
              </span>
              <span>
                <br /> Los Angeles, CA 90011 US
              </span>
              <br />
              <span>(323) 816-6163</span>
              <br />
            </p>
            </h3>
          </div>
          {/* <div className="columns download">
            <p>
              <a href="candacecollins.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
