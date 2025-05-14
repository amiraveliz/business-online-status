import { create } from "zustand";

export const useLocationStore = create((set) => ({
    location: null,
    locationDirectories: [],
    setLocation: (location) => set(() => ({ location })),
    setLocationDirectories: (locationDirectories) =>
        set(() => ({ locationDirectories })),
    clear: () =>
        set({
            location: null,
            locationDirectories: [],
        }),
}));
