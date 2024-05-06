document.addEventListener('DOMContentLoaded', function () {
    const signIn = document.getElementById('btn-signIn');
    const signOut = document.getElementById('btn-signOut');
    const cardFront = document.querySelector('.flip_card__front');
    const cardBack = document.querySelector('.flip_card__back');
    const visitorsList = document.getElementById('visitors-list');

    let visitorIn = true;

    let visitors = [{
        name: 'Tommy McCann',
        company: 'home',
        email: 'tommy@home.com'
    }];

    function toggleCardStyles() {
        if (visitorIn) {
            cardFront.classList.remove('flip-card-out');
            cardBack.classList.remove('flip-card-in');
        } else {
            cardFront.classList.add('flip-card-out');
            cardBack.classList.add('flip-card-in');
        }
    }

    function renderVisitors() {
        visitorsList.innerHTML = ''; // Clear the list before rendering
    
        visitors.forEach((visitor, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `visitor-${index}`; // Unique ID for each checkbox
            const label = document.createElement('label');
            label.textContent = visitor.name;
            label.setAttribute('for', `visitor-${index}`); // Associate label with checkbox
            li.appendChild(label);
            li.appendChild(checkbox);
            visitorsList.appendChild(li);
        });
    }

    function handleSignIn() {
        // Check if any required field is blank
        const nameInput = document.getElementById('name');
        const companyInput = document.getElementById('company');
        const emailInput = document.getElementById('email');

        if (nameInput.value === '' || companyInput.value === '' || emailInput.value === '') {
            alert('Please fill in all required fields.');
            return; // Do nothing further if any required field is blank
        }

        visitorIn = !visitorIn;
        toggleCardStyles();

        // Capture form input values
        const name = nameInput.value;
        const company = companyInput.value;
        const email = emailInput.value;

        // Check if a visitor with the same name already exists
        if (visitors.some(visitor => visitor.name === name)) {
            alert('A visitor with the same name already exists.');
            return; // Do nothing further if a visitor with the same name exists
        }

        // Push the values to the visitors array
        visitors.push({ name, company, email });

        console.log(visitors); 
        renderVisitors(); // Update the visitor list
    }

    signIn.addEventListener('click', handleSignIn);

    signOut.addEventListener('click', function () {
        visitorIn = !visitorIn;
        toggleCardStyles();
    });
});
