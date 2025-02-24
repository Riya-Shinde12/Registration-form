function validateForm() {
    let valid = true;
    clearErrors();
  
    // Full name validation
    const fullname = document.getElementById('fullname').value;
    const nameParts = fullname.split(' ');
  
    if (nameParts.length < 2 || nameParts.length > 3) {
      document.getElementById('fullnameError').innerText = "Please enter a valid full name (First, Middle, Last).";
      valid = false;
    }
  
    // Aadhar number validation (12 digits, numbers only)
    const aadhar = document.getElementById('aadhar').value;
    const aadharRegex = /^[0-9]{12}$/;
    if (!aadharRegex.test(aadhar)) {
      document.getElementById('aadharError').innerText = "Aadhar number should be a 12-digit number.";
      valid = false;
    }
  
    // PAN card number validation (alphanumeric, 10 characters)
    const pan = document.getElementById('pan').value;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan)) {
      document.getElementById('panError').innerText = "PAN card number should be in the format XXXXX9999X.";
      valid = false;
    }
  
    // Mobile number validation (10 digits)
    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      document.getElementById('mobileError').innerText = "Mobile number should be a 10-digit number.";
      valid = false;
    }
  
    // Date of Birth validation (should be a valid date and not in the future)
    const dob = document.getElementById('dob').value;
    const currentDate = new Date();
    const birthDate = new Date(dob);
    if (birthDate > currentDate) {
      document.getElementById('dobError').innerText = "Date of birth cannot be in the future.";
      valid = false;
    }
  
    // Marks validation and percentage calculation for best of five subjects
    let marks = [];
    for (let i = 1; i <= 6; i++) {
      marks.push(parseInt(document.getElementById('marks' + i).value) || 0);
    }
  
    if (marks.some(mark => mark < 0 || mark > 100)) {
      document.getElementById('marksError').innerText = "Marks should be between 0 and 100.";
      valid = false;
    } else {
      marks.sort((a, b) => b - a); // Sort marks in descending order
      const bestFiveMarks = marks.slice(0, 5); // Best 5 subjects
      const totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);
      const percentage = (totalMarks / 500) * 100; // Percentage for best of five subjects
      console.log("Best Five Subjects Marks: " + bestFiveMarks);
      console.log("Percentage: " + percentage.toFixed(2) + "%");
    }
  
    return valid;
  }
  
  function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = "");
  }
  