import { create } from 'zustand';

interface useProjectModalProject {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProjectModal = create<useProjectModalProject>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));