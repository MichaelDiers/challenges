const today = new Date();

document.querySelectorAll('[start][end]').forEach((entry) => {
    const start = new Date(entry.getAttribute('start'));
    const end = new Date(entry.getAttribute('end'));
    const correctedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1);
    const headlineExtended = entry.querySelector('.headlineExtended');
    if (today < start) {
        headlineExtended.innerHTML = ' (geplant)';
        headlineExtended.classList.add('future');
    } else if (today > correctedEnd) {
        headlineExtended.innerHTML = ' (abgelaufen)';
        headlineExtended.classList.add('expired');
    } else {
        headlineExtended.innerHTML = ' (aktiv)';
        headlineExtended.classList.add('active');
    }
});
