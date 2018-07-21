import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});
const custom_color = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title="Add Question">
        <Button variant="fab" color="primary" style={custom_color} aria-label="Add" className={classes.absolute}>
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);