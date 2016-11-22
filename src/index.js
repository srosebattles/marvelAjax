$(document).ready(function(){
    // console.log('DOM IS READY');
    var whatChecked

     $("form").on("submit", function(e){
       e.preventDefault();
     $.each($("input[type='checkbox']:checked"), function(i, v){
       var whatChecked = $(v).val()
       console.log(whatChecked)
     })
     return whatChecked
   })

$.ajax({
   url: "http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=Q&apikey=cfe92312902acf787c24d7d60c0f917c"
 }).then(function(response) {

var group = $('<div class="group"></div>')


$.each(response.data.results, function(i, char){
  var subgroup = $('<div class="subgroup"></div>')
  var charImage =$('<img />').attr("src", this.thumbnail.path + "/standard_xlarge." + this.thumbnail.extension)
  var imgDiv = $('<div class="imgDiv"></div>')
  var textDiv = $('<div class="textDiv"></div>')
  var comicsDiv = $('<div class="comicsDiv"></div>')
  imgDiv.append(charImage)
  imgDiv.append("<br>" + this.name + "<br>")
  subgroup.append(imgDiv)

    // if (whatChecked === charID){
  textDiv.append("Character ID number: " + this.id + "<br>");
    // }

  // textDiv.append("Character ID number: " + this.id + "<br>")

  if (this.description === "" || this.description === null){
    textDiv.append("There is no character description available right now. Our bad!" + "<br>")
  } else {
    textDiv.append(this.description)
  }

  subgroup.append(textDiv)

  imgDiv.append(this.comics.items.name)
  subgroup.append(comicsDiv)


      if (this.comics.items.length > 0){
        $.each(this.comics.items, function(i, com){
         comicsDiv.append(com.name)
       })
     } else {
       comicsDiv.append("Sorry, we can't find a record of this character's comics")
     }

       subgroup.append("<hr/>");
       group.append(subgroup)
  $("#characterstuff").append(group);


}
)

 })
})

//Things which need to happen include:


//2. Make checkboxes respond
