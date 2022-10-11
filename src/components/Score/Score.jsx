const Score = (props) => {
  return ( 
    <div className="test">
      <h5>Test Date:</h5>
      <p>{props.score.date}</p>
      <h5>Score:</h5>
      <p>{props.score.score}</p>
    </div>
   );
}
 
export default Score;