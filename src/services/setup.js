/**
 * @module setup
 * Module containing methods for the setup of Quadra gui.
*/

import { useConfigStore } from '../stores/configStore.js';

/**
 * Try to ping Core at http://0.0.0.0:5000 or http://0.0.0.0:{port}
 * @param {string} [port] - Optional custom port to override the default.
 * @returns {Promise<boolean>} Resolves to `true` if the server responds within 1 second, otherwise `false`.
 */
async function pingLocalServer(port) {
    const configStore = useConfigStore();
    const timeout = 1000;

    const url = port ? configStore.DEFAULT_URL.replace("5000", port) : configStore.DEFAULT_URL;

    const timeoutPromise = new Promise(resolve => {
        setTimeout(() => resolve(false), timeout);
    });

    const fetchPromise = fetch(url, { method: "GET" })
        .then(response => response.ok)
        .catch(() => false);

    return Promise.race([fetchPromise, timeoutPromise]);
}

/**
 * Try to ping Core at the url specified
 * @param {string} url - The url where Core is located
 * @returns {Promise<boolean>} Resolves to `true` if the server responds within 1 second, otherwise `false`.
 */
async function tryPingServer(url) {
    const timeout = 1000;

    const timeoutPromise = new Promise(resolve => {
        setTimeout(() => resolve(false), timeout);
    });

    const fetchPromise = fetch(url, { method: "GET" })
        .then(response => response.ok)
        .catch(() => false);


    return Promise.race([fetchPromise, timeoutPromise]);
}

/**
 * Ask the backend if there is only default user
 * @returns {Promise<boolean>} - true if there is only default user, false otherwise.
 */
async function hasOnlyDefaultUser() {
    const configStore = useConfigStore();
    const url = `${configStore.coreUrl ?? configStore.DEFAULT_URL}/api/user/has-only-default`;
    return await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(result => {
            return result.trim().toLowerCase() === 'true';
        })
        .catch(error => {
            console.error('Fetch error:', error);
            return false;
        });
}

/**
 * Set firstLaunch value to `false` in configStore
 * @returns {void}
 */
function completeSetup()
{
    const configStore = useConfigStore();
    configStore.firstLaunchConfigDone();
}

export {
    pingLocalServer,
    tryPingServer,
    hasOnlyDefaultUser,
    completeSetup,
}