import { createContext, useContext, useRef } from "react";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import AddFolder from "./modalType/folder/addFolder/AddFolder";
import AddLink from "./modalType/link/addLink/AddLink";

type ModalContextType = {
  handleClose: () => void;
};

const initContext: ModalContextType = {
  handleClose: () => {},
};

const ModalContext = createContext(initContext);

export default function Modal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { type } = router.query;

  const handleClose = () => {
    router.back();
  };

  // useRef를 이용해 모달창 바깥을 누르면 모달창 꺼지도록 함
  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalContext.Provider value={{ handleClose }}>
      <div className={styles.bg} onClick={handleClickOutside}>
        <div className={styles.window} ref={modalRef}>
          {modalSelect(type as string)}
        </div>
      </div>
    </ModalContext.Provider>,

    document.getElementById("modal-root") as HTMLElement
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}

const modalSelect = (type: string) => {
  switch (type) {
    case "addFolder":
      return <AddFolder />;
    case "addLink":
      return <AddLink />;
  }
};
