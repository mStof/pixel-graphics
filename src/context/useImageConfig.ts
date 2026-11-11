import { create } from "zustand";

type UriConfigProps = {
  uri: string;
  height: number;
  width: number;
  fileName: string;
};

export type ImageConfigProps = {
  title: string;
  uriConfig: UriConfigProps;
  height: number;
  width: number;
};

type UseImageConfigProps = {
  image: ImageConfigProps;
  setImageConfig: (imageConfig: ImageConfigProps) => void;
  setWidthPixels: (mode: "increse" | "decrese") => void;
  setHeightPixels: (mode: "increse" | "decrese") => void;
  reset: () => void;
};

const initialState: ImageConfigProps = {
  title: "",
  uriConfig: {
    uri: "",
    width: 0,
    height: 0,
    fileName: "",
  },
  height: 0,
  width: 0,
};

// export const useImageConfig = create<ImageConfigProps>(() => initialState);
// type setImageConfigType = typeof useImageConfig.setState;
// export const setImageConfig: setImageConfigType = (nextState) => {
//   useImageConfig.setState(nextState);
// };

export const useImageConfig = create<UseImageConfigProps>((set) => ({
  image: initialState,
  setImageConfig: (img) => {
    set((state) => ({
      image: {
        ...state.image,
        uriConfig: img.uriConfig,
        width: img.width,
        title: img.title,
        height: img.height,
      },
    }));
  },
  setWidthPixels: (mode) =>
    set((state) => ({
      image: {
        ...state.image,
        width: mode === "increse" ? state.image.width + 1 : state.image.width - 1,
      },
    })),
  setHeightPixels: (mode) =>
    set((state) => ({
      image: {
        ...state.image,
        height: mode === "increse" ? state.image.height + 1 : state.image.height - 1,
      },
    })),
  reset: () => set({ image: initialState }),
}));
