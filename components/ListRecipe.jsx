var React=require('react')
var {connect}=require('react-redux')
var RecipeItem=require('RecipeItem')

var ListRecipe=React.createClass({
    
render:function(){
    
return(
    
    <div>
    <ul className="list-group">
    {
    this.props.items.map(function(recipe){
        
    return <li className="list-group-item"><RecipeItem recipe={recipe}/></li>    
        
    })    
     }
    </ul>
    
    
    </div>
    )    
    
}    
    
})

//Connecting to store and mapping state to props
module.exports=connect(function(state){
    
    return{
        
    items:state.items    
    }
    
    
    })(ListRecipe)