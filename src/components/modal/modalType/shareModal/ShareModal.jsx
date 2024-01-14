import stylesShareFolder from "./ShareFolderModal.module.css";

function ShareModal() {
  return;
}

ShareModal.Folder = ShareFolderModal;

function ShareFolderModal() {
  return <div className={stylesShareFolder.modal}>share folder</div>;
}

export default ShareModal;
