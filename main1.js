document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم
  
    var date = document.getElementById("date").value;
  
    // اضافه کردن اطلاعات به جدول
    var table = document.getElementById("data-table");
    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = date;
  
    // پاک کردن فیلدها
    document.getElementById("date").value = "";
  });
  