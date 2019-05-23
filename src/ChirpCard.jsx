import React from 'react';

const ChirpCard = (props) => {
  return (
    <article className="col-md-6">
      <div className="card  m-1 shadow">
        <div className="card-body">
          <h4 className="card-title">{props.message}</h4>
        </div>
      </div>
    </article>
  );
}

export default ChirpCard;