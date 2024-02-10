import "./index.css";

let CardsItem = (props) => {
  let { cardDetails } = props;
  let { title, description, imgUrl, className } = cardDetails;
  return (
    <li className={`cards ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt="card" />
    </li>
  );
};

export default CardsItem;
