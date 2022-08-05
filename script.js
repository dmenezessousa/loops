//Get the HTML element with id="btn" and assign it to a variable named btn.
const btn = document.querySelector("#btn");

//Add an event listener to the btn variable.
btn.onclick = function () {
  //Create a prompt that asks the user to enter a number.
  const num = prompt("Enter a number of images to generate");
  //Create a FOR loop that will run the following code for the number of times the user entered.
    if (num < 1 || num == "") {
        alert("Please Click enter a number greater than 0");
      } else if (num > 5) {
        alert("Please enter a number less than 6");
      }else {
        for (let i = 0; i < num; i++) {
          //Variable named img is assigned to a new image element.
          let img = document.createElement("img");
          //Variable named src is assigned to the src attribute of the image element.
          img.src = "https://picsum.photos/200/300/?random";
          //append the image element to the DOM aka "the DIV tag".
          document.querySelector("div").appendChild(img);
          btnClicked = false;
        }
        
      }

};

const btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
  window.location.reload();
};
