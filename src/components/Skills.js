import React from "react";
import heartbreaker from "../assets/images/heartbreaker.jpg";
import getfresh from "../assets/images/getfresh.jpg";
import surfer from "../assets/images/surfer.jpg";
import waves from "../assets/images/waves.jpg";
import dukethebarber from "../assets/images/dukethebarber.png";
// import brian from "../assets/images/brian.png";
// import dru from "../assets/images/dru.png";

const Skills = () => (
  <div className="row skill">
    {/* <div className="three columns header-col"> */}
    <h1>
      <span>Gallery</span>
    </h1>
    <div className="three columns">
      <img src={dukethebarber} alt="" />
      <img src={waves} alt="" />
      <img src={surfer} alt="" />
      <img src={heartbreaker} alt="" />
      <img src={getfresh} alt="" />
      {/* <img src={brian} alt="" />
      <img src={dru} alt="" /> */}
    </div>
    {/* </div> */}

    <div className="nine columns main-col">


      <div className="bars">
        <h4>
          {/* <p>What are the of a Foursquare Church?</p> */}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque aliquet enim vel dignissim. Cras tempus luctus lorem, eu malesuada nulla rutrum ac. Nulla facilisi. Integer neque risus, vestibulum ac ante sed, scelerisque sodales nisl. Duis sit amet dui tortor. Ut quis efficitur libero. Fusce quis mattis eros, vitae convallis ipsum. Pellentesque vitae odio consectetur tortor imperdiet sodales. Suspendisse sed condimentum nisl.

            Pellentesque id orci et nisl malesuada lacinia eu a ex. Donec fringilla dictum dui, non tempus neque mattis nec. Integer vitae ante quis orci imperdiet suscipit. Nunc rutrum sollicitudin accumsan. Etiam risus velit, rhoncus quis ante vitae, semper condimentum neque. Ut scelerisque porttitor nisi, at sagittis lorem tincidunt nec. Morbi euismod lacinia elit, sed pharetra magna. Donec venenatis lacinia dolor pellentesque facilisis. Aliquam vitae laoreet dolor. Donec pulvinar hendrerit ante id pellentesque. Suspendisse luctus, est id accumsan maximus, est nisl luctus mauris, id vulputate eros ligula nec felis. Nunc quam magna, pharetra quis congue nec, convallis ut augue. Fusce vitae nisl elit. Cras diam magna, ornare volutpat cursus ut, volutpat nec velit.

            Vivamus porta elit ac lacus imperdiet, mattis varius nulla cursus. Quisque id facilisis nibh, sed consectetur tellus. Aliquam ultrices ligula et mauris euismod maximus. Nulla sollicitudin arcu blandit libero lacinia interdum quis nec justo. Fusce vitae dui ut lectus elementum euismod. Donec molestie justo quam, eu finibus magna blandit ac. Quisque maximus lacinia velit, ac sagittis eros auctor id. Quisque facilisis, massa non porta accumsan, elit sem maximus nisi, a ultricies ante urna vel massa. Aenean nec mattis lacus. Donec tempor tempor neque, in facilisis purus dignissim vitae. Nullam sapien nulla, posuere a accumsan et, feugiat nec lectus.

            Duis magna purus, gravida eu aliquet et, tincidunt vitae ipsum. Proin vel lectus nec odio aliquet laoreet. Donec nisl tortor, viverra nec efficitur eget, finibus id massa. Vestibulum vel turpis sit amet turpis imperdiet suscipit at nec nibh. Ut egestas nisl non est fermentum pretium. Phasellus in nisi sed sem molestie venenatis a vel massa. Curabitur quis accumsan ligula, nec cursus erat. Quisque mattis urna at urna cursus bibendum. Nam ornare varius est, eget ultricies erat lacinia non. Praesent interdum ullamcorper arcu nec semper. Mauris mollis odio ipsum, non dapibus urna mollis vitae. Aliquam erat volutpat. Sed ullamcorper euismod faucibus. Etiam finibus mollis nunc non ornare.</p>

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