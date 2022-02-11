import ReactStars from "react-rating-stars-component";

export const RateStars = ({ activeColor, size, onChange }) => {

  return (
    <ReactStars
      count={5}
      onChange={onChange}
      size={size}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor={activeColor}
    />
  )
}