// Find the button and add a click event listener
document.getElementById("loadUser").addEventListener("click", function () {

    // Send HTTP request to randomuser.me API
    fetch("https://randomuser.me/api")
        .then(function (response) {  // When the response is received, convert it to JSON
            return response.json();
        })
        .then(function (data) {
            // Get the first user from the results array
            const user = data.results[0];

            const picture = user.picture.large;
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const city = user.location.city;
            const postcode = user.location.postcode;
            const phone = user.phone;

            // Insert data into HTML elements
            document.getElementById("picture").src = picture;
            document.getElementById("name").textContent = fullName;
            document.getElementById("city").textContent = city;
            document.getElementById("postcode").textContent = postcode;
            document.getElementById("phone").textContent = phone;

            // Show the card after data is loaded
            document.getElementById("userCard").style.display = "block";
        })

        // Error handling
        .catch(function (error) {
            console.error("Error fetchinf the data: ", error);
        });

});
