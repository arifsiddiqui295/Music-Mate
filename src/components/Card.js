import React from "react";

const Card = (props) => {
  return (
      <div key={props.id} className="col-lg-3 col-md-6">
        <div className="card mb-2 mt-3">
          <img
            src={props.src}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Artist : {props.artist}
            </p>
            <p className="card-text">
              Release Date: {props.date}
            </p>
            <audio src={props.audiosrc} controls className="w-100"></audio>
          </div>
        </div>
      </div>
  );
};

export default Card;
