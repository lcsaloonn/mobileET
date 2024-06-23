import { TBaseStory } from "types/stories.type";
import { create } from "zustand";

export const useStoriesStore = create<TBaseStory[]>(() => []);
