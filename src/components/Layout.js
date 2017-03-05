import React, { Component } from 'react';

class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.array,
    name: React.PropTypes.string.isRequired
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
    return modifier;
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      window.requestAnimationFrame(() => {
        this.setState({
          breakpointModifier: this.getCurrentBreakpoint()
        });
      })
    })
  }

  render() {
    return (
      <div className={`${this.props.name}-layout ${this.state.breakpointModifier}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
