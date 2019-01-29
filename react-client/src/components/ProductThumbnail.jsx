import React from "react";
import "../custom.scss";

const ProductThumbnail = props => {
  function convertTime(time) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(time);
    // returns the month in the specified date according to local time,
    // as a zero-based value (where zero indicates the first month of the year)
    const month = monthNames[date.getMonth()];
    const theDate = date.getDate();
    const year = date.getFullYear();

    return `${month} ${theDate}, ${year}`;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        {props.items.map((item, index) => {
          return (
            <div key={index} className="col text-center">
              <img src={item.media[0].sizes[4].url} />
              <div className="align-bottom">
                <div>{item.title}</div>
                <div>$ {item.price}</div>
                <div>{convertTime(item.created_at)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>im thumbnail</div>
    </div>
  );
};

export default ProductThumbnail;
