 var currentDate = new Date();

        // Extract day, month, and year
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Months are zero based
        var year = currentDate.getFullYear();

        // Format day and month to have leading zeros if less than 10
        day = (day < 10 ? '0' : '') + day;
        month = (month < 10 ? '0' : '') + month;

        // Construct the date string in the format DD-MM-YYYY
        var formattedDate = day + '-' + month + '-' + year;

        // Find the element with the class name "date" and set its text content to the formatted date
        document.querySelector('.date').textContent = 'Date: ' + formattedDate;