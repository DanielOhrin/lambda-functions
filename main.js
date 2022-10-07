const broadCast = (func) => {
    console.log(func);
}

const announceRain = () => {
    return `Grab an umbrella. It's going to rain today.`;
}

const announceClear = () => { 
    return `Grab your shades and sunscreen. It's going to be sunny and hot today.`;
}

const weatherStation = (dailyHumidity) => {
    if (dailyHumidity > 95) {
        return announceRain();
    } else {
        return announceClear();
    }
}

broadCast(weatherStation(99));
broadCast(weatherStation(13));