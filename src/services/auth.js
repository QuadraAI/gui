/**
 * @module auth
 * Handles everything related to authentication and connection to the backend
*/

import { useAuthStore } from '../stores/authStore.js';
import { useConfigStore } from '../stores/configStore.js';
import { useErrorStore } from '../stores/errorStore.js';

/**
 * Try to authenticate the user and retrieve the bearer token.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {bool} `true` if the bearer has been retrieved, else `false`.
 */
async function tryLogin(username, password) {
    const configStore = useConfigStore();
    // const errorStore = useErrorStore();
    const url = `${configStore.coreUrl ?? configStore.DEFAULT_URL}/api/auth/login`;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
    });

    const body = JSON.stringify({
        "username": username,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: body,
        redirect: "follow"
    };

    return await fetch(url, requestOptions)
        .then(async response => {
            if (response.ok === false) {
                const errorMessage = await response.text();
                throw new Error(`Failed to log in: ${errorMessage}`);
            }
            return response.json();
        })
        .then(data => {
            const authStore = useAuthStore();
            authStore.setToken(`Bearer ${data.token}`);
            return true;
        })
        .catch((error) => {
            console.error(error);
            // errorStore.setError("Invalid username or password");
            // console.error(errorStore.message);
            return false;
        });
}

/**
 * Try to ping Core at http://0.0.0.0:5000
 * @returns {boolean}
 */
async function pingLocalServer() {
    const configStore = useConfigStore();

    return await fetch(configStore.DEFAULT_URL, { method: "GET" })
        .then(response => response.ok)
}

/**
 * Try to ping Core at the url specified
 * @param {string} url - The url where Core is located
 * @returns {boolean}
 */
async function tryPingServer(url) {
    return await fetch(url, { method: "GET" })
        .then(response => response.ok)
}

export {
    tryLogin,
    pingLocalServer,
    tryPingServer
};
