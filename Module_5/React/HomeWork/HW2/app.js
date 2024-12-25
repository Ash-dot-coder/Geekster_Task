document.body.style.backgroundColor = "#E2725B";

const heading = React.createElement(
  "h1",
  {
    style: {
      backgroundColor: "#1d1d1d",
      color: "#E2725B",
      textAlign: "center",
      margin: "20px 0",
      fontSize: "4rem",
      letterSpacing: ".3em",
      textTransform: "uppercase",
    },
  },
  "Welcome to My React Page!"
);

const paragraph = React.createElement(
  "p",
  { style: { textAlign: "center", color: "#722F37", fontSize: "2.53em" } },
  "This is my Day2 HomeWork Task - simple web page created using ReactJS and CDN links."
);

const list = React.createElement(
  "ul",
  {
    style: {
      listStyleType: "circle",
      textAlign: "center",
      padding: 0,
      fontSize: "3rem",
      color: "#BC3F4A",
    },
  },
  React.createElement("li", null, "bgColor: 'Terra Cotta'"),
  React.createElement("li", null, "headingBgColor: 'Shades Of Gray'"),
  React.createElement("li", null, "Para-Color: 'Wine'"),
  React.createElement("li", null, "List-ItemColor: 'Sanguine'")
);

const app = React.createElement(
  "div",
  { style: { fontFamily: "Arial, sans-serif" } },
  heading,
  paragraph,
  list
);

ReactDOM.render(app, document.getElementById("root"));
