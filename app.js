const container = document.getElementById("image-container");

function fetchDogPics() {
  fetch("https://dog.ceo/api/breed/hound/images/random")
    .then(function (rawResponse) {
      return rawResponse.json();
    })
    .then(function (usableData) {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const caption = document.createElement("figcaption");

      container.appendChild(figure);
      var dogUrl = usableData.message;
      image.src = dogUrl;
      image.width = "410";
      image.height = "320";
      figure.appendChild(image);

      var urlContent = dogUrl.split("/");
      var name = urlContent[4].split("-");
      var node = document.createTextNode(name[0].toUpperCase() + " " + name[1].toUpperCase());
      caption.appendChild(node);
      figure.appendChild(caption);

    });
}
