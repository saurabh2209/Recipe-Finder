 var React=require("react")
 var ReactDOM=require("react-dom")
 var {Provider}=require('react-redux')
 require('../styles/index.css')

var store = require('../store/store.jsx').configure();
var Main=require('Main')

// Subscribing to changes in the store 
store.subscribe(function(){
 
 console.log('current state is',store.getState())
 
})

  ReactDOM.render(
  // Providing the store to all your components
  <Provider store={store}>
  <Main/>
  </Provider>
  ,
  document.getElementById('app')
  );
  
