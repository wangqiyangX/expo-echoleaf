import { categories, feeds } from "@/db/schema";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import AsyncStore from "expo-sqlite/kv-store";

export const addDummyData = async (db: ExpoSQLiteDatabase) => {
  const value = AsyncStore.getItemSync("firstDBInitialized");
  if (value) return;

  console.log("Inserting lists");

  await db
    .insert(categories)
    .values([
      { name: "Technology" },
      { name: "Product" },
      { name: "Design" },
      { name: "Blog" },
      { name: "News" },
      { name: "Others" },
    ]);

  await db.insert(feeds).values([
    {
      name: "Sam altman",
      description: "OpenAI 创始人 sam altman 个人博客",
      lang: "en",
      url: "https://blog.samaltman.com/posts.atom",
      category: 1,
    },
    {
      name: "WirelessWire News",
      description: "通信の専門メディアからIoT（Internet of Things）の専門誌",
      lang: "jp",
      url: "https://wirelesswire.jp/feed/",
      category: 1,
    },
    {
      name: "人人都是产品经理",
      description: "",
      lang: "zh",
      url: "http://www.woshipm.com/feed",
      category: 2,
    },
  ]);

  AsyncStore.setItemSync("firstDBInitialized", "true");
};
