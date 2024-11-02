const GREETING = [
    "Whalecome!",
    "All hands on the deck!",
    "Charting the course ahead!!"];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
