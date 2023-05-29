export const brandColorHandler = (brand) => {
  if (brand.toLowerCase() == "motul") {
    return "#CF1A0E";
  } else if (brand.toLowerCase() == "valvoline") {
    return "#3C3984";
  } else if (brand.toLowerCase() == "petronas") {
    return "#0BA19B";
  } else if (brand.toLowerCase() == "fram") {
    return "orange";
  }
};

export const addCommasForThousands = (number) => {
  let numberString = String(number);
  let parts = numberString.split(".");
  let integerPart = parts[0];
  let decimalPart = parts[1] || "";
  let formattedIntegerPart = "";
  for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
    if (j !== 0 && j % 3 === 0) {
      formattedIntegerPart = "," + formattedIntegerPart;
    }
    formattedIntegerPart = integerPart[i] + formattedIntegerPart;
  }
  let formattedNumber = formattedIntegerPart;
  if (decimalPart !== "") {
    formattedNumber += "." + decimalPart;
  }

  return formattedNumber;
};
