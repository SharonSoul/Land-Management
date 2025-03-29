const form = document.getElementById("form");
const name = document.getElementById("name");
const locationId = document.getElementById("location_id");
const zoning = document.getElementById("zoning");
const landType = document.getElementById("land_type");
const landPrice = document.getElementById("land_price");
const landSize = document.getElementById("land_size");
const sellerId = document.getElementById("seller_id");
const title = document.querySelector(".title");
const message = document.querySelector(".message");
const cancelBtn = document.getElementById("cancelBtn");

// Event listeners for real-time input validation
name.addEventListener("input", validateName);
locationId.addEventListener("input", validateLocation);
zoning.addEventListener("input", validateZoning);
landType.addEventListener("input", validateLandType);
landPrice.addEventListener("input", validateLandPrice);
landSize.addEventListener("input", validateLandSize);
sellerId.addEventListener("input", validateSeller);

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateLocation() &&
    validateZoning() &&
    validateLandType() &&
    validateLandPrice() &&
    validateLandSize() &&
    validateSeller()
  ) {
    submittedForm();
  }
});

// Cancel button event listener
cancelBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to cancel? All changes will be lost.")) {
    form.reset();
  }
});

// Validation functions
function validateName() {
  const nameValue = name.value.trim();
  if (nameValue === "") {
    setErrorFor(name, "Property name cannot be blank");
    return false;
  } else {
    setSuccessFor(name);
    return true;
  }
}

function validateLocation() {
  const locationValue = locationId.value;
  if (locationValue === "") {
    setErrorFor(locationId, "Please select a location");
    return false;
  } else {
    setSuccessFor(locationId);
    return true;
  }
}

function validateZoning() {
  const zoningValue = zoning.value;
  if (zoningValue === "") {
    setErrorFor(zoning, "Please select a zoning type");
    return false;
  } else {
    setSuccessFor(zoning);
    return true;
  }
}

function validateLandType() {
  const landTypeValue = landType.value;
  if (landTypeValue === "") {
    setErrorFor(landType, "Please select a land type");
    return false;
  } else {
    setSuccessFor(landType);
    return true;
  }
}

function validateLandPrice() {
  const landPriceValue = landPrice.value.trim();
  if (landPriceValue === "") {
    setErrorFor(landPrice, "Land price cannot be blank");
    return false;
  } else if (parseFloat(landPriceValue) <= 0) {
    setErrorFor(landPrice, "Land price must be greater than 0");
    return false;
  } else {
    setSuccessFor(landPrice);
    return true;
  }
}

function validateLandSize() {
  const landSizeValue = landSize.value.trim();
  if (landSizeValue === "") {
    setErrorFor(landSize, "Land size cannot be blank");
    return false;
  } else if (parseFloat(landSizeValue) <= 0) {
    setErrorFor(landSize, "Land size must be greater than 0");
    return false;
  } else {
    setSuccessFor(landSize);
    return true;
  }
}

function validateSeller() {
  const sellerValue = sellerId.value;
  if (sellerValue === "") {
    setErrorFor(sellerId, "Please select a seller");
    return false;
  } else {
    setSuccessFor(sellerId);
    return true;
  }
}

// Helper functions
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");

  small.innerText = message;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
  inputControl.style.paddingBottom = "20px";
  inputControl.style.marginBottom = "14px";
}

function setSuccessFor(input) {
  const inputControl = input.parentElement;

  inputControl.classList.remove("error");
  inputControl.classList.add("success");
  inputControl.style.paddingBottom = "0";
  inputControl.style.marginBottom = "20px";
}

// Showing the 'submitted' message
function submittedForm() {
  title.classList.add("hidden");
  form.classList.add("hidden");
  message.classList.remove("hidden");
  setTimeout(() => location.reload(true), 2500);
}

// Update the label for purchase price and annual rent price based on land type
landType.addEventListener("change", function() {
  const purchasePriceGroup = document.getElementById("purchase_price").parentElement;
  const annualRentGroup = document.getElementById("annual_rent_price").parentElement;
  
  if (this.value === "purchase") {
    purchasePriceGroup.style.display = "block";
    annualRentGroup.style.display = "none";
  } else if (this.value === "rent") {
    purchasePriceGroup.style.display = "none";
    annualRentGroup.style.display = "block";
  } else {
    purchasePriceGroup.style.display = "block";
    annualRentGroup.style.display = "block";
  }
});