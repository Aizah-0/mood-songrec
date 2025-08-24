const songEmbed = document.getElementById("song_embed");

function loadtrack(trackUrl) {
    songEmbed.innerHTML = "";

    const embedTrack = trackUrl.replace("open.spotify.com", "open.spotify.com/embed");

    const iframe = document.createElement("iframe");
    iframe.src = embedTrack;
    iframe.classList.add('embed');

    songEmbed.appendChild(iframe);
}

function happy() {
    loadtrack("https://open.spotify.com/playlist/3FvW38ZWqrDNACbzW3owi1?si=36905061b94a47ab&pt=cba7f75e0d19e5b89b12b7341ab99d61")
}

function excited() {
    loadtrack("https://open.spotify.com/playlist/1WU3LY325HpeAvaakJCMYM?si=8851466586b842a6&pt=8b02ae9acbbc8460154bfe70e756dc77")
}

function inlove() {
    loadtrack("https://open.spotify.com/playlist/2ymIvFQqtMLc9rZazZGMXu?si=8bd8669f95924875&pt=4d875c405c9c03c9d95f8f01226e00b8")
}

function calm() {
    loadtrack("https://open.spotify.com/playlist/3coexCE59yDxohxlpmv3sx?si=e16b78a5e5f846d0&pt=34de0ef42d8290f6683a5d49f9c1f4da")
}

function sad() {
    loadtrack("https://open.spotify.com/playlist/38CiPwvnOMTwXCfdccVeFA?si=f72d585cdbad4d44&pt=7cbe28f4788d8394e21836849b1da3ac")
}

function angry() {
    loadtrack("https://open.spotify.com/playlist/6kHTZxaJiCVFn7uxcEObGc?si=a4e2fbff23c14651&pt=2daeb4c51ede3e0108a189a3f3755bcd")
}

function togglefeedback() {
    const form = document.getElementById("feedbackform")

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}
