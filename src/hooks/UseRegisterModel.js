import { create } from "zustand";

const UseRegisterModel = create((set) => ({
    isOpen: false ,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default UseRegisterModel;
