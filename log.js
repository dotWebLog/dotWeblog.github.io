document.addEventListener("DOMContentLoaded", function() {
    // Log the visitor when the page loads
    logVisitor();
});

function logVisitor() {
    // Get the current date and time
    var timestamp = new Date().toLocaleString();

    // Create a log entry
    var logEntry = timestamp + " - Visitor logged\n";

    // Send a POST request to RequestBin with the log entry
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://eoi63qdzajcng9m.m.pipedream.net", true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(logEntry);
}
