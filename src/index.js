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
  var charImage =$('<img />').attr("src", this.thumbnail.path + "/standard_xlarge." + this.thumbnail.extension)
  var imgDiv = $('<div class="imgDiv"></div>')
  var textDiv = $('<div class="imgDiv"></div>')
  imgDiv.append(charImage)
  imgDiv.append("<br>" + this.name + "<br>")
  group.append(imgDiv)
  // if ("class=charID" === checked){
  //   $("#characterstuff").append("Character ID number: " + this.id + "<br>");
  // }
  textDiv.append("Character ID number: " + this.id + "<br>")
  
  if (this.description === "" || this.description === null){
    textDiv.append("There is no character description available right now. Our bad!")
  } else {
    textDiv.append(this.description)
  }

  group.append(textDiv)



  //  $.each(response.data.results.comics.items), function(i, com){
  // console.log(this.name)
  // //   console.log(this)
  // //   console.log(comics.items.name)
  //  }

  $("#characterstuff").append(group);
  group.append("<hr/>");

}
)

 })
})
