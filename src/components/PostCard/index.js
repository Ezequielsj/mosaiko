import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import './style.css';

import { useBlocker, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    maxWidth: 500,
  },

  boxHeader: {
    display: 'flex',
  

  },

  button: {
    marginLeft: 'auto',
    boxShadow: 'none',
    borderRadius: '0px',
    
  },

  subheader: {
    display: 'flex',
    alignItems: 'center',
  },
  caption: {
    marginRight: theme.spacing(1),
    
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24px',
  },
  image: {
    height: '100%',
    width: '100%',
    //maxWidth: '100%',
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: 'auto',
  },

  text: {
    display: 'flex'
  },


}));

function PostCard({ post }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${post.slug}`);
  };

  return (
    <Card className={classes.root} onClick={handlePostClick}>
      <div  className={classes.boxHeader}>
      <CardHeader
     
        avatar={<Avatar src={post.author?.avatar} />}
        title={<Typography  variant="h6" >{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
              Escrito por
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              {post.author.name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              {moment(post.date).fromNow()}
            </Typography>
          </div> 
        }
      />

      <div >
        <Button size="small" className={classes.button} variant="contained" color="primary" >
        <Typography variant="h5">0</Typography>
        </Button>
      </div>

        </div>

      <CardContent className={classes.content}>
        <Typography className={classes.message} variant="body1">
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} className={classes.image} alt="img" />
        </CardActionArea>
      </CardContent>

<div > 
        
        <div className="ma">
          
            <Typography
            className={classes.typo}
            style={{ cursor: 'pointer' }}
            color="textSecondary"
            variant="body2"
          >
            {post.likes} Likes
          </Typography>
          
          <Typography
           className={classes.typo}
        
            color="textSecondary"
            variant="body2"
          >
            {post.comments} Solution
          </Typography>
           
        </div>
        <div className="line" />
        
        
        
          
      <CardActions disableSpacing className="icons">
        
        <div>

        <IconButton aria-label="like">
          <FavoriteIcon style={{ fontSize: 32 }}/>
        </IconButton>
         </div>
         
       {/*  
        <IconButton aria-label="comment">
          <MessageIcon />
        </IconButton> */}
        
        
      

        <IconButton aria-label="like">
          <EmojiObjectsIcon style={{ fontSize: 34 }} />
        </IconButton>


        <div className="arrow">
        <div className="arrow">
        <IconButton aria-label="like" className="arrow">
          <ArrowDropDownCircleIcon className="arrow" style={{ fontSize: 32 }}/>
        </IconButton>
        </div>
        </div>

        <IconButton aria-label="like">
          <MoreVertIcon  style={{ fontSize: 32 }}/>
        </IconButton>

       
        

      


      </CardActions>

      
      </div>


    </Card>
  );
}

export default PostCard;
