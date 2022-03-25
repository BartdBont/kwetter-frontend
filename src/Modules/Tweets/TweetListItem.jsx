import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function TweetListItem({ tweet }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" color="text.primary" display="inline">
          <strong>{tweet.name}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline" sx={{ marginLeft: 1 }}>
          <strong>{tweet.userName}</strong>
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ marginTop: 1 }}>
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  )
}

export default TweetListItem