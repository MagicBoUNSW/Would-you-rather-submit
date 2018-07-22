import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const custom_color = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('John Doe', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class LeaderBoard extends Component {

  countAnswers = id => {
    return Object.keys(this.props.users[id].answers).length
  }

  countQuestions = id => {
    return this.props.users[id].questions.length
  }

  totalScore = id => {
    return this.countQuestions(id) + this.countAnswers(id)
  }
  render() {
    const userIds = Object.keys(this.props.users).sort((a,b) => this.totalScore(b) - this.totalScore(a))

    return (
      <Paper>
        <Table style={custom_color}>
          <TableHead >
            <TableRow>
              <CustomTableCell>Player</CustomTableCell>
              <CustomTableCell numeric>Questions Asked</CustomTableCell>
              <CustomTableCell numeric>Questions Answered</CustomTableCell>
              <CustomTableCell numeric>TotalScore</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userIds.map(id => (
                <TableRow key={id}>
                  <CustomTableCell component="th" scope="row">{id}
                  </CustomTableCell>
                  <CustomTableCell numeric>{this.countQuestions(id)}</CustomTableCell>
                  <CustomTableCell numeric>{this.countAnswers(id)}</CustomTableCell>
                  <CustomTableCell numeric>{this.totalScore(id)}</CustomTableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      // <ul className='leaderboard'>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users
      ? users
      : {}
  }
}

export default connect(mapStateToProps)(LeaderBoard)
