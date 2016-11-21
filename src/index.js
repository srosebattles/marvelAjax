$(document).ready(function(){
    // console.log('DOM IS READY');

    // $("form").on("submit", function(e){
    //   $("input:checkbox:checked").val())
    // })

$.ajax({
   url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Q&limit=10&apikey=cfe92312902acf787c24d7d60c0f917c"
 }).then(function(response) {
var group = $('<div class="group"></div>')

$.each(response.data.results, function(i, char){
  console.log(this)
  var charImage =$('<img />').attr("src", this.thumbnail.path + "/standard_large." + this.thumbnail.extension)
  var imgDiv = $('<div class="imgDiv"></div>')
  console.log(charImage)
  imgDiv.append(charImage)
  imgDiv.append("<br>" + this.name + "<br>")
  group.append(imgDiv)
  // if ("class=charID" === checked){
  //   $("#characterstuff").append("Character ID number: " + this.id + "<br>");
  // }

  $("#characterstuff").append(group);
  group.append("<hr/>");

}
)

 })
})
