import "./codemirror.css";
import "./main.css";

const CodeMirror = require("codemirror");
require("codemirror/mode/javascript/javascript");

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript"
});
