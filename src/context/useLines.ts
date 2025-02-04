import { create } from "zustand";

type UseLineProps = {
  line: number;
  setLine: (mode: "increse" | "decrese") => void;
};

export const useLine = create<UseLineProps>((set) => ({
  line: 0,
  setLine: (mode) =>
    set(({ line }) => ({
      line: mode === "increse" ? line + 1 : line - 1,
    })),
}));
