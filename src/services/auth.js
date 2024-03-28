import { coreUrl, DEFAULT_URL } from "../services/config.js";

async function tryLogin(username, password) {
    const url = `${coreUrl ?? DEFAULT_URL}/api/v1/auth/login`;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": username,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const response = await fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to log in: ${errorMessage}`);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("quadraBearer", `Bearer ${data.token}`);
            return true;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
    return response;
}

export {
    tryLogin
};