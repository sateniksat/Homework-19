import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Welcome from "./Welcome";
import GutterlessList from "./List";
// import { DataContext } from "../context/DataContext";

// const {data,newdata,setnewdata}=React.useContext(DataContext);
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box width={"50%"} sx={{ textAlign: "center" }}>
          <TabPanel value="1">
            <h5>Web Design</h5>
            <GutterlessList item={"WebDesign"} />
            <h5>Front-End</h5>
            <GutterlessList item={"FrontEnd"} />
            <h5>Back-End</h5>
            <GutterlessList item={"BackEnd"} />
          </TabPanel>
          <TabPanel value="2">
            <h5>Web Design</h5>
            <GutterlessList item={"WebDesign"} />
          </TabPanel>
          <TabPanel value="3">
            <h5>Front-End</h5>
            <GutterlessList item={"FrontEnd"} />
          </TabPanel>
          <TabPanel value="4">
            <h5>Back-End</h5>
            <GutterlessList item={"BackEnd"} />
          </TabPanel>
        </Box>
        <Box width={"50%"} sx={{ textAlign: "center" }}>
          <Welcome />
        </Box>
        <Box
          position={"fixed"}
          sx={{ width: "100%", typography: "body1", top: "auto", bottom: "0" }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "#3f51b5" }}>
            <TabList
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="All" value="1" />
              <Tab label="Web Design" value="2" />
              <Tab label="Front-End" value="3" />
              <Tab label="Back-End" value="4" />
            </TabList>
          </Box>
        </Box>
      </Box>
    </TabContext>
  );
}
