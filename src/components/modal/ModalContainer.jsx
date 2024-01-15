import classNames from "classnames";
import styles from "./ModalContainer.module.css";
import ShareFolderModal from "./modalType/shareModal/ShareFolderModal";
import EditFolderModal from "./modalType/editFolderModal/EditFolderModal";
import EditLinkModal from "./modalType/editLinkModal/EditLinkModal";
import { useRef } from "react";

function ModalContainer({ isOpen, modalType, onModalCloseClick }) {
  const modal = {
    ADD_FOLDER: <EditFolderModal.AddFolder />,
    DELETE_FOLDER: <EditFolderModal.DeleteFolder />,
    EDIT_FOLDER_NAME: <EditFolderModal.EditFolderName />,
    ADD_LINK: <EditLinkModal.AddLink />,
    DELETE_LINK: <EditLinkModal.DeleteLink />,
    SHARE_FOLDER: <ShareFolderModal />,
  };

  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onModalCloseClick();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer} onClick={handleClickOutside}>
          <div className={styles.window} ref={modalRef}>
            {modal[modalType]}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalContainer;
