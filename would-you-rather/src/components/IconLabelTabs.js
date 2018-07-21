import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ZoomIn from '@material-ui/icons/ZoomIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const custom_color = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export default class IconLabelTabs extends React.Component {
  static propTypes = {
    // from material-ui
    classes: PropTypes.object.isRequired,
  };
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className='navigation-bar'>
        <Paper>
          <Tabs value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary" 
            style={custom_color}>
            <Link to="/login">
              <Tab icon={<HomeIcon />} label="HOME" />
            </Link>
            <Link to="/add">
              <Tab icon={<AddIcon />} label="ADD QUESTIONS" />
            </Link>
            <Link to="/unanswered">
              <Tab icon={<ZoomIn />} label="UNANSWERED" />
            </Link>
            <Link to="/answered">
              <Tab icon={<FavoriteIcon />} label="ANSWERED" />
            </Link>
            <Link to="/leaderboard">
              <Tab icon={<PersonPinIcon />} label="LEADERBOARD" />
            </Link>
          </Tabs>  
        </Paper>
      </div>
    );
  }
}
