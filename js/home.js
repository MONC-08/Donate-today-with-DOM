// donate now button

const confirmDonate = document.querySelectorAll('.btn-donate');
for (const singleBtn of confirmDonate) {

    singleBtn.addEventListener('click', function () {

        //get the input field value through a function
        const donateContainer = singleBtn.closest('.donate-container');
        const inputField = getValueByQuerySelector(donateContainer, '.donate-field')
        const inputValue = Number(inputField.value);

        // get the inner text through a function
        const donatedContainer = singleBtn.parentElement.parentElement;
        const donatedTextField = getValueByQuerySelector(donatedContainer, '.donatedAmount');
        const donatedAmount = Number(donatedTextField.innerText);
        // console.table({ inputValue, donatedAmount }) //check value on a table

        // get the actual or current balance on account through a function
        const actualBalanceParent = document.getElementById('actual-balance-parent');
        const actualBalanceTextField = getValueByQuerySelector(actualBalanceParent, '#actual-balance');
        const actualBalance = Number(actualBalanceTextField.innerText);

        if (inputValue < 0 || isNaN(inputValue)) {
            alert('Incorrect entry. Please try again.');
            return;
        }
        else {

            if (actualBalance <= 0) {
                alert('Insufficient Balance.');
                return;
            }

            const newDonatedBalance = donatedAmount + inputValue;
            donatedTextField.innerText = newDonatedBalance;
            console.log(newDonatedBalance)

            // inputField.value = '';
            if (actualBalance < inputValue) {
                alert('Insufficient Balance.');
                return;
            }
            const updatedBalance = actualBalance - inputValue;
            actualBalanceTextField.innerText = updatedBalance;

        }

    })
}


