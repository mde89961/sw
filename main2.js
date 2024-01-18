document.getElementById("selectForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم
  
    var option = document.getElementById("option").value;
  
    // ذخیره کردن اطلاعات در localStorage
    localStorage.setItem("selectedOption", option);
  
    var username = localStorage.getItem("username");
    var selectedOption = localStorage.getItem("selectedOption");
  
    if (username && selectedOption) {
      // نمایش اطلاعات
      alert("نام کاربر: " + username + "\nگزینه انتخاب شده: " + selectedOption);
  
      // حذف گزینه از جدول
      var table = document.getElementById("data-table");
      for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var cell = row.getElementsByTagName("td")[1];
        if (cell.innerHTML === selectedOption) {
          table.deleteRow(i);
          break;
        }
      }
  
      // حذف اطلاعات از localStorage
      localStorage.removeItem("selectedOption");
    } else {
      alert("خطا در بارگیری اطلاعات.");
    }
  });
  