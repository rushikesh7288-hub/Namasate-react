{
  /* <div id="parent">
  <div id="child">
    <h1>I'm In an H1 Tag</h1>
    <h1>I'm In an H1 Tag</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },[  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm In an H1 Tag"),
    React.createElement("h2", {}, "I'm In an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I'm In an H1 Tag"),
    React.createElement("h4", {}, "I'm In an H2 Tag"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h5", {}, "I'm In an H1 Tag"),
    React.createElement("h6", {}, "I'm In an H2 Tag"),
  ])]

);
const roots = ReactDOM.createRoot(document.getElementById("root"));

const headings1 = React.createElement(
  "h1",
  { id: "headings" },
  "Hello World from React!!!!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headings1);
roots.render(parent);
