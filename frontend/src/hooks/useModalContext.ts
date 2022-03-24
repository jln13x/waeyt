import { ModalContext } from "context/ModalContext";
import { useContext } from "react";

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("Must be inside a modal context provider!");
  }

  return context;
};
