import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Canvas from '../Canvas'
import BigPicture from "./BigPicture"

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MainTabs({solution}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
      
        <TabPanel value={value} index={0} dir={theme.direction}>
            <BigPicture solution={solution} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <Canvas />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            Diagrams
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            References
        </TabPanel>
      
    </div>
  );
}

MainTabs.propTypes = {
  solution: PropTypes.object.isRequired
}