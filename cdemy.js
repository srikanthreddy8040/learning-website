
function toggleDropdown() {
    // Get the dropdown content
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle the display property
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Select elements for the cart and cart count
    const cartButtons = document.querySelectorAll('.cart');
    const cartCountElement = document.getElementById('cart-count');
    const cartIcon = document.querySelector('.bi-cart3');
    let cartCount = 0;

    // Function to update the cart count
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    // Add event listener to each "Add to Cart" button
    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartCount++; // Increment the cart count
            updateCartCount(); // Update the displayed cart count
        });
    });

    // Display cart count when clicking on the cart icon
    cartIcon.addEventListener('click', function () {
        alert(`You have ${cartCount} items in your cart.`);
    });

    // Example: Toggle dropdown or show items in cart when clicked
    // You can replace the alert with a more interactive dropdown or modal for cart items
});

    // Wait for the document to load completely
    document.addEventListener('DOMContentLoaded', function() {

        // Function to increment the learners count when a box is clicked
        function incrementLearnersCount(event) {
            const box = event.target; // Target the clicked box
            let countText = box.querySelector('p'); // Select the text inside the box

            if (countText) {
                let currentCount = parseInt(countText.innerText.replace(/[^0-9]/g, '')); // Extract number from text
                currentCount += 1; // Increment the number
                countText.innerText = `${currentCount.toLocaleString()} learners`; // Update the text
            }
        }

        // Attach click event listeners to all learners boxes
        const learnersBoxes = document.querySelectorAll('.learners-box');
        learnersBoxes.forEach(box => {
            box.addEventListener('click', incrementLearnersCount); // Add the click event listener to each box
        });

        // Optional: Function to display total learners count on hover
        function showTotalLearnersOnHover(event) {
            const subCategories = event.currentTarget.querySelector('.sub-categories'); // Find sub-categories section
            const totalLearners = subCategories ? subCategories.querySelectorAll('.learners-box p').reduce((sum, p) => {
                const learners = parseInt(p.innerText.replace(/[^0-9]/g, ''));
                return sum + learners;
            }, 0) : 0;

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = `Total learners: ${totalLearners.toLocaleString()}`;
            document.body.appendChild(tooltip);

            // Position the tooltip near the category
            tooltip.style.position = 'absolute';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;

            // Remove tooltip when mouse leaves the section
            event.currentTarget.addEventListener('mouseleave', function() {
                document.body.removeChild(tooltip);
            });
        }

        // Add hover event listeners to all categories
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.addEventListener('mouseenter', showTotalLearnersOnHover);
        });

    });


