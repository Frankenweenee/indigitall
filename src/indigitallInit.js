function loadIndigitallScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "/node_modules/indigitall-web-sdk/sdk.min.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Error loading script"));
        document.body.appendChild(script);
    });
}
export default loadIndigitallScript;
