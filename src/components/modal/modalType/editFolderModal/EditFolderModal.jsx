import stylesAddFolder from "./AddFolderModal.module.css";
import stylesEditFolderName from "./EditFolderNameModal.module.css";
import stylesDeleteFolder from "./DeleteFolderModal.module.css";
import Button from "../../../button/Button";
import CloseButton from "../../../button/CloseButton";

function EditFolderModal() {
  return;
}

EditFolderModal.AddFolder = AddFolderModal;
EditFolderModal.EditFolderName = EditFolderNameModal;
EditFolderModal.DeleteFolder = DeleteFolderModal;

function AddFolderModal({ onModalCloseClick }) {
  return (
    <div className={stylesAddFolder.modal}>
      <CloseButton
        className={stylesAddFolder.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesAddFolder.title}>폴더 추가</h2>
      <input className={stylesAddFolder.input} placeholder="내용 입력" />
      <Button className={stylesAddFolder.addButton}>추가하기</Button>
    </div>
  );
}

function EditFolderNameModal({ onModalCloseClick }) {
  return (
    <div className={stylesEditFolderName.modal}>
      <CloseButton
        className={stylesEditFolderName.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesEditFolderName.title}>폴더 이름 변경</h2>
      <input className={stylesEditFolderName.input} placeholder="내용 입력" />
      <Button className={stylesEditFolderName.addButton}>변경하기</Button>
    </div>
  );
}
function DeleteFolderModal({ onModalCloseClick }) {
  return <div className={stylesDeleteFolder.modal}>Delete Folder</div>;
}

export default EditFolderModal;
