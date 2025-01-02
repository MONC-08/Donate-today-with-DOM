// donate now button

const confirmDonate = document.querySelectorAll('.btn-donate');
for (const singleBtn of confirmDonate) {

    singleBtn.addEventListener('click', function () {

        //get the input field value through a function
        const fieldContainer = singleBtn.closest('.donate-container');

        const inputField = getValueByQuerySelector(fieldContainer, '.donate-field')
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

            // inputField.value = '';
            if (actualBalance < inputValue) {
                alert('Insufficient Balance.');
                return;
            }
            const updatedBalance = actualBalance - inputValue;
            actualBalanceTextField.innerText = updatedBalance;

            // show history through a function
            showHistory(donatedContainer, inputValue);
            // show history end
        }

    })
}

// show history function
function showHistory(donatedContainer, inputValue) {

    const campaignTitle = donatedContainer.children[1].firstElementChild.innerText;
    const parentDiv = document.getElementById('history-container');
    const date = new Date();

    const newDiv = document.createElement('div');
    newDiv.classList.add('shadow', 'mx-auto', 'w-full', 'md:w-9/12', 'border-4', 'rounded-lg', 'text-center', 'p-3', 'm-2', 'bg-emerald-300');

    newDiv.innerHTML = `
            
                            <h2 class="text-base md:text-xl font-bold">
                                ${inputValue} USD is donated
                                for ${campaignTitle}
                            </h2>          
                            <p class="">
                                ${date};
                            </p>
            
            `;

    parentDiv.appendChild(newDiv);
}