import classNames from "classnames";
import styles from "./ModalContainer.module.css";
import ShareFolderModal from "./modalType/shareModal/ShareFolderModal";
import EditFolderModal from "./modalType/editFolderModal/EditFolderModal";
import EditLinkModal from "./modalType/editLinkModal/EditLinkModal";

function ModalContainer({ isOpen, modalType }) {
  const modal = {
    ADD_FOLDER: <EditFolderModal.AddFolder />,
    DELETE_FOLDER: <EditFolderModal.DeleteFolder />,
    EDIT_FOLDER_NAME: <EditFolderModal.EditFolderName />,
    ADD_LINK: <EditLinkModal.AddLink />,
    DELETE_LINK: <EditLinkModal.DeleteLink />,
    SHARE_FOLDER: <ShareFolderModal />,
  };
  return (
    <div
      className={classNames(styles.modalContainer, isOpen ? styles.open : "")}
    >
      {modal[modalType]}
    </div>
  );
}

export default ModalContainer;
