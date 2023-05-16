function checkGrade() {
  var examType = document.getElementById('examType').value;
  var totalMarksInput = document.getElementById('totalMarks');
  var totalMarks = parseInt(totalMarksInput.value);
  var resultElement = document.getElementById('result');
  var errorElement = document.getElementById('error');

  if (totalMarks > 100) {
    errorElement.textContent = "Error: Total marks cannot be greater than 100";
    resultElement.textContent = "";
    return;
  }

  var isAPlus = false;

  if (totalMarks >= 0 && totalMarks <= 100) {
    if (examType === "Final-exam" && totalMarks >= 90) {
      isAPlus = true;
    } else if (examType === "Regular-exam" && totalMarks >= 89 && totalMarks <= 100) {
      isAPlus = true;
    }
  }

  errorElement.textContent = "";
  resultElement.textContent = "Grade: " + (isAPlus ? "A+" : "Not A+");
}
