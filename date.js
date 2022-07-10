module.exports = getDate;

function getDate(){

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let today = new Date();
    
    return today.toLocaleDateString("en-US", options);
}