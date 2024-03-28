let coreUrl = "";
const DEFAULT_URL = "http://localhost:5000";

function setConfigItems()
{
    coreUrl = localStorage.getItem("coreUrl") ?? DEFAULT_URL;
}

function initConfig()
{
    if (localStorage.getItem("coreUrl") === null)
        localStorage.setItem("coreUrl", DEFAULT_URL);
}

export {
    setConfigItems,
    initConfig,
    coreUrl,
    DEFAULT_URL
};