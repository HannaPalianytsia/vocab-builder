import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWordsCategories } from "../../redux/word/selectors";
import { createWord } from "../../redux/word/operations";

const AddWordForm = ({ onClose }) => {
  const categories = useSelector(selectWordsCategories);

  const [category, setCategory] = useState(categories[0] || "");
  const [isIrregular, setVerbType] = useState(false);
  const [uaWord, setUaWord] = useState("");
  const [enWord, setEnWord] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWord = {
      category,
      ua: uaWord.trim(),
      en: enWord.trim(),
      ...(category === "verb" && { isIrregular }),
    };

    console.log(newWord);

    dispatch(createWord(newWord));

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Select categories */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded border"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Radio group for verbs */}
      {category === "verb" && (
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="verbType"
              value="regular"
              checked={isIrregular}
              onChange={() => setVerbType(true)}
            />
            Regular
          </label>
          <label>
            <input
              type="radio"
              name="verbType"
              value="irregular"
              checked={!isIrregular}
              onChange={() => setVerbType(false)}
            />
            Irregular
          </label>
        </div>
      )}

      {/* Input UA */}
      <div className="relative">
        <input
          type="text"
          placeholder="Українське слово"
          value={uaWord}
          onChange={(e) => setUaWord(e.target.value)}
          pattern="^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$"
          required
          className="w-full p-2 rounded border"
        />
        <span className="absolute right-2 top-2 text-sm">🇺🇦 Ukrainian</span>
      </div>

      {/* Input EN */}
      <div className="relative">
        <input
          type="text"
          placeholder="English word"
          value={enWord}
          onChange={(e) => setEnWord(e.target.value)}
          pattern="\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b"
          required
        />
        <span className="absolute right-2 top-2 text-sm">🇬🇧 English</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddWordForm;
