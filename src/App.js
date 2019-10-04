import React from "react";
import SearchBarUpdate from "./SearchBarUpdate";
import ReplaceBarUpdate from "./ReplaceBarUpdate";
import Upload from "./Upload";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import VisibleFuncResultsList from "./VisibleFuncResultsList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3, 2),
    height: 500,
  },
}));

export default function App(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2} style={{height:'100%'}}>
          <Grid item xs={9}>
            <SearchBarUpdate />
          </Grid>
          <Grid item xs={9}>
            <ReplaceBarUpdate />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <VisibleFuncResultsList />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Upload />
          </Grid>
        </Grid>
      </div>
    );
}

