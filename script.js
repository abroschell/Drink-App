// SELECT THE ELEMENTS
const calculateBtn = document.getElementById("calculateButton");
const outputDiv = document.getElementById("orderoutput");
const img = document.getElementById("drinkImage"); 

calculateBtn.addEventListener("click", calculateTotal);

function calculateTotal() {
    const size = getSize();
    const flavour = getFlavour();
    const extras = getExtras();
    
    if (!size || !flavour) {
        alert("Please select both size and flavor.");
        return;
    }

    const price = calculatePrice(size, extras);
    updateImage(flavour);
    displayOutput(size, flavour, extras, price);
}

// Get selected size
function getSize() {
    return document.getElementById("sizeDropdown").value || null;
}

// Get selected flavour
function getFlavour() {
    return document.getElementById("flavourDropdown").value || null;
}

// Get selected extras
function getExtras() {
    const hasSprinkles = document.getElementById("sprinkles").checked;
    const hasWhippedCream = document.getElementById("whippedCream").checked;
    
    const extras = [];
    if (hasSprinkles) extras.push("Sprinkles ($0.50)");
    if (hasWhippedCream) extras.push("Whipped Cream ($0.75)");
    
    return extras;
}

// Calculate the total price
function calculatePrice(size, extras) {
    let basePrice = size === "Large" ? 2.00 : 1.50;
    if (extras.includes("Sprinkles ($0.50)")) basePrice += 0.50;
    if (extras.includes("Whipped Cream ($0.75)")) basePrice += 0.75;
    return basePrice;
}

// Update the image based on the selected flavour
function updateImage(flavour) {
    const flavourImages = {
        "Vanilla": "vanilla.jpg",
        "Caramel": "caramel.jpg",
        "Chocolate": "chocolate.jpg"
    };
    
    img.src = flavourImages[flavour];
    img.style.display = "block";
}

// Display the output in the output box
function displayOutput(size, flavour, extras, price) {
    const extrasList = extras.length ? extras.join(", ") : "None";
    const output = `Size: ${size}\nFlavour: ${flavour}\nExtras: ${extrasList}\nTotal Price: $${price.toFixed(2)}`;
    outputDiv.innerText = output;
}
