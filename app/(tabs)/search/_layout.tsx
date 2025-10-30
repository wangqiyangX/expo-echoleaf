import { Stack } from "expo-router";

export default function DiscoverLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Search",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerSearchBarOptions: {
            placement: "automatic",
            placeholder: "Search",
            onChangeText: () => {},
          },
        }}
      />
    </Stack>
  );
}
