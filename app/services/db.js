import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

export default function LoadDatabase() {
  //   const DB = SQLite.openDatabase(
  //     `${FileSystem.documentDirectory}/storage/data.db`
  //   );
  const DB = SQLite.openDatabase(`data.db`);
  return DB;
}
