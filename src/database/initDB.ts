import { type SQLiteDatabase } from "expo-sqlite";

export type CardType = {
  id: number;
  name: string;
  tags?: string;
  porcent?: number;
  image: string;
  real_width: number;
  real_height: number;
  width_px: number;
  height_px: number;
  filename: string;
  lines: number;
};

export const InitDB = async (database: SQLiteDatabase) => {
  setTimeout(() => {}, 10000);
  try {
    await database.execAsync(`
          CREATE TABLE IF NOT EXISTS userCards (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              tags TEXT,
              porcent REAL,
              image TEXT NOT NULL,
              real_width REAL NOT NULL,
              real_height REAL NOT NULL,
              width_px REAL NOT NULL,
              height_px REAL NOT NULL,
              filename TEXT NOT NULL,
              lines INTEGER
          );
        `);
  } catch (err) {
    console.error("Error initializing database", err);
  }
};
