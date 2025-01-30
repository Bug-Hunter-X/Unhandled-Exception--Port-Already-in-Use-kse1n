# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js where an unhandled exception occurs when attempting to start a server on a port that's already in use.  The example shows how to improve error handling to provide more informative messages to the user.

## Problem

Starting a Node.js HTTP server with `server.listen()` will throw an error if the specified port is already in use.  The default error message isn't user-friendly, making it hard to quickly diagnose the issue.

## Solution

Implement robust error handling to catch the `EADDRINUSE` error specifically and provide a more descriptive message.  This allows for a better user experience by providing a clear indication of what went wrong and how to resolve it.