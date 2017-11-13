var React=require("react")
 var {connect}=require('react-redux')
 var action=require("../actions/actions.jsx")
var SearchRecipe=require('SearchRecipe')
var ListRecipe=require('ListRecipe')

var Main=React.createClass({
    
render:function(){

return(
    
    <div>
    <div className="container">
    <h1> Recipe Page</h1>
    <SearchRecipe/>
    <ListRecipe/>
    </div>
    </div>
    )    
}    
    
})
module.exports=Main
    
   