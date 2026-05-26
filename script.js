
function googleSearch(){
let value = document.getElementById('searchInput').value;
if(value){
window.open('https://www.google.com/search?q=' + encodeURIComponent(value),'_blank');
}
}
