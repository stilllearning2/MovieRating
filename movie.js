"use strict";

var Movie =function(pMovie, pRating){
    this.movie=pMovie;
    this.rating =pRating;
    this.validateInput = function(){
        if(this.movie === "" || isNaN(this.rating) || this.rating < 0 || this.rating > 5)
            {
                return false;
            }
        else{
            return true;
        }
    };
    this.toString =function(){
       
       
        return  this.movie.toString().concat(this.rating.toString());
    };
    
}
    
