"use client";

import { Tab, Tabs } from "@mui/material";
import { ITab } from "@/shared/interfaces";

interface Props {
  tabValue: number;
  setTabValue: (value: number) => void;
  tabsList: ITab[];
}

const AppTab = ({ tabValue, setTabValue, tabsList }: Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={handleChange}
      centered
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "green",
        },
      }}
    >
      {tabsList.map((tab) => (
        <Tab
          key={tab.label}
          icon={tab.icon}
          label={tab.label}
          sx={{
            color: "#116600",
            fontFamily: "'VT323', monospace",
            fontSize: "25px",
            "&.Mui-selected": {
              color: "#2bff00",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default AppTab;
