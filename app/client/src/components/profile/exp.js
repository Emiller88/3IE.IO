import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className='profile-paper'>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Research
        </Typography>
        <Typography component="p">
					<ul>
						<li>Distributed Consensus</li>
						<li>Jam Resistance</li>
						<li>Machine Learning</li>
						<li>Cellular Automata</li>
						<li>Graphics</li>
					</ul>					
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);