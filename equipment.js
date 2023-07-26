// Create the main div element
const divElement = document.createElement("div");
divElement.className = "ABCD";

// Create the div element for the image
const imgDiv = document.createElement("div");
imgDiv.className = "img";

// Create the image element
const imgElement = document.createElement("img");
imgElement.id = "beaker_img";
imgElement.src = "imgs/beaker.jpeg";
imgElement.alt = "beaker";

// Append the image element to the image div
imgDiv.appendChild(imgElement);

// Create the paragraph element
const paragraphElement = document.createElement("p");
paragraphElement.id = "BEAKER";
paragraphElement.innerHTML = `
    Beakers are cylindrical utensils made up of borosilicate glass, with a flat bottom and the upper opening having a rim around it along with a spout.<br><br>
    The spout on their rim’s aids in the proper pouring of solutions and they do not have any covering on the top.<br><br>
    Most of the time watch glasses are used to cover their solutions.<br><br>
    They are of varying sizes and are used to hold, heat, or mix substances with a proper measure.<br><br>
    They come with graduated calibrations, they are not meant for precise calculations of solutions, and as such other apparatus come handy in this.<br><br>
`;

// Append the image div and paragraph to the main div
divElement.appendChild(imgDiv);
divElement.appendChild(paragraphElement);

// Append the main div to the document body
document.body.appendChild(divElement);
