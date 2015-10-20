import React from 'react';
import Navigation from '../../components/navigation';

export default React.createClass({
  displayName: 'NavigationTest',

  getInitialState () {
    return {
      routes: [
        { label: 'Github', route: 'http://www.github.com', icon: 'bookmark' },
        { label: 'Mail', route: 'http://mail.google.com', icon: 'inbox' }
      ]
    };
  },

  render () {
    return (
      <section>
        <h5>Navigation</h5>
        <p>lorem ipsum...</p>

        <Navigation type='vertical' routes={this.state.routes} />
      </section>
    );
  }
});