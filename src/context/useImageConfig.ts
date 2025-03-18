import { create } from "zustand";

export type ImageConfigProps = {
  title: string;
  uriConfig: {
    uri: string;
    height: number;
    width: number;
    fileName: string;
  };
  height: number;
  width: number;
};
type UseImageConfigProps = ImageConfigProps & {
  setImageConfig: (imageConfig: ImageConfigProps) => void;
  setWidthPixels: (mode: "increse" | "decrese") => void;
  setHeightPixels: (mode: "increse" | "decrese") => void;
};

export const useImageConfig = create<UseImageConfigProps>((set) => ({
  title: "",
  uriConfig: {
    uri: "",
    width: 0,
    height: 0,
    fileName: "",
  },
  height: 0,
  width: 0,
  setImageConfig: (img) =>
    set(() => ({
      height: img.height,
      width: img.width,
      title: img.title,
      uriConfig: img.uriConfig,
    })),
  setWidthPixels: (mode) =>
    set((state) => ({
      width: mode === "increse" ? state.width + 1 : state.width - 1,
    })),
  setHeightPixels: (mode) =>
    set((state) => ({
      height: mode === "increse" ? state.height + 1 : state.height - 1,
    })),
}));
