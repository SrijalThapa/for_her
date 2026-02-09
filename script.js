function confirmLove() {
    const notes = document.getElementById('personalNotes');
    const continueBtn = document.getElementById('continueBtn');

    // Show the Continue button
    continueBtn.style.display = 'inline-block';

    // Optional: change the message above Yes button
    notes.querySelector('h1').textContent = 'Yay! ❤️ Thank you for trusting me!';
}
