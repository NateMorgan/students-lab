import Score from "../Score/Score";

const Student = (props) => {
  return ( 
    <div>
      <h1>{props.student.name}</h1>
      <h3>{props.student.bio}</h3>
      {props.student.scores.map(score=>
        <Score score={score}></Score>)}
    </div>
   );
}
 
export default Student;