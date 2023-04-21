const matricNumbers = ['A123', 'B456', 'C789',] ; // Replace with your list of matric numbers

const matricInput = document.getElementById('matric');
const signInBtn = document.getElementById('signInBtn');

matricInput.addEventListener('input', () => {
    if (matricNumbers.includes(matricInput.value.trim())) {
        signInBtn.disabled = false;
    } else {
        signInBtn.disabled = true;
    }
});