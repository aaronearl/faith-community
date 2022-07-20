import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Appointments</span>
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
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
            </h4>
            <span>&bull;</span></p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
