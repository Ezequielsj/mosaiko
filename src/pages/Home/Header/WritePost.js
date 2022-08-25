import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  button: {
    width: '100%',
  },
}));


function WritePost() {
  const classes = useStyles();
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    
    <Button className={classes.button} variant="contained" color="primary" onClick={handleClick}>
      post new problem
    </Button>
  );
}

export default WritePost;
