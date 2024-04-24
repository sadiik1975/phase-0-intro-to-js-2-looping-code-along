/**
 * Logs a countdown from a given positive integer down to zero.
 * @param {number} num - The starting number for the countdown.
 */
function countDown(num) {
    if (num < 0 || !Number.isInteger(num)) {
        console.error("Please provide a positive integer or zero.");
        return;
    }
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

/**
 * Generates an array of thank you messages for each name provided, including "surprise" in the message.
 * @param {Array<string>} names - An array of names to whom thank you messages will be written.
 * @returns {Array<string>} An array of thank you messages.
 */
function writeCards(names) {
    const messages = [];
    for (const name of names) {
        messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
}

// Export the functions for use in other files or testing
module.exports = { countDown, writeCards };

// Example usage
console.log("Countdown Example:");
countDown(3);

console.log("Thank You Cards Example:");
const thankYouCards = writeCards(['Alice', 'Bob', 'Charlie']);
console.log(thankYouCards);

// Test setup (Ensure this is in a separate test file if using this setup for Mocha)
describe('My Test Suite', function() {
    this.timeout(10000);  // Sets timeout to 10000 ms
    
    it('should complete a lengthy operation', function(done) {
      // lengthy async operation
      setTimeout(done, 9000);
    });
});
