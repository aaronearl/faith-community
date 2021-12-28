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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque egestas congue. Pulvinar mattis nunc sed blandit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Metus vulputate eu scelerisque felis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Dolor magna eget est lorem ipsum. Enim praesent elementum facilisis leo vel fringilla est. Donec massa sapien faucibus et. Velit sed ullamcorper morbi tincidunt. Posuere urna nec tincidunt praesent semper. Cras sed felis eget velit aliquet sagittis. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget.

Blandit cursus risus at ultrices mi tempus. Dolor magna eget est lorem ipsum. In nisl nisi scelerisque eu ultrices. Pellentesque elit eget gravida cum sociis natoque penatibus. Nisl purus in mollis nunc sed id semper. Diam ut venenatis tellus in metus vulputate eu. Nisi lacus sed viverra tellus in hac habitasse platea. Quisque sagittis purus sit amet volutpat consequat. Vel risus commodo viverra maecenas accumsan. Adipiscing elit ut aliquam purus.

Est pellentesque elit ullamcorper dignissim. Eu feugiat pretium nibh ipsum consequat nisl. Donec et odio pellentesque diam volutpat commodo sed egestas. Tortor at auctor urna nunc id cursus. Tempus egestas sed sed risus pretium quam vulputate. Mi bibendum neque egestas congue quisque egestas. Vitae justo eget magna fermentum iaculis. Diam sollicitudin tempor id eu nisl nunc. Luctus venenatis lectus magna fringilla urna porttitor. Eu feugiat pretium nibh ipsum consequat. Vel eros donec ac odio tempor orci dapibus ultrices. Porta nibh venenatis cras sed felis. Cras tincidunt lobortis feugiat vivamus at augue.
        </p>
        </h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SlpzUInKZsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Faith Community Foursquare Church</span>
              <br />
              <span>Sunday Morning Service 10am</span>
              <span>
                <br /> 5519 Avalon Blvd. 
              </span>
              <span>
                <br /> Los Angeles, CA 90011 US
              </span>
              <br />
              <span>(323) 816-6163</span>
              <br />
              <span>speak2cdc@yahoo.com</span>
            </p>
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
