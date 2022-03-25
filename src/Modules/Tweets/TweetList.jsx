import React from 'react'
import TweetListItem from './TweetListItem'
import { Grid } from '@mui/material'


const tweets = [{ content: "Tweet 1", name: "Karel", userName: "@karel" },
{ content: "Tweet 2", name: "Karel", userName: "@karel" },
{ content: "Tweet 3", name: "Karel", userName: "@karel" },
{ content: "Tweet 4", name: "Karel", userName: "@karel" }]

function TweetList({ type = "Timeline" }) {
  return (
    <Grid container direction="column" rowSpacing={2}>
      {
        tweets.map((tweet, index) => (
          <Grid item>
            <TweetListItem tweet={tweet} />
          </Grid>
        ))
      }
    </Grid >
  )
}

export default TweetList