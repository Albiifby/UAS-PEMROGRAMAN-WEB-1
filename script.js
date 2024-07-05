function processTransaction() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const hotel = document.getElementById('hotel').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && destination && date && hotel) {
        const resultDiv = document.getElementById('transactionResult');
        resultDiv.innerHTML = `<p>Thank you, ${name}! Your transaction has been processed successfully.</p>
                               <p>Details:</p>
                               <p>Email: ${email}</p>
                               <p>Destination: ${destination}</p>
                               <p>Date of Visit: ${date}</p>
                               <p>Hotel: ${hotel}</p>
                               <p>Message: ${message}</p>`;
        resultDiv.style.color = 'green';
    } else {
        alert('Please fill in all required fields.');
    }
}
