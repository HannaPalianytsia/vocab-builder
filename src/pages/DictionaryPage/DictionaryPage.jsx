import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { wordsCategories } from "../../redux/word/operations";
import Dashboard from "../../components/Dashboard/Dashboard";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wordsCategories());
  }, [dispatch]);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DictionaryPage;
