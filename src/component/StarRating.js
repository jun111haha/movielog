import React from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({ voteAverage }) => {
  return (
    <StarRatings
      rating={voteAverage / 2}
      caption="Small"
      starRatedColor="yellow"
      starDimension="15px"
      starSpacing="0px"
    />
  );
};
export default StarRating;
