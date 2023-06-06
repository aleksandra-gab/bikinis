function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (name.length > 0) {
    alert(
      `Thank you, ${name}. We'll send a confirmation email to ${email}. Have fun at the beach! 👙`
    );
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
