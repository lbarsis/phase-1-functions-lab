// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(distance) {
    return Math.abs((42 - distance) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = Math.abs((start - destination) * 264);

    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            return (distanceInFeet - 400) * .02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            return 25
    } else {
        return 'cannot travel that far'
    }
}

