import { create } from "zustand";

type ImageConfigProps = {
  title: string;
  uri: string;
  height: number;
  width: number;
};

type UseImageConfigProps = ImageConfigProps & {
  setImageConfig: (imageConfig: ImageConfigProps) => void;
  setWidthPixels: (mode: "increse" | "decrese") => void;
};

export const useImageConfig = create<UseImageConfigProps>((set) => ({
  title: "",
  uri: "",
  height: 0,
  width: 0,
  setImageConfig: (img) =>
    set(() => ({
      height: img.height,
      width: img.width,
      title: img.title,
      uri: img.uri,
    })),
  setWidthPixels: (mode) =>
    set((state) => ({
      width: mode === "increse" ? state.width++ : state.width--,
    })),
}));
