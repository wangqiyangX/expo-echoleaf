import { Host, List, Switch } from "@expo/ui/swift-ui";
import React, { useState } from "react";

const SettingsPage = () => {
  const [useiCloud, setUseiCloud] = useState<boolean>(false);
  return (
    <Host style={{ flex: 1 }}>
      <List>
        <Switch label="iCloud" value={useiCloud} onValueChange={setUseiCloud} />
      </List>
    </Host>
  );
};

export default SettingsPage;
