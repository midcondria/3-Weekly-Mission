import stylesEditFolderName from "./EditFolderNameModal.module.css";

function EditModal() {
  return;
}

EditModal.FolderName = EditFolderNameModal;

function EditFolderNameModal() {
  return <div className={stylesEditFolderName.modal}>edit folder name</div>;
}

export default EditModal;
