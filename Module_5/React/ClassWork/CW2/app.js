document.body.style.backgroundColor = "#9e1b32";

const heading = React.createElement(
  "h1",
  {
    style: {
      backgroundColor: "#FBCEB1",
      color: "#9e1b32",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: "3.44rem",
      letterSpacing: ".37em",
    },
  },
  "Welcome to React using CDN!"
);

const paragraph = React.createElement(
  "p",
  {
    style: {
      textAlign: "center",
      fontSize: "2.6em",
      color: "#FF7F50",
      letterSpacing: ".052em",
    },
  },
  "This is my Day1 ClassWork simple task: I completed using React and ReactDOM from CDN."
);

const list = React.createElement(
  "ul",
  {
    style: {
      listStyleType: "none",
      textAlign: "center",
      color: "#FFA07A",
      fontSize: "3rem",
    },
  },
  React.createElement("li", null, "Bg-Color: Bills Red"),
  React.createElement("li", null, "HeadingBgColor: Apricot"),
  React.createElement("li", null, "ParagraphColor: Coquelicot")
);

const app = React.createElement("div", null, heading, paragraph, list);

ReactDOM.render(app, document.getElementById("root"));
