//For connections page
var buttons = document.getElementsByClassName(
  "search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary"
);

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].ariaLabel.substring(0, 7) == "Connect") {
    console.log(buttons[i].ariaLabel);
    buttons[i].click();
    console.log("Clicked");
    var doneButtons = document.getElementsByClassName(
      "ml1 artdeco-button artdeco-button--3 artdeco-button--primary ember-view"
    );
    doneButtons[0].click();
  }
}

//For Suggestions Page
var buttons = document.getElementsByClassName(
  "full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view"
);

for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].ariaLabel.substring(0, 6) == "Invite") {
    console.log(buttons[i].ariaLabel);
    buttons[i].click();
    console.log("Clicked");
  }
}
