const equipmentData = [
    {
        title: "BEAKER",
        description: [
            "Cylindrical utensils made up of borosilicate glass, with a flat bottom and the upper opening having a rim around it along with a spout.",
            "The spout on their rim’s aids in the proper pouring of solutions and they do not have any covering on the top.",
            "Most of the time watch glasses are used to cover their solutions.",
            "They are of varying sizes and are used to hold, heat, or mix substances with a proper measure.",
            "They come with graduated calibrations, they are not meant for precise calculations of solutions, and as such other apparatus come handy in this."
        ],
        imgSrc: "imgs/beaker.jpeg"
    },
    {
        title: "ERLENMEYER FLASK",
        description: [
            "An Erlenmeyer flask is also known as a conical flask or a titration flask.",
            "Designed for easy stirring, can be swirled by hand without spilling",
            "Not used for measuring as they are only accurate to 5%",
            "Often used for titrations",
            "Slanted sides and narrow neck of this flask allow the contents of the flask to be mixed by swirling, without risk of spillage, making them suitable for titrations by placing it under the buret and adding solvent and the indicator in the Erlenmeyer flask.",
            "Flat bottom can be placed on a heating mechanism or apparatus."
        ],
        imgSrc: "imgs/ERLENMEYER_FLASK.jpeg"
    },
    {
        title: "TEST TUBE",
        description: [
            "Used to hold and mix small samples",
            "Stirred by tapping the bottom with two fingers",
            "Fit into both a centrifuge and test tube rack",
            "Often used in qualitative analysis",
            "Usually made of glass, for its relative resistance to heat."
        ],
        imgSrc: "imgs/TEST_TUBE.jpeg"
    },
    {
        title: "VOLUMETRIC FLASK",
        description: ["Measures one specific volume, marked by the etched line on the neck", "Used for precise dilutions and preparation of standard solutions.", "Easy to mix solutions, as they have glass stoppers and are designed to be inverted multiple times to mix.", "Size of glass stopper needed is listed on the bottle. Be sure to hold glass stopper while inverting.", "Careful not to fill above the etched mark, see reading the meniscus"], imgSrc: "imgs/VOLUMETRIC_FLASK.jpg"
    },
    {
        title: "PIPETTE",
        description: ["Pipette involves drawing up a specific volume of liquid into the pipette and then transferring it to another container either by using the pipette’s release mechanism or by blowing it out.", "Used to measure and transfer small volumes of liquids accurately.", "A cylindrical glass or plastic tube that has a narrow end for transferring liquids, and a bulb or other mechanism for drawing up the liquid.", "In making serial dilutions, measuring / dispensing samples and diluted solutions."],imgSrc: "imgs/PIPET.jpeg"
    },
    {
        title: "BURET",
        description: ["Used for accurately titrations or dispensing very small quantities of liquids", "Contains a stopcock to control the releaseof the liquid", "White plastic stop cock is open when parallel with the instrument and closed when perpendicular", "When not in use should be stored upside down and open"], imgSrc: "imgs/buret.jpeg"
    },
    {
        title: "RING STAND",
        description: ["Ring stands are used to hold glassware in place during an experimental procedure.", "You can attach ring clamps, versatile clamps, or 3-prong clamps (the latter require clamp holders).", "The ring stand can hold a wire gauze or ceramic center that supports containers over a Bunsen burner or other heat sources.", "Allows for the flexible arrangement of different equipment, such as burettes, flasks, beakers, and test tubes, at various heights and positions."], imgSrc: "imgs/Ringstand.jpg"
    },
    {
        title: "BURETTE CLAMP",
        description: ["Used for firmly holding test-tubes, burettes and other glassware in place when performing experiments such as titration.", "For precise positioning of the buret, ensuring accurate and controlled dispensing of liquids.", "The clamp holds the buret in a vertical orientation, which is essential for accurate measurement and uniform flow of the liquid.", "Particularly essential in titration experiments, where precise measurement and controlled liquid flow are critical.", "The use of buret clamps helps ensure that experiments can be repeated accurately, maintaining consistency in results."], imgSrc: "imgs/Burette_Clamp.jpg"
    },
    {
        title: "UTILITY CLAMP",
        description: ["Used to hold other glassware onto a ring stand", "Holding objects in place during gluing, soldering, or welding tasks.", "Attaching backgrounds or accessories in photography and video shooting.", "Keeping fabrics taut while sewing or quilting.", "Assembling small parts or components during DIY projects."], imgSrc: "imgs/UTILITY_CLAMP.jpeg"
    },
    {
        title: "FUNNEL",
        description: ["Used to channel liquids or fine-grained chemicals (powders) into labware with a narrow neck or opening.", "Made of plastic such as polypropylene. Reusable products can be sterilized in an autoclave.", "Used to aide in the transfer of liquids"], imgSrc: "imgs/FUNNEL.jpeg"
    },
    {
        title: "WATCH GLASS",
        description: ["A circular concave piece of glass used in chemistry as a surface to evaporate a liquid, to hold solids while being weighed, for heating a small amount of substance, and as a cover for a beaker.", "Used as a lid for beakers.", "Used for observing precipitation and crystallization patterns."], imgSrc: "imgs/WATCH_GLASS.jpeg"
    },
    {
        title: "Bunsen Burner",
        description: ["The hottest part of the flame is at the top of the inner blue cone", "Used to heat substances", "To combust substances", "To sterilize objects on high heat."], imgSrc: "imgs/Bunsen_Burner.webp"
    }
];

const container = document.querySelector(".all-contents");

equipmentData.forEach((content, ind) => {
    const div = document.createElement("div");
    if (ind % 2 === 0) {
        div.className = "content content-left";
    } else {
        div.className = "content content-right";
    }

    const ul = document.createElement("ul");
    const h3 = document.createElement("h3");
    h3.textContent = content.title;
    ul.appendChild(h3);

    content.description.forEach(desc => {
        const li = document.createElement("li");
        li.textContent = desc;
        ul.appendChild(li);
    });

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    const img = document.createElement("img");
    // img.id = content.title.replace(/\s+/g, "_");
    img.src = content.imgSrc;
    img.alt = content.title;
    imgDiv.appendChild(img);

    div.appendChild(ul);
    div.appendChild(imgDiv);

    container.appendChild(div);
});
