document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const totalCards = cards.length;
    let currentIndex = 0;

    // Function to move the carousel
    function moveCarousel() {
      currentIndex = (currentIndex + 1) % totalCards; // Cycle through cards
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set a timer for auto-scrolling
    setInterval(moveCarousel, 4750); // 3 seconds
  });

  document.getElementById('openButton').addEventListener('click', function () {
    openInNewWindow('https://www.techservit.co.za');
});

function openInNewWindow(url) {
    if (!url) {
        console.error("No URL provided!");
        return;
    }
    window.open(url, '_blank', '');
}



function shit() {
    // Create an AJAX object to load the about.json and display the contents
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText); // Handle the loaded response
        const data = JSON.parse(this.responseText);
        // Extract the required data
        const sObj = data.about.services;        // Services
        const dObj = data.about.descriptions;   // Descriptions
        const lObj = data.about.links;          // Links
        // Get the container where the list will be inserted
        const container = document.getElementById('?'); // Change ID as per your HTML
        // Create the <ul> element
        const ul = document.createElement('ul');
        // Loop through the array
        for (let i = 0; i < sObj.length; i++) {
            // Create an <li> element for each item
            const li = document.createElement('li');
            li.className = 'index-li';
            // Create an anchor element
            const anchor = document.createElement('a');
            anchor.textContent = sObj[i];   // Use service name as the anchor text
            anchor.href = lObj[i];         // Use link from the JSON data
            anchor.style.textDecoration = "none";
            anchor.style.color = "black";
            // Create a <p> element for the description
            const p = document.createElement('a');
            p.className = 'index-p';
            p.style.display = 'none';    // Initially hide the description
            p.textContent = dObj[i];     // Set the description text
            // Add hover event listeners to the anchor
            anchor.addEventListener('mouseover', () => {
                p.style.display = 'block'; // Show the description on hover
            });
            anchor.addEventListener('mouseout', () => {
                p.style.display = 'none'; // Hide the description when not hovering
            });
            // Append the anchor and the description to the <li>
            li.appendChild(anchor);
            li.appendChild(p);
            // Append the <li> to the <ul>
            ul.appendChild(li);
        }
        // Append the <ul> to the container
        container.appendChild(ul);
    };
    // Set up and send the AJAX request
    xhttp.open("GET", "/data.json");
    xhttp.send();
}
// Call the function to execute
shit();

