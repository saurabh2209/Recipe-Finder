
var {itemReducer, favoriteitemReducer}=require('../reducers/reducers.jsx')
var redux=require('redux')
var thunk=require('redux-thunk').default

export var configure=function(){
    
var reducer=redux.combineReducers({
    
items:itemReducer,
favoriteitems:favoriteitemReducer
})

var store = redux.createStore(reducer, redux.compose(
  redux.applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  ));   
return store    
    
    
}




