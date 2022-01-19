console.log('hello world');

const toggleBtn1 = document.getElementById('toggleBtn');
console.log(toggleBtn1);

const cardContainerDiv = document.getElementById('cardLink');
console.log(cardContainerDiv);


toggleBtn1.onchange = function() {
  if (cardContainerDiv.style.display !== "none") {
    cardContainerDiv.style.display = "none";
  } else {
    cardContainerDiv.style.display = "block";
  }
};
