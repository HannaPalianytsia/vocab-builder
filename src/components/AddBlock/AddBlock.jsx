import { Link } from "react-router-dom";
import AddWordBtn from "../AddWordBtn/AddWordBtn";
import css from "./AddBlock.module.css";

const AddBlock = () => {
  return (
    <div>
      <AddWordBtn />
      <Link to="/training" className={css.link}>
        Train oneself
      </Link>
    </div>
  );
};

export default AddBlock;
