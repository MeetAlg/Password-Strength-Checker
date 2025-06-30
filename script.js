function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strength");

    let strength = 0;

    // Conditions
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Update UI based on strength
    switch (strength) {
        case 0:
        case 1:
        case 2:
            strengthText.textContent = "❌ Weak Password";
            strengthText.style.color = "red";
            break;
        case 3:
            strengthText.textContent = "⚠️ Moderate Password";
            strengthText.style.color = "orange";
            break;
        case 4:
            strengthText.textContent = "✅ Strong Password";
            strengthText.style.color = "green";
            break;
        case 5:
            strengthText.textContent = "💪 Very Strong Password!";
            strengthText.style.color = "darkgreen";
            break;
    }
}
