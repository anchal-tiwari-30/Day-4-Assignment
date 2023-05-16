function checkGrade() {
    var examType = document.getElementById('examType').value;
    var totalMarksInput = document.getElementById('totalMarks');
    var totalMarks = parseInt(totalMarksInput.value);
    var resultElement = document.getElementById('result');
  
    var isAPlus = false;
  
    if (examType === "Final-exam" && totalMarks >= 90) {
      isAPlus = true;
    } else if (examType === "Regular-exam" && totalMarks >= 89 && totalMarks <= 100) {
      isAPlus = true;
    }
  
    resultElement.textContent = "Grade: " + (isAPlus ? "A+" : "Not A+");
  }
  