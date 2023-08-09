const menData = [
    {
        name: "Naveed",
        imageSrc: "rick.jpg",
        desc: "I am a passionate and dedicated individual with a strong drive for UI designing",
        link: "../Resume_naveed/Res.html"
    },
    {
        name: "HK",
        imageSrc: "rick.jpg",
        desc: "I am a passionate and dedicated individual with a strong drive for UI designing...",
        link: "#"
    },
    {
        name: "Rahul",
        imageSrc: "rick.jpg",
        desc: "I am a passionate and dedicated individual with a strong drive for UI designing...",
        link: "../Resume_APN/index.html"
    },
    {
        name: "APN",
        imageSrc: "../Resume_APN/img/prof.jpg",
        desc: "I am a person interested in cryptography. I am very keen to learn anything new and challenging.",
        link: "../Resume_APN/resume.html"
    }
];

const menContainer = document.getElementById("create");

menData.forEach(data => {
    const menElement = document.createElement("div");
    menElement.className = "men";

    const profileImg = document.createElement("div");
    profileImg.className = "profileimg";
    const img = document.createElement("img");
    img.src = data.imageSrc;
    profileImg.appendChild(img);

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = data.name;

    const desc = document.createElement("div");
    desc.className = "Desc";
    desc.textContent = data.desc;

    const link = document.createElement("a");
    link.href = data.link;
    link.textContent = "-Know more-";

    menElement.appendChild(profileImg);
    menElement.appendChild(text);
    menElement.appendChild(desc);
    menElement.appendChild(link);

    menContainer.appendChild(menElement);
});