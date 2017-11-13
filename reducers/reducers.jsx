

// Item Reducer maintaining the state for current list of items 
export var itemReducer=function(state=[],action){
    
switch(action.type){
    
case 'SET_ITEMS':    
return action.items

default:
return state    
    
}    
    
   }
   
   
// Favorite Item Reducer maintaining state for the favorite items marked by the user.
export var favoriteitemReducer=function(state=[],action){
    
switch(action.type){
    
case 'FAVORITE_ITEM':    
return state=[...state,action.item]    
    
default:
return state
    
}    
    
    
   }