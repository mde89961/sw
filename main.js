document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === 'boresh' && password === 'bh1382') {
      window.location.href = "page1.html";
    } else if (username === 'milad' && password === 'md1382') {
      window.location.href = "page2.html";
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است.");
    }
  });
  