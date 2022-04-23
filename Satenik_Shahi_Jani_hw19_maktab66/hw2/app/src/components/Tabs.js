import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Welcome from "./Welcome";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box width={"50%"}>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item 44e</TabPanel>
        </Box>
        <Box width={"50%"} sx={{ textAlign:"center" }}>
          <Welcome />
        </Box>
        <Box
          position={"fixed"}
          sx={{ width: "100%", typography: "body1", top: "auto", bottom: "0" }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
              <Tab label="Item Three" value="4" />
            </TabList>
          </Box>
        </Box>
      </Box>
    </TabContext>
  );
}
