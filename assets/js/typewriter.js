var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: false,
  cursor: "",
});

typewriter
  .typeString("<h1>Hello!</h1>")
  .pauseFor(2500)
  .deleteAll()
  .typeString("<h1>I'm Tobias</h1>")
  .pauseFor(2500)
  .deleteAll()
  .typeString("<h1>Hello!</h1>")
  .pauseFor(2500)
  .start();
