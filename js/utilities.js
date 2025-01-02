// common function to get input value
function getValueByQuerySelector(parentContainer, target) {
    const myTarget = parentContainer.querySelector(target);
    return myTarget;
}

// get the main section and history section
const mainContainer = document.querySelector('main');
const historyContainer = document.querySelector('#history-container')

// toggling the button
const showDonationBtn = document.getElementById('show-donation-btn');
const showHistoryBtn = document.getElementById('history-btn');

showHistoryBtn.addEventListener('click', function () {

    showDonationBtn.classList.remove('bg-green-400', 'border-current');
    showHistoryBtn.classList.add('bg-green-400', 'border-current');

    mainContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');

    // showHistory()

})

showDonationBtn.addEventListener('click', function () {
    showDonationBtn.classList.add('bg-green-400', 'border-current');
    showHistoryBtn.classList.remove('bg-green-400', 'border-current');

    mainContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');
})