import React, { SetStateAction, createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
}

type ContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => {}
});

export default function ModalProvider({children}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen}}>{children}</ModalContext.Provider>
    )
}