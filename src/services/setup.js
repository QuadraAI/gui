/**
 * @module setup
 * Module containing methods for the setup of Quadra gui.
*/

import { useConfigStore } from '../stores/configStore.js';

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

/**
 * Ask the backend if there is only default user
 * @returns {bool} - true if there is only default user either false.
 */
async function hasOnlyDefaultUser() {
    const configStore = useConfigStore();
    const url = `${configStore.coreUrl ?? configStore.DEFAULT_URL}/api/user/has-only-default`;;
    return await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(result => {
            if (typeof result === 'boolean') {
                return result.trim().toLowerCase() === 'true';
            } else {
                console.error('Unexpected API response:', result);
                return false;
            }
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