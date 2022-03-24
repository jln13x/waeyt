import React from "react";

interface IModalContext {
  registeredModal: string | undefined;
  registerModal: (param: string) => void;
  unregisterModal: (param: string) => void;
}

export const ModalContext = React.createContext<IModalContext>(undefined);
