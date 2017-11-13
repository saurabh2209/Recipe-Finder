
var axios=require('axios')

//Action creators for disptaching action to the store
export var setRecipe=function(items){
    
    return{
    type:'SET_ITEMS',    
    items
        
    }
    
}

//Redux Thunk middleware for making async calls and to delay the dispatch of an action 
export var fetch=function(url){
    
 return function(dispatch){
     
 return axios.get(url).then(function(res){
 dispatch(setRecipe(res.data.results))

 }).catch(function(error){
     
 console.log(error)     
 })
    
}
     
     
}    
    
export var favoriteItem=function(item){
    
return{
    type:'FAVORITE_ITEM',
    item
}    
    
}
