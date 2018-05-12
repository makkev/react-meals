import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map((day) => ({
      day,
      // TODO: find out if it is possible to use the commented out code
      // meals: calendar[day],
      // meals: Object.assign({}, calendar[day])
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null
        return meals
      }, {}) 
    })),
  }
}

export default connect(mapStateToProps)(App);
// export default App;
