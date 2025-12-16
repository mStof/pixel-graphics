import { create } from "zustand";

type UseLineProps = {
  line: number;
  setLine: (line: number) => void;
};

export const useLine = create<UseLineProps>((set) => ({
  line: 0,
  setLine: (lineNum) =>
    set(() => ({
      line: lineNum,
    })),
}));
