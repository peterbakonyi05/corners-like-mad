const fetch = require("node-fetch");

async function makeRequest({ method, url, body, headers }) {
    let bodyRequest;
    if (body) {
        bodyRequest = JSON.stringify(body);
        headers ? headers["Content-Type"] = "application/json" : headers = {
            "Content-Type": "application/json"
        };
    } else {
        bodyRequest = body || null;
    }
    method = method || "GET";
    const response = await fetch(url, { method, body: bodyRequest, headers })
    const isJson = response.headers.get("content-type") === "application/json; charset=utf-8";
    const headersResponse = {};
    response.headers.forEach((value, name) => {
        headersResponse[name] = value;
    });

    const result = {
        body: await (isJson ? response.json() : response.text()),
        status: response.status,
        headers: headersResponse
    };

    if (response.status < 200 || response.status >= 300) {
        throw result;
    }

    return result;
}

module.exports = {
    makeRequest
};