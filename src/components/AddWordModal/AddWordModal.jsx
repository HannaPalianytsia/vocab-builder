import Modal from "react-modal";
import AddWordForm from "../AddWordForm/AddWordForm";

export default function AddWordModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Word Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2>Add word</h2>
        <button onClick={onClose}>Close</button>
      </div>

      <p>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <AddWordForm onClose={onClose} />
    </Modal>
  );
}
