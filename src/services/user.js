/**
 * @module user
 * Handles everything related to the user.
*/

import { useAuthStore } from '../stores/authStore.js';
import { useConfigStore } from '../stores/configStore.js';

/**
 * Change the password of the current user.
 * @param {string} oldPass The old password for the user.
 * @param {string} newPass The new password for the user.
 * @returns {boolean} `true` if the password has been changed.
 */
async function changePassword(oldPass, newPass) {
    const configStore = useConfigStore();
    const authStore = useAuthStore();
    const url = `${configStore.coreUrl ?? configStore.DEFAULT_URL}/api/user/password`;

    const myHeaders = new Headers({
        "Content-Type": "application/json",
        "Authorization": authStore.token
    });

    const body = JSON.stringify({
        "password": oldPass,
        "newPassword": newPass
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: body,
        redirect: "follow"
    };

    return await fetch(url, requestOptions)
        .then(async response => response.ok);
}

export {
    changePassword,
};