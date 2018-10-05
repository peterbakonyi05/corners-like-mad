const { cloneDeep } = require("lodash");
const { writeFileSync } = require("fs");

function run(g, coordinates, speedX = 1, speedY = 0, currentIndex = 0) {
    const currentCoordinates = coordinates[currentIndex];
    let nextCoordinates = coordinates[currentIndex + 1];

    if (currentIndex === 0 && g[currentCoordinates.y][currentCoordinates.x] !== 2) {
        // TODO: find and suggest initial coordinate
        throw new Error("Initial coordinate is wrong");
    }

    // check if done
    if (!nextCoordinates) {
        let message = "";
        if (g[currentCoordinates.y][currentCoordinates.x] === 3) {
            message = `SUCCESS!!! Steps:${coordinates.length}`;
        } else {
            nextCoordinates = { x: currentCoordinates.x + speedX, y: currentCoordinates.y + speedY };
            message = `NO MORE COORDINATES. Next coordinates by default:${JSON.stringify(nextCoordinates)}`;
            coordinates.push(nextCoordinates);
        }
        printToHtml(g, coordinates, message);
        return;
    }

    diffX = nextCoordinates.x - currentCoordinates.x;
    diffY = nextCoordinates.y - currentCoordinates.y

    let errorMessage = "";
    if (isDiffWrong(diffX, speedX)) {
        errorMessage = "X IS WRONG";
    } else if (isDiffWrong(diffY, speedY)) {
        errorMessage = "Y IS WRONG";
    } else if (g[nextCoordinates.y][nextCoordinates.x] === 0) {
        errorMessage = "CRASHED";
    }

    if (errorMessage) {
        printToHtml(g, coordinates, `Error: ${errorMessage}. Current index: ${currentIndex + 1}`);
        return;
    }

    run(g, coordinates, diffX, diffY, currentIndex + 1);
}

function isDiffWrong(newSpeed, speed) {
    if (speed >= 0 && newSpeed >= 0) {
        return !(newSpeed == speed || newSpeed === speed + 1 || newSpeed === speed - 1);
    }
    if (speed < 0 && newSpeed < 0) {
        return isDiffWrong(Math.abs(newSpeed), Math.abs(speed))
    }

    return !((newSpeed === -1 && speed === 0) || (newSpeed === 0 && speed === -1));
}


function printToConsole(g, coordinates) {
    const graph = cloneDeep(g);
    for (let i = 0; i < coordinates.length; i++) {
        const c = coordinates[i];
        graph[c.y][c.x] = i === (coordinates.length - 1) ? 9 : 8;
    }
    for (let i = 0; i < graph.length; i++) {
        console.log(JSON.stringify(graph[i]));
    }
    console.log("==========================");
}

function printToHtml(g, coordinates, message) {
    const graph = cloneDeep(g);
    for (let i = 0; i < coordinates.length; i++) {
        const c = coordinates[i];
        graph[c.y][c.x] = i === (coordinates.length - 1) ? "N" : "X";
    }
    let a = `<style> 
        span { display: inline-block; width: 15px; height: 15px; }
        .c-0 { opacity: 0.3; } 
        .c-1 { opacity: 0.5; } 
        .c-2 { color: green } 
        .c-3 { color: green; } 
        .c-X { color: red; }
        .c-N { color: blue }
    </style>
    <h4>${message}</h4>`

    for (let i = 0; i < graph.length; i++) {
        a += "<div>";
        for (let j = 0; j < graph[i].length; j++) {
            const v = graph[i][j];
            a += `<span class="c-${v}">${v}</span>`;
        }
        a += "</div>"
    }
    writeFileSync("./solution.html", a, { encoding: "UTF-8" });

}



module.exports = {
    run
};