export const Resto = ({ food }) => {
  return (
    <div>
      <div id="forcard">
        <img src={food.image} alt="" />
        <h4>{food.name}</h4>
        <p>{food.food}</p>
        <div id="p">
          <div className="a">            
            <h5 id="rate">{food.rating}</h5>
            <p>Starting at Rs.{food.prize}</p>
          </div>
          <div className="ab">
            <p>{food.votes} Votes</p>
            <p>{food.rivew} Reviews</p>
          </div>
        </div>
 <div className="patmethod">
  <p>Accepted { food.card == true ? "Card" : null }
  { food.cash == true ? "Cash" : null }
  { food.upi == true ? " all Payment methods" : null }
  </p>   
 </div>
    </div>
    </div>
  );
};
