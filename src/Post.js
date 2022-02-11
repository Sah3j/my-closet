import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import './Post.css';

function Post({postImage, postDescription}) {
  return (
    <div className="post">
        {/*Image*/}
        {/*description*/}
        {/*links*/}

        <Card sx={{ maxWidth: 165 }}>
            <CardMedia
                component="img"
                height="125"
                width="20"
                image={postImage}
                alt="Card Image"
            />
            <CardContent>
                <typography varient="body2" color="text.secondary">
                    {postDescription}
                </typography>
            </CardContent>
        </Card>

    </div>
  )
}

export default Post