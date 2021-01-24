import React, { ChangeEvent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Canvas from '../Canvas'
import BigPicture from "./BigPicture"
import Reference from "./Reference";
import ReferenceLinks from "./Reference/Links";

export type TabPanelProps = {
  children: React.ReactNode,
  index: number,
  value: number,
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export type MainTabsProps = {
  solution: object,
  canvas: object
}

export default function MainTabs({solution, canvas}: MainTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
        >
          <Tab label="Big Picture" {...a11yProps(0)} />
          <Tab label="Architecture canvas" {...a11yProps(1)} />
          <Tab label="Other Diagrams" {...a11yProps(2)} />
          <Tab label="References" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      
        <TabPanel value={value} index={0}>
            <BigPicture solution={solution} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Canvas canvas={canvas} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Reference />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ReferenceLinks />
        </TabPanel>
      
    </div>
  );
}