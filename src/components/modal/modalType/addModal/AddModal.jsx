import stylesAddFolder from "./AddLinkModal.module.css";
import stylesAddLink from "./AddLinkModal.module.css";

function AddModal() {
  return;
}

AddModal.Folder = AddFolderModal;
AddModal.Link = AddLinkModal;

function AddFolderModal() {
  return <div className={stylesAddFolder.modal}>add folder</div>;
}

function AddLinkModal() {
  return <div className={stylesAddLink.modal}>add link</div>;
}

export default AddModal;
