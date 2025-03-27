"use client";

import { Tab, Tabs } from "@mui/material";
import { DeveloperBoard, LibraryBooks, StarRate } from "@mui/icons-material";

interface Props {
  tabValue: number;
  setTabValue: (value: number) => void;
}

const KnowledgeTabs = ({ tabValue, setTabValue }: Props) => {
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
      <Tab
        icon={<StarRate />}
        label="favoritos"
        sx={{
          color: "#116600",
          fontFamily: "'VT323', monospace",
          fontSize: "25px",
          "&.Mui-selected": {
            color: "#2bff00",
          },
        }}
      />
      <Tab
        icon={<DeveloperBoard />}
        label="outros"
        sx={{
          color: "#116600",
          fontFamily: "'VT323', monospace",
          fontSize: "25px",
          "&.Mui-selected": {
            color: "#2bff00",
          },
        }}
      />
      <Tab
        icon={<LibraryBooks />}
        label="pacotes"
        sx={{
          color: "#116600",
          fontFamily: "'VT323', monospace",
          fontSize: "25px",
          "&.Mui-selected": {
            color: "#2bff00",
          },
        }}
      />
    </Tabs>
  );
};

export default KnowledgeTabs;
