import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #F44336
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" style={{backgroundColor: primary}} aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fab" color="primary" style={{backgroundColor: primary}} aria-label="Edit" className={classes.button}>
        <EditIcon />
      </Button>
      <Button variant="fab" color="primary" style={{backgroundColor: primary}} aria-label="Delete" className={classes.button}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);