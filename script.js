// 1. SELECT THE ELEMENTS
const calculateBtn = document.getElementById("calculateButton");
const outputDiv = document.getElementById("orderoutput");
const img = document.getElementById("drinkImage"); 

calculateBtn.addEventListener("click", function() {
    // 2. GET VALUES
    const size = document.getElementById("sizeDropdown").value;
    const flavour = document.getElementById("flavourDropdown").value;
    
    // Check if checkboxes are checked
    const hasSprinkles = document.getElementById("sprinkles").checked;
    const hasWhippedCream = document.getElementById("whippedCream").checked;

    // 3. MATH LOGIC
    let price = 1.50;
    let extrasList = ""; // To track what extras were added

    if (size === "Large") { 
        price = 2.00; 
    }

    if (hasSprinkles) {
        price += 0.50;
        extrasList += " + Sprinkles ($0.50)";
    }

    if (hasWhippedCream) {
        price += 0.75;
        extrasList += " + Whipped Cream ($0.75)";
    }

    // 4. IMAGE LOGIC
    if (flavour === "Vanilla") {
        img.src = "vanilla.jpg"; 
    } else if (flavour === "Caramel") {
        img.src = "caramel.jpg";
    } else if (flavour === "Chocolate") {          
        img.src = "chocolate.jpg";
    }
    img.style.display = "block";

    // 5. OUTPUT
    const output = `Size: ${size}
    Flavour: ${flavour}
    Extras: ${extrasList || "None"}
    Total Price: $${price.toFixed(2)}`;

    outputDiv.innerText = output;
});
