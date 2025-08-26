import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWords, wordsCategories } from "../../redux/word/operations";
import Dashboard from "../../components/Dashboard/Dashboard";
import { selectWords } from "../../redux/word/selectors";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  const words = useSelector(selectWords);
  console.log(words);

  useEffect(() => {
    dispatch(wordsCategories());
    dispatch(fetchAllWords());
  }, [dispatch]);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DictionaryPage;
