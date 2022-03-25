import { Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import TweetList from './TweetList';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FeedIcon from '@mui/icons-material/Feed';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function TweetPanel() {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'primary' }}>
        <Tabs value={tab} onChange={handleChange} centered>
          <Tab icon={<FeedIcon />} label="Timeline" />
          <Tab icon={<AlternateEmailIcon />} label="Mentions" />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <TweetList type="Timeline" />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TweetList type="Mentions" />
      </TabPanel>
    </Box>
  )
}

export default TweetPanel