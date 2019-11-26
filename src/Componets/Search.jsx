import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function WordForm(props) {
  const classes = useStyles();
  const [word, setWord] = useState(props.word);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value = {word}
        onChange={e => setWord(e.target.value)}
        type="text"
        placeholder="Search"
        inputProps={{ 'aria-label': 'word' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}