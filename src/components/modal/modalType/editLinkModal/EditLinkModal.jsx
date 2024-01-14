import stylesAddLink from "./AddLinkModal.module.css";
import stylesDeleteLink from "./DeleteLinkModal.module.css";

function EditLinkModal() {
  return;
}

EditLinkModal.AddLink = AddLinkModal;
EditLinkModal.DeleteLink = DeleteLinkModal;

function AddLinkModal() {
  return <div className={stylesAddLink.modal}>Add Link</div>;
}

function DeleteLinkModal() {
  return <div className={stylesDeleteLink.modal}>Delete Link</div>;
}

export default EditLinkModal;
