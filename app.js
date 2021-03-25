const toMerchSite = () => {
    window.location.href = "https://driveawaymerch.bigcartel.com"
}

const toInstagram = () => {
    window.location.href = "https://www.instagram.com/driveaway/?hl=en"
}

const toTikTok = () => {
    window.location.href = "https://www.tiktok.com/@driveaway"
}

const toAppleMusic = () => {
    window.location.href = "https://music.apple.com/us/artist/driveaway/1279072342"
}

const toYoutube = () => {
    window.location.href = "https://www.youtube.com/watch?v=hwpq-Aqd23Y"
}

const toSpotify = () => {
    window.location.href = "https://open.spotify.com/artist/08fGtVFZ52GbLMx68J8RFF?si=aGzKoXTZRveqFViNmwRs6Q"
}

if (window.matchMedia("(max-width: 600px)").matches) {
    const images = ['./Tanner2.jpg', 'Kyle2.jpg', 'Trenton2.jpg']
    var randomNumber = Math.floor(Math.random() * 3);
    document.body.style.backgroundImage = `linear-gradient(180deg,rgba(38, 38, 38, 0.471) 3%,transparent 100%),url(${images[randomNumber]})`
}