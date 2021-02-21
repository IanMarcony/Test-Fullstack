//Added event wheel on lists
// document
//   .querySelector("#first-showcase #items")
//   .addEventListener("wheel", (event) => {
//     if (event.deltaY < 0) {
//       event.target.scrollBy(300, 0);
//     } else {
//       event.target.scrollBy(-300, 0);
//     }
//   });

// document
//   .querySelector("#second-showcase #items")
//   .addEventListener("wheel", (event) => {
//     if (event.deltaY < 0) {
//       event.target.scrollBy(300, 0);
//     } else {
//       event.target.scrollBy(-300, 0);
//     }
//   });

//Added click to buttons First Showcase

document
  .querySelector("#first-showcase #button-left-showcase-mostpop")
  .addEventListener("click", (event) => {
    document.querySelector("#first-showcase #items").scrollBy(-300, 0);
  });
document
  .querySelector("#first-showcase #button-right-showcase-mostpop")
  .addEventListener("click", (event) => {
    document.querySelector("#first-showcase #items").scrollBy(300, 0);
  });

//Added click to buttons Second Showcase

document
  .querySelector(".showcase  #button-left-showcase-redprice")
  .addEventListener("click", (event) => {
    document.querySelector("#second-showcase #items").scrollBy(-300, 0);
  });
document
  .querySelector(".showcase   #button-right-showcase-redprice")
  .addEventListener("click", (event) => {
    document.querySelector("#second-showcase #items").scrollBy(300, 0);
  });
