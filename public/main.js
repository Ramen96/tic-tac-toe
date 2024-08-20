// Grabs button element id via param passed in onClick
function handleClick(id) {
  const stringifiedNum = id.toString();
  console.log(stringifiedNum);
  // Proof of concept here
  document.getElementById(stringifiedNum).style.background = "blue";
}
