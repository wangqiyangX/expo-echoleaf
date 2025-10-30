import * as schema from "@/db/schema";
import { Feed } from "@/db/schema";
import { Host, List, Text } from "@expo/ui/swift-ui";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

const FeedsPage = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });
  useDrizzleStudio(db);

  const queryData = async () => {
    const data = await drizzleDb.query.feeds.findMany();
    setFeeds(data);
  };

  useEffect(() => {
    queryData();
  }, []);

  return (
    <Host style={{ flex: 1 }}>
      <List>
        {feeds.map((feed) => {
          return <Text key={feed.id}>{feed.name}</Text>;
        })}
      </List>
    </Host>
  );
};

export default FeedsPage;
