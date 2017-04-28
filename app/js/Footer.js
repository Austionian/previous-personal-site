getYear = () => new Date(Date.now()).getFullYear()

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('year').innerHTML = getYear();
})
