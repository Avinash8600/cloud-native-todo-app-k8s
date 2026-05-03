function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // store in browser (optional)
    localStorage.setItem("user", email);

    // redirect to your todo app
    window.location.href = "dashboard.html"; // your main app page
  } else {
    alert("Please enter email and password");
  }
}