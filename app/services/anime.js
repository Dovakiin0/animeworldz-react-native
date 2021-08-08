import { AnimeData } from "@dovakiin0/anime-data";

const anime = new AnimeData();

export const recent = async () => {
  try {
    const recent_anime = await anime.getRecent();
    return recent_anime;
  } catch (error) {
    return error;
  }
};
