function applyStyles(styles, text) {

    let styleString = "";
    styles.forEach(style => {
        styleString += `${style.name}: ${style.value}; `;
    });

    let html = `<p style="${styleString}">${text}</p>`;

    document.write(html);
}

const stylesArray = [
    { name: "color", value: "red" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" }
];
const text = "Hello, world!";
applyStyles(stylesArray, text);