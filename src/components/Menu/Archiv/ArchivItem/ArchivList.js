import classes from "../Archiv.module.css";
import ArchitCompleted from "./ArchitCompleted";
const ArchivList = ({ completed }) => {
  return (
    <div className={classes.tasks}>
      <div className={classes.tasks__completed}>
        <h4 className={classes.tasks__title}>Zadania wykonane</h4>
        {completed.map((el) => {
          return (
            <ArchitCompleted
              key={el.id}
              id={el.id}
              title={el.title}
              descr={el.description}
              date={el.date}
            />
          );
        })}
      </div>
      <div className={classes.tasks__NotCompleted}>
        <h4 className={classes.tasks__title}>Zadania niewykonane </h4>
      </div>
    </div>
  );
};
export default ArchivList;
