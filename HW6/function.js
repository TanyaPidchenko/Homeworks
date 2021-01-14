function drawTriangle(symbol, height) {
    for (i = symbol; i.length <= height; i += symbol) {
        if (height < 3) {
            var height = 3;
        }
        console.log(i);
    }
}

drawTriangle('%', 5);


function toCapitalCase(line) {
    var x = "";
    for (i = 0; i < line.length; i++) {
        if (line[i - 1] === " " || i === 0) {
            x += line[i].toUpperCase();
        } else {
            x += line[i];
        }
    }
    return x;
}

toCapitalCase("lorem ipsum stan");
