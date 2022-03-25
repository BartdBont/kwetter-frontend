import { Grid } from '@mui/material'
import React from 'react'
import TweetList from '../Modules/Tweets/TweetPanel'

function Dashboard() {
  return (
    <>
      <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2} p={1}>
        <Grid item xs={8}>
          <TweetList />
        </Grid>
        <Grid item xs={4}>
          <div>right side</div>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard