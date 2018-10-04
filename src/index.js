const { makeRequest } = require("./http.util");

async function main() {
    const response = await makeRequest({ url: "https://jsonplaceholder.typicode.com/todos/1" });
    // TODO: solution comes here
    console.log(response);
}

main();
