import { create } from "zustand";

interface IStore {
  env: "local" | "online";
  setEnv: (by: "local" | "online") => void;
}

const useStore = create<IStore>()((set) => ({
  env: "local",
  setEnv: (env: "local" | "online") => set(() => ({ env: env })),
}));

export { useStore };
