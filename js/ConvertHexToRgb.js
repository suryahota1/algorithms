function convertHexToRgb ( hex ) {
    hex = hex.slice(1);
    console.log(hex);
    if ( hex.length !== 3 && hex.length !== 4 && hex.length !== 6 && hex.length !== 8 ) throw new Error("Invalid hex code");
    if ( hex.length === 3 ) hex = [...hex].map(h => h + h).join("") + "ff";
    else if ( hex.length === 4 ) hex = [...hex].map(h => h + h).join("");
    else if ( hex.length === 6 ) hex = hex + "ff";

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = (parseInt(hex.slice(6), 16) / 255).toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

console.log(convertHexToRgb("#f3f"));
