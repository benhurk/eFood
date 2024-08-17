import React, { SetStateAction, createContext, useState } from "react";
import { ModalProps } from "../components/Modal";

type Props = {
    children: React.ReactNode;
}

type ContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    props: ModalProps;
    setProps: React.Dispatch<SetStateAction<ModalProps>>;
}

const initialState: ModalProps = {
    content: {
        image: "",
        title: "",
        text: "",
        info: "",
        price: 0
    },
    product: {
        foto: "",
        preco: 0,
        id: 0,
        nome: "",
        descricao: "",
        porcao: ""
    }
};

export const ModalContext = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => {},
    props: initialState,
    setProps: () => {}
});

export default function ModalProvider({children}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [props, setProps] = useState<ModalProps>(initialState);

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen, props, setProps}}>{children}</ModalContext.Provider>
    )
}