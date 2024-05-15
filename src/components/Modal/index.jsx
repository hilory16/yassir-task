import { bool, func, element } from "prop-types";
import { useEffect } from "react";
import ReactModal from "react-modal";
import classNames from "classnames";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

export function Modal({ isOpen, onClose, children, contentCentered, ...rest }) {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "scroll";
    }

    return () => {
      window.document.body.style.overflow = "scroll";
    };
  }, [isOpen]);

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={!process.env.NODE_ENV === "test"}
        {...rest}
      >
        <div
          className={classNames("modal-content", {
            centered: contentCentered,
          })}
        >
          {children}
        </div>
      </ReactModal>
    </div>
  );
}

Modal.propTypes = {
  isOpen: bool,
  onClose: func,
  children: element,
  contentCentered: bool,
};
