let output = document.getElementById("output");

function updateOutput(val) {
   output.value += val;
}

function clearOutput() {
   output.value = "";
}

function calculate() {
   try {
      output.value = eval(output.value);
   } catch (e) {
      output.value = "Error";
   }
}