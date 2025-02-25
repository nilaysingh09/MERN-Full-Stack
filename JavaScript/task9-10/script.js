// Handle form submission and data storage
document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
      };

      // Get existing users or initialize empty array
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userData);

      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Reset form
      registrationForm.reset();

      alert("User registered successfully!");
      window.location.href = "view.html";
    });
  }

  // Display users if on view page
  const userTableBody = document.getElementById("userTableBody");
  if (userTableBody) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
      userTableBody.appendChild(row);
    });
  }
});
