document.addEventListener("DOMContentLoaded", function() {
    const shapeSelect = document.getElementById("shape-select");
    const inputsContainer = document.getElementById("inputs");
    const calculateBtn = document.getElementById("calculate-btn");
    const outputContainer = document.getElementById("output");
  
    shapeSelect.addEventListener("change", function() {
      const shape = shapeSelect.value;
      inputsContainer.innerHTML = "";
  
      if (shape === "square") {
        inputsContainer.innerHTML = `
          <label for="side-length">Side Length:</label>
          <input type="number" id="side-length" required>
        `;
      } else if (shape === "rectangle") {
        inputsContainer.innerHTML = `
          <label for="length">Length:</label>
          <input type="number" id="length" required>
          <label for="width">Width:</label>
          <input type="number" id="width" required>
        `;
      } else if (shape === "circle") {
        inputsContainer.innerHTML = `
          <label for="radius">Radius:</label>
          <input type="number" id="radius" required>
        `;
      }
    });
  
    calculateBtn.addEventListener("click", function() {
      const shape = shapeSelect.value;
      let result;
  
      if (shape === "square") {
        const sideLength = parseFloat(document.getElementById("side-length").value);
        result = sideLength * sideLength;
      } else if (shape === "rectangle") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        result = length * width;
      } else if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        result = Math.PI * radius * radius;
      }
  
      if (isNaN(result)) {
        outputContainer.innerHTML = "Please enter valid dimensions.";
      } else {
        outputContainer.innerHTML = `Area: ${result.toFixed(2)}`;
      }
    });
  });