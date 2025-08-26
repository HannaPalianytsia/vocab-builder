import { useSelector } from "react-redux";
import { selectWords } from "../../redux/word/selectors";

const Statistics = () => {
  const words = useSelector(selectWords);
  console.log(words.length);

  return <div>To study:{words.length}</div>;
};

export default Statistics;
