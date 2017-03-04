import React, { Component } from 'react';
import Nav from '../components/Nav';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object
  }

  constructor() {
    super()

    this.breakpoints = {
      'mobile':  [0, 768],
      'tablet':  [769, 1024],
      'laptop':  [1025, 1440],
      'desktop': [1441, 2559],
      'hi-res':  [2560, 999999]
    }

    this.state = {
      breakpointModifier: this.getCurrentBreakpoint()
    }
  }

  getCurrentBreakpoint() {
    let modifier = '--mobile';
    for (let breakpoint in this.breakpoints) {
      if (!this.breakpoints[breakpoint]) break;
      const [min, max] = this.breakpoints[breakpoint];
      if (window.innerWidth >= min && window.innerWidth <= max) {
        modifier = `--${breakpoint}`;
        break;
      }
    }
    console.log('get modifier', modifier);
    return modifier;
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          breakpointModifier: this.getCurrentBreakpoint()
        });
      }, 300);
    })
  }

  render() {
    return (
      <div className={`app-layout ${this.state.breakpointModifier}`}>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
