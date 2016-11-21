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
  var textDiv = $('<div class="textDiv"></div>')
  var comicsDiv = $('<div class="comicsDiv"></div>')
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

  imgDiv.append(this.comics.items.name)
  console.log(this.comics.items)
  group.append(comicsDiv)



  //   $.each(this.comics), function(i, com){
  //     if (this.comics < 1) {
  //       return ""
  //     }
  // //  console.log(this.name)
  // // // //   console.log(this)
  //    console.log(comics.items.name)
  //    }

  $("#characterstuff").append(group);
  group.append("<hr/>");

}
)

 })
})

//Things which need to happen include:

//1. Make the loop go over comics array without failing
//2. Make checkboxes respond
//3. Figure out wtf is going on with the divs/color scheme.
