import { Stack } from "expo-router";

export default function FeedsLayout() {
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
          title: "Feeds",
          headerStyle: {
            backgroundColor: "transparent",
          },
          unstable_headerRightItems: () => [
            {
              type: "menu",
              label: "Options",
              icon: {
                type: "sfSymbol",
                name: "ellipsis",
              },
              menu: {
                title: "Options",
                items: [
                  {
                    type: "action",
                    label: "Edit",
                    icon: {
                      type: "sfSymbol",
                      name: "pencil",
                    },
                    onPress: () => {
                      // Do something
                    },
                  },
                  {
                    type: "submenu",
                    label: "More",
                    items: [
                      {
                        type: "action",
                        label: "Delete",
                        destructive: true,
                        onPress: () => {
                          // Do something
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }}
      />
    </Stack>
  );
}
