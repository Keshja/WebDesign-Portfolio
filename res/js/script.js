var btnContainer = document.getElementById("menu");

// Get all buttons with class="l" inside the container
var btns = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 


void function(script) {
    const { searchParams } = new URL(script.src);
    fetch(searchParams.get('src')).then(r => r.text()).then(content => {
        script.outerHTML = content;
    });
}(document.currentScript);