const heading1 = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hello World by React!"
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);

console.log(heading1); // return object


/* 
<div id="parent">
    <div id="child1">
        <h1>I'm in c1h1 tag</h1>
        <h2>I'm in c1h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm in c2h1 tag</h1>
        <h2>I'm in c2h2 tag</h2>
    </div>
</div> 
*/


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm in c1h1 tag"),
    React.createElement("h2", {}, "I'm in c1h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm in c2h1 tag"),
    React.createElement("h2", {}, "I'm in c2h2 tag"),
  ]),
]);

root1.render(parent);

console.log(parent);
