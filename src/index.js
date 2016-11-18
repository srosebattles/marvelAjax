$(document).ready(function(){
    // console.log('DOM IS READY');

$.ajax({
   url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Q&limit=10&apikey=cfe92312902acf787c24d7d60c0f917c"
 }).then(function(response) {
//    console.log(response.data.count)
//    console.log( response.data.results )
// $("#characterstuff").append(response.data.count)
// var group = $('<div class="group"></div>')
$.each(response.data.results, function(i, char){
  console.log(this)
  $("#characterstuff").append("<br>" + this.name + "<br>");
  $("#characterstuff").append("Character ID number: " + this.id + "<br>");
  $("#characterstuff").append("<hr/>");
}
)

 })
})
