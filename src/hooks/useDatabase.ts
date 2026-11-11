import { getDatabase, ref, set } from "firebase/database";

import { app } from "../service/firebase";
import { PixelartType } from "../types/pixelart";

export const useDatabase = () => {
  const db = getDatabase(app);

  const addDataUser = async () => {
    const reference = ref(db, `users/0001`);
    try {
      await set(reference, {
        username: "Mat",
        email: "mat@example.com",
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const addDataPixelart = async (userId: any, value: PixelartType) => {
    const reference = ref(db, `user/${userId}/pixelarts/${Date.now()}`);
    try {
      await set(reference, value);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return {
    addDataUser,
    addDataPixelart,
  };
};
