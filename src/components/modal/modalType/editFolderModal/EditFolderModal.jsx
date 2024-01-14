import stylesAddFolder from "./AddFolderModal.module.css";
import stylesEditFolderName from "./EditFolderNameModal.module.css";
import stylesDeleteFolder from "./DeleteFolderModal.module.css";

function EditFolderModal() {
  return;
}

EditFolderModal.AddFolder = AddFolderModal;
EditFolderModal.EditFolderName = EditFolderNameModal;
EditFolderModal.DeleteFolder = DeleteFolderModal;

function AddFolderModal() {
  return <div className={stylesAddFolder.modal}>Add Folder</div>;
}

function EditFolderNameModal() {
  return <div className={stylesEditFolderName.modal}>Edit Folder Name</div>;
}
function DeleteFolderModal() {
  return <div className={stylesDeleteFolder.modal}>Delete Folder</div>;
}

export default EditFolderModal;
