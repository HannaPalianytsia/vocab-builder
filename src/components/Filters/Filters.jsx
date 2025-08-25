import { useSelector } from "react-redux";
import { selectWords, selectWordsCategories } from "../../redux/word/selectors";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

const Filters = () => {
  const categories = useSelector(selectWordsCategories);
  const words = useSelector(selectWords);
  const [value, setValue] = useState("");
  const [results, setResults] = useState(words);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isVerb, setIsVerb] = useState(true);

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value === "verb") {
      setIsVerb(true);
    } else {
      setIsVerb(false);
    }
    console.log("Обрано категорію:", e.target.value);
  };

  const handleChangeVerb = (e) => {
    setSelectedCategory(e.target.value);
    console.log("Обрано дієсдова:", e.target.value);
  };

  const handleSearch = (query) => {
    const sanitized = query.trim().toLowerCase();

    if (!sanitized) {
      setResults(words); // если пусто — показываем весь массив
      return;
    }

    const filtered = words.filter((word) =>
      word.toLowerCase().includes(sanitized)
    );

    setResults(filtered);
    console.log("filtered words", filtered);
  };

  // debounce для оптимизации поиска
  const debouncedSearch = useCallback(
    debounce((query) => {
      handleSearch(query);
    }, 300),
    []
  );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    debouncedSearch(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find the word"
        value={value}
        onChange={handleChange}
      />
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChangeCategory}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {isVerb && (
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Regular"
              onChange={handleChangeVerb}
            />
            Regular
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="Irregular"
              onChange={handleChangeVerb}
            />
            Irregular
          </label>
        </div>
      )}
    </div>
  );
};

export default Filters;
