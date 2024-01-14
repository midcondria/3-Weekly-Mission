import stylesDeleteFolder from "./DeleteFolderModal.module.css";
import stylesDeleteLink from "./DeleteLinkModal.module.css";

function DeleteModal() {
  return;
}
DeleteModal.Folder = DeleteFolderModal;
DeleteModal.Link = DeleteLinkModal;

function DeleteFolderModal() {
  return <div className={stylesDeleteFolder.modal}>delete folder</div>;
}
function DeleteLinkModal() {
  return <div className={stylesDeleteLink.modal}>delete link</div>;
}

export default DeleteModal;
