document.addEventListener('DOMContentLoaded', (event) => {
    const editButton = document.getElementById('js-edit-profile');
    const contactInfoView = document.getElementById('js-contact-info');
    const contactFormView = document.getElementById('js-contact-form');
    const contactData = document.getElementById('js-contact-data');

    editButton.addEventListener('click', () => {
        contactInfoView.style.display = 'none';
        contactFormView.style.display = 'block';
    });

    window.saveContact1 = function(event) {
        event.preventDefault();

        const selectedOption = document.querySelector('input[name="order-type1"]:checked');
        if (selectedOption) {
            const selectedValue = selectedOption.value;

            // Update the displayed data
            contactData.innerHTML = `<span>${selectedValue}</span>`;

            // Toggle the views
            contactFormView.style.display = 'none';
            contactInfoView.style.display = 'block';
        }
    }
});