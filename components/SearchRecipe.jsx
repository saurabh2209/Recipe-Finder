
var React=require('react')
var {Form, FormGroup, ControlLabel, Button, FormControl}=require("react-bootstrap")
var axios=require('axios')
var {connect}=require('react-redux')
var action=require('../actions/actions.jsx')

var SearchRecipe=React.createClass({
    
getInitialState:function(){
    
return{
ingredients:'',    
dish:''    
}    
    
}   , 

//Searching for recipes based on user's input
search:function(){
var {dispatch}=this.props
var {ingredients, dish}=this.state    
var url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`    

dispatch(action.fetch(url))
    
},
    
render:function(){
    
return(
    
    <div>
    <Form inline>
    <FormGroup>
    <ControlLabel>Ingredients </ControlLabel>
    <FormControl 
    type="text" 
    placeholder="garlic,chicken"
    onChange={function(e){
    this.setState({
        
    ingredients: e.target.value    
    })   
        
        
    }.bind(this)}
    />
    
    </FormGroup>
    {' '}
    <FormGroup>
    <ControlLabel>Dish </ControlLabel>
    <FormControl type="text"
    placeholder="adobo"
    onChange={function(e){
        
    this.setState({
    dish:e.target.value    
        
    })    
        
        
    }.bind(this)}
    
    
    />
    
    </FormGroup>
    {' '}
    <Button onClick={function(){
        
     this.search()   
    }.bind(this)}>Submit</Button>
    
    </Form>
    
    </div>
    
    )    
    
 }    
    
})

//Connecting component to the Redux Store
module.exports=connect()(SearchRecipe)