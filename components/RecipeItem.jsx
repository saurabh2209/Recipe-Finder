var React=require('react')
var {connect}=require("react-redux")
 var action=require("../actions/actions.jsx")

var RecipeItem=React.createClass({
    
    
render:function(){
var {recipe, dispatch}=this.props
    
return(
    
    <div>
    <div className="star" onClick={function(){
        
        dispatch(action.favoriteItem(recipe))
        
     }}>
    </div>
    <a href={recipe.href}>
    {recipe.title}
    
    </a><br/>
    <img src={recipe.thumbnail}/>    
    
    </div>
    )    
}    
    
})
module.exports=connect()(RecipeItem)