/*function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }*/

  function openForm() {
    var form = document.getElementById("myForm");
    var openButton = document.getElementsByClassName("open-button")[0];

    // Display the form
    form.style.display = "block";

    // Hide the open button
    openButton.style.display = "none";
}

function closeForm() {
    var form = document.getElementById("myForm");
    var openButton = document.getElementsByClassName("open-button")[0];

    // Hide the form
    form.style.display = "none";

    // Display the open button
    openButton.style.display = "block";
}
