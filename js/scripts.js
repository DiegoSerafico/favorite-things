$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#myList").empty();
    const favoriteThing1 = $("#favoriteThing1").val();
    const favoriteThing2 = $("#favoriteThing2").val();
    const favoriteThing3 = $("#favoriteThing3").val();
    const favoriteThing4 = $("#favoriteThing4").val();
    const favoriteThings = [favoriteThing1, favoriteThing2, favoriteThing3, favoriteThing4];

    const array2 = [];
    array2.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);

    let listElement = document.createElement("ul");
    document.getElementById("myList").appendChild(listElement);

    array2.forEach(function (item) {
      let li = document.createElement("li");
      listElement.appendChild(li);

      li.innerHTML += item;
    });

  });
});