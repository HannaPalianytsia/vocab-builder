import { useState } from "react";
import { useSelector } from "react-redux";
import { selectWordsCategories } from "../../redux/word/selectors";

const AddWordForm = ({ onClose }) => {
  const categories = useSelector(selectWordsCategories);

  const [category, setCategory] = useState(categories[0] || "");
  const [verbType, setVerbType] = useState("regular");
  const [uaWord, setUaWord] = useState("");
  const [enWord, setEnWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWord = {
      category,
      type: category === "verb" ? verbType : null,
      ua: uaWord.trim(),
      en: enWord.trim(),
    };

    console.log("New word:", newWord);
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
              checked={verbType === "regular"}
              onChange={(e) => setVerbType(e.target.value)}
            />
            Regular
          </label>
          <label>
            <input
              type="radio"
              name="verbType"
              value="irregular"
              checked={verbType === "irregular"}
              onChange={(e) => setVerbType(e.target.value)}
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
