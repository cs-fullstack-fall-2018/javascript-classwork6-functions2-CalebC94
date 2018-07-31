function main() {
    var favoriteNumber = prompt("What is your favorite number?");
    alert(favoriteNumber);
    aboveOrBelow(favoriteNumber);
}

function aboveOrBelow(favoriteNumber) {
    if (favoriteNumber < 100) {
        alert(favoriteNumber + " is below 100");
    }
    else if (favoriteNumber > 100) {
        alert(favoriteNumber + " is above 100");
    }
    else {
        alert("It's 100");
    }
}
    main()