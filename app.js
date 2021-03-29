const toMerchSite = () => {
    window.open("https://driveawaymerch.bigcartel.com", '_blank')
}

const toInstagram = () => {
    window.open("https://www.instagram.com/driveaway/?hl=en", '_blank')
}

const toTikTok = () => {
    window.open("https://www.tiktok.com/@driveaway", '_blank')
}

const toAppleMusic = () => {
    window.open("https://music.apple.com/us/artist/driveaway/1279072342", '_blank')
}

const toYoutube = () => {
    window.open("https://www.youtube.com/watch?v=hwpq-Aqd23Y", '_blank')
}

const toSpotify = () => {
    window.open("https://open.spotify.com/artist/08fGtVFZ52GbLMx68J8RFF?si=aGzKoXTZRveqFViNmwRs6Q", '_blank')
}

const openEmail = () => {
    window.open("mailto:driveawaymgmt@gmail.com", '_blank')
}

if (window.matchMedia("(max-width: 600px)").matches) {
    const images = ['./Tanner2.jpg', 'Kyle2.jpg', 'Trenton2.jpg']
    var randomNumber = Math.floor(Math.random() * 3);
    document.body.style.backgroundImage = `linear-gradient(180deg,rgba(38, 38, 38, 0.471) 3%,transparent 100%),url(${images[randomNumber]})`
}