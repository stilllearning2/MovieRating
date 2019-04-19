"use strict";



var movies = {
    movieList:[],
    addToList : function(){
        var movie1 = new Movie($("#title").text(), $("#rating").text());
        if(movie1.validateInput())
            {

                this.movieList.push(movie1.toString());

            }
        else
            {

               $("#message").text("the data was not good.");
            }

    },

    showList: function(){
        for(let i = 0; i < this.movieList.length; i++) 
            {
                $("#second").text = this.movieList[i] + "<br/>";

            }

    }
 
};

$(function(){
    $("#submit").on("click",movies.addToList());
    $("#showMoive").on("click",movies.showList());
});

