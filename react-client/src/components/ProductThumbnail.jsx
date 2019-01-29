import React from "react";
import "../custom.scss";

const ProductThumbnail = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {props.items.map((item, index) => {
          return (
            <div key={index} className="col">
              <img src={item.media[0].sizes[4].url} />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div>im thumbnail</div>
    </div>
  );
};

export default ProductThumbnail;
