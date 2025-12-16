import { useSQLiteContext } from "expo-sqlite";

import { CardType } from "./initDB";

export const useDatabase = () => {
  const db = useSQLiteContext();

  const addData = async (data: Omit<CardType, "id" | "lines" | "porcent" | "tags">) => {
    const query = await db.prepareAsync(
      "INSERT INTO userCards (name, image, real_width, real_height, width_px, height_px, filename) VALUES ($name, $image, $realWidth, $realHeight, $widthPx, $heightPx, $filename);"
    );

    try {
      const result = await query.executeAsync({
        $name: data.name,
        $image: data.image,
        $realWidth: data.real_width,
        $realHeight: data.real_height,
        $widthPx: data.width_px,
        $heightPx: data.height_px,
        $filename: data.filename,
      });

      const thisId = result.lastInsertRowId;
      return { thisId };
    } catch (error) {
      console.log(error);
    }
  };

  const listData = async () => {
    try {
      const query = "SELECT * FROM userCards";
      const result = await db.getAllAsync<CardType>(query);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id: number) => {
    if (!id) return console.error("NÃO SE DELETA SEM WHERE DA TABLE");
    try {
      const query = await db.prepareAsync("DELETE FROM userCards WHERE id = $id");
      const result = await query.executeAsync({
        $id: id,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (data: { lines: number; id: number }) => {
    try {
      const query = await db.prepareAsync("UPDATE userCards SET lines = $lines WHERE id = $id");
      const result = query.executeAsync({
        $lines: data.lines,
        $id: data.id,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return { addData, listData, deleteData, updateData };
};
