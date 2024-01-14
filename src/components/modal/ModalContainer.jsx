import classNames from "classnames";
import styles from "./ModalContainer.module.css";
import AddModal from "./modalType/addModal/AddModal";
import EditModal from "./modalType/editModal/EditModal";
import DeleteModal from "./modalType/deleteModal/DeleteModal";
import ShareModal from "./modalType/shareModal/ShareModal";

function ModalContainer({ isOpen, modalType = "SHARE_FOLDER" }) {
  const modal = {
    ADD_FOLDER: <AddModal.Folder />,
    ADD_LINK: <AddModal.Link />,
    EDIT_FOLDER_NAME: <EditModal.FolderName />,
    DELETE_FOLDER: <DeleteModal.Folder />,
    DELETE_LINK: <DeleteModal.Link />,
    SHARE_FOLDER: <ShareModal.Folder />,
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
