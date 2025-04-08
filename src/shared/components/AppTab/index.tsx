"use client";

import { Tab, Tabs } from "@mui/material";
import { ITab } from "@/shared/interfaces";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
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
    </motion.div>
  );
};

export default AppTab;
