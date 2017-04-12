const React=require('react')
const ReactDOM=require('react-dom')
const Service=require('service')

Service().run();

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
