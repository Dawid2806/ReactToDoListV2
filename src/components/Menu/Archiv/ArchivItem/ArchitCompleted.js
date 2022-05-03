import classes from "./ArchitCompleted.module.css";

const ArchitCompleted = (props) => {
  return (
    <div className={classes.completed__box}>
      <h4 className={classes.title}>{props.title}</h4>
      <span className={classes.description}>{props.descr}</span>
      <span className={classes.date}>{props.date}</span>
    </div>
  );
};
export default ArchitCompleted;
