import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="home">
        <Badge>9+</Badge>
        <Icon sf={{ default: "house", selected: "house.fill" }} />
        <Label selectedStyle={{}}>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="feeds">
        <Icon sf={{ default: "tray.full", selected: "tray.full.fill" }} />
        <Label selectedStyle={{}}>Feeds</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf={{ default: "gearshape", selected: "gearshape.fill" }} />
        <Label selectedStyle={{}}>Settings</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
