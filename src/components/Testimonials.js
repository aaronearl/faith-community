import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Testimonials</h1>
          <ul>
            {/* <Slider {...settings}> */}
            <li>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque aliquet enim vel dignissim. Cras tempus luctus lorem, eu malesuada nulla rutrum ac. Nulla facilisi. Integer neque risus, vestibulum ac ante sed, scelerisque sodales nisl. Duis sit amet dui tortor. Ut quis efficitur libero. Fusce quis mattis eros, vitae convallis ipsum. Pellentesque vitae odio consectetur tortor imperdiet sodales. Suspendisse sed condimentum nisl.
                </p>
                <cite>Duis magna purus, gravida eu aliquet et</cite>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p>
                  Pellentesque id orci et nisl malesuada lacinia eu a ex. Donec fringilla dictum dui, non tempus neque mattis nec. Integer vitae ante quis orci imperdiet suscipit. Nunc rutrum sollicitudin accumsan. Etiam risus velit, rhoncus quis ante vitae, semper condimentum neque. Ut scelerisque porttitor nisi, at sagittis lorem tincidunt nec
                </p>
                <cite>Duis magna purus, gravida eu aliquet et</cite>
              </blockquote>
            </li>
            {/* </Slider> */}
          </ul>
        </div>
        {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Testimonials;
