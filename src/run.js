const { cloneDeep } = require("lodash");

function run(g, coordinates, speedX = 1, speedY = 0, currentIndex = 0) {
    const currentCoordinates = coordinates[currentIndex];
    let nextCoordinates = coordinates[currentIndex + 1];

    // check if done
    if (!nextCoordinates) {
        if (g[currentCoordinates.y][currentCoordinates.x] === 3) {
            console.log("SUCCESS!!! Steps:", coordinates.length);
        } else {
            nextCoordinates = { x: currentCoordinates.x + speedX, y: currentCoordinates.y + speedY };
            console.log("NO MORE COORDINATES. Next coordinates by default:", nextCoordinates);
            coordinates.push(nextCoordinates);
        }
        print(g, coordinates);
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
        console.log(errorMessage);
        print(g, currentCoordinates);
        console.log(errorMessage, currentIndex, currentCoordinates);
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

    return Math.abs(newSpeed + speed) > 1;

}

function print(g, coordinates) {
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



module.exports = {
    run
};