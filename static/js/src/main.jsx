import GoldenLayout from 'golden-layout';

import Layout from './Layout';
import Gallery from './Gallery.jsx';
import Navigation from './Navigation.jsx';

const myLayout = new GoldenLayout( Layout() );

class TestComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      return (
        <b>Test</b>
      )
  }
}


//Once all components are registered, call
myLayout.init();

myLayout.registerComponent( 'labels', TestComponent );
myLayout.registerComponent( 'gallery', Gallery );
myLayout.registerComponent( 'navigation', Navigation );

myLayout.init();
