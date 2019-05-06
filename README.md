# Signature-Function
Created a function with a signature retry(fn, retryDelay, maxAttempts) 

• retry should call fn; if fn() throws an error, wait for the retry delay to retry calling fn.
• if fn() succeeds, resolve the promise with the result of the fuction call
• in fn() has been attempted maxAttempts with an error each time, reject the promise saying "Max attempts reached"

