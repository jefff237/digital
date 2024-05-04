function makePayment() {
    const balanceElement = document.getElementById("balance");
    const amountElement = document.getElementById("amount");
    const transactionIdElement = document.getElementById("transactionId");
    const phoneElement = document.getElementById("phone"); // Get the phone number element

    const balance = parseFloat(balanceElement.textContent);
    const amount = parseFloat(amountElement.value);
    const phone = phoneElement.value; // Get the phone number value

    if (!phone) { // Check if phone number is entered
        alert("Please enter a phone number.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance.");
        return;
    }

    // Deduct the payment from the balance
    balanceElement.textContent = (balance - amount).toFixed(2);

    // Generate a simple transaction ID (for demo purposes)
    const transactionId = "TXN-" + Math.floor(Math.random() * 1000000);

    // Display the transaction ID
    transactionIdElement.textContent = transactionId;

    // Clear the input fields
    amountElement.value = "";
    phoneElement.value = ""; // Clear the phone number field
}

function countHundreds() {
    const countAmountElement = document.getElementById("countAmount");
    const hundredsCountElement = document.getElementById("hundredsCount");

    const amount = parseFloat(countAmountElement.value);

    if (isNaN(amount) || amount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const hundredsCount = Math.floor(amount / 100);
    hundredsCountElement.textContent = hundredsCount;

    // Clear the input field
    countAmountElement.value = "";
}