document.addEventListener("DOMContentLoaded", function() {
    // Get the User-Agent string
    var userAgent = navigator.userAgent;

    // Get the current page URL
    var pageUrl = window.location.href;

    // Fetch the IP address from a server-side endpoint
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // Log the visitor with IP, User-Agent, and URL
            logVisitor(data.ip, userAgent, pageUrl);
        })
        .catch(error => {
            console.error('Error fetching the IP:', error);
            // Log only with User-Agent and URL in case of an error
            logVisitor("IP unavailable", userAgent, pageUrl);
        });
});

function logVisitor(ip, userAgent, url) {
    // Get the current date and time
    var timestamp = new Date().toLocaleString();

    // Create a log entry
    var logEntry = `${timestamp} - Visitor logged, IP: ${ip}, Browser: ${userAgent}, URL: ${url}`;

    // Send a POST request to RequestBin with the log entry
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://eofta18tzugzjn1.m.pipedream.net", true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(logEntry);
}
