

function toggle(event, contentClass) {
    // Get the node of specific content class name
    var ele = document.getElementsByClassName(contentClass)[0];
    // Toggle on/off depend on classlist is active or not
    if (ele.classList.contains("active")) ele.classList.remove("active");
    else ele.classList.add("active");
    // Update symbol to represent the state
    event.target.innerHTML = event.target.innerHTML == "+" ? "-" : "+";
  }