import React, { SetStateAction, createContext, useState } from "react";
import { ModalContentType } from "../components/Modal";

type Props = {
    children: React.ReactNode;
}

type ContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    content: ModalContentType;
    setContent: React.Dispatch<SetStateAction<ModalContentType>>;
}

const initialContentState = {
    image: "",
    title: "",
    text: "",
    info: "",
    price: 0
};

export const ModalContext = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => {},
    content: initialContentState,
    setContent: () => {}
});

export default function ModalProvider({children}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ModalContentType>(initialContentState);

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen, content, setContent}}>{children}</ModalContext.Provider>
    )
}