import { useState } from "react";
import AddWordModal from "../AddWordModal/AddWordModal";

const AddWordBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpenModal}>Add word</button>
      <AddWordModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};

export default AddWordBtn;
