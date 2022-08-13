import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import NavBar from './NavBar';

import WritePost from '../Home/Header/WritePost';



const useStyles = makeStyles((theme) => ({
  root: {},
  
  write: {
  //paddingBottom: '10px'
  paddingBottom: theme.spacing(2),
}

}));



function Feed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const feed = await axios.get('/api/feed');
    setPosts(feed.data.posts);
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (

    
    
    <Container maxWidth="lg">
      <Box display="flex">
        <Hidden smDown>
          <NavBar />
        </Hidden>
        <div>
        <div className={classes.write}>
          <WritePost />
        </div>
        <div className={classes.root}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        </div>
      </Box>
    </Container>
    
  );
}

export default Feed;
