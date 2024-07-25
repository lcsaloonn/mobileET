import { create } from "zustand";

interface IStore {
  isLocal: boolean | undefined;
  setEnv: (env: boolean) => void;
}

const useStore = create<IStore>()((set) => ({
  isLocal: undefined,
  setEnv: (env: boolean) => set(() => ({ isLocal: env })),
}));

export { useStore };
