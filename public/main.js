const cardElementIdNum = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];

const currentID = () => {
  cardElementIdNum.forEach((item) => {
    return item;
  });
};

const getID = document.getElementById(currentID());

getID.addEventListener("click", (event) => {
  onclick = (event) => {
    alert("maybe it works???");
  };
});

// const currentIdNum = () => {
//   document.getElementById(() => {
//     for (let i = 0; i < cardElementIdNum.length; i++) {
//       return cardElementIdNum[i];
//     }
//   });
// };

// function alertId(item) {
//   item.addEventListener("click", (event) => {
//     onclick = (event) => {
//       alert(`${item} has been clicked!`);
//     };
//   });
// }

// alertId(currentIdNum());
