
window.onload = () => {
  const divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', event => {

  })
  }

  const parrafos = document.getElementsByTagName("p");
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener('click', event => {
      var element = this.html();
      element.parentNode.removeChild(element);
    })
  }

}
