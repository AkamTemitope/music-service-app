import { create } from 'zustand';

interface AuthModalStore {
  isOpen: boolean;
  type: string;
  onOpen: (t: string) => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  type: "",
  onOpen: (t = "") => {
    set({ type: t });
    set({ isOpen: true });
    return
  },
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
