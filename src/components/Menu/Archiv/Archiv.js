import classes from "./Archiv.module.css";

import { useCollection } from "../../../hooks/useCollection";
import { useAuthContext } from "../../../hooks/useAuthContext";
import ArchivList from "./ArchivItem/ArchivList";

const Archiv = () => {
  const { user } = useAuthContext();
  const { documents: completed } = useCollection("completed", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Archiwum Zadań</h3>
      <ArchivList completed={completed} />
    </div>
  );
};
export default Archiv;
