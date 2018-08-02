$(document).ready(function() {

  let options = ["Rock", "Paper", "Scissor"];
  let optionElements = document.querySelectorAll('.optionCol')
  let optionTexts = document.querySelectorAll('.optionText')
  let humanWinScore = document.querySelector('.humanWins')
  let cpuWinScore = document.querySelector('.cpuWins');

  let userWins = 0;
  let cpuWins = 0;

  toastr.options.showMethod = 'slideDown';
  toastr.options.closeButton = true;

  for (let i = 0; i < optionElements.length; i++) {
    optionElements[i].addEventListener('click', function() {
      let cpuRandom = Math.floor(Math.random() * options.length)
      let cpuPicks = options[cpuRandom]
      if (optionTexts[i].innerText === "Rock" && cpuPicks === "Scissor" || optionTexts[i].innerText === "Paper" && cpuPicks === "Rock" || optionTexts[i].innerText === "Scissor" && cpuPicks === "Paper") {
        userWins++
        humanWinScore.innerHTML = userWins
        toastr.success("You Win!")
      } else if (optionTexts[i].innerText === cpuPicks) {
        toastr.warning("TIE!")
      } else {
        cpuWins++
        cpuWinScore.innerHTML = cpuWins
        toastr.error("CPU Wins!")
      }
      if (cpuWins === 10) {
        document.querySelector('.modal').style.display = "flex";
        document.querySelector('.modal').style.backgroundColor = "#c8e026"
        document.querySelector('.modal-content').classList.add('computerWinsModal');
        document.querySelector('.modal-title').innerText = "SORRY";
        document.querySelector('.modal-body').innerText = "COMPUTER WINS";
      } else if (userWins === 10) {
        document.querySelector('.modal').style.display = "flex";
        document.querySelector('.modal').style.backgroundColor = "#7edc1b";
        document.querySelector('.modal-content').classList.add('humanWinsModal');
        document.querySelector('.modal-title').innerText = "CONGRATULATIONS!";
        document.querySelector('.modal-body').innerText = "YOU WIN!!!!";
      }
    })
  }

})
