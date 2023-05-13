function setDefaultSortingOption() {
    const chipsElement = document.getElementById('chips');

    if (chipsElement) {
        const chipElements = chipsElement.querySelectorAll('yt-chip-cloud-chip-renderer');

        chipElements.forEach((chipElement) => {
            const childElement = chipElement.firstElementChild;

            if (childElement && childElement.innerText.toLowerCase() === 'latest') {
                chipElement.click();
                return;
            }
        });
    }
}

function handleURLChange() {
    const currentURL = window.location.href;
    const channelURLRegex = /^https:\/\/www\.youtube\.com\/@[\w\-._]+\/(videos|shorts)$/;

    if (channelURLRegex.test(currentURL)) {
        setDefaultSortingOption();
    }
}

setTimeout(() => {
    handleURLChange();
}, 500);