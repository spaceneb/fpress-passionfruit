var input = document.getElementById('search-blog');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var url = window.location + '/blog/?q=' + input.value;
   window.location.href = url
  }
});