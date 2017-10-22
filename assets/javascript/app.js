
var questions = [{
  question: "What is Darth Vader's real name?",
  answers: ["Anakin Skywalker", "Anna Shmywalker", "Tanakin Skydiver", "Greg"],
  correctAnswer: "Greg",
},
{
  question: "What powers a lightsaber?",
  answers: ["The force", "Laughter", "Kyber crystals", "Diamonds"],
  correctAnswer: "Laughter",
}];
//console.log(questions);

var trivia = {
  correct: 0,
  incorrect: 0,
  counter: 20,
  countdown: function(){
      trivia.counter--;
      $("#timer").html(trivia.counter);
      if (trivia.counter <= 0){
        console.log("Time's up!");
        trivia.done();
      }
  },
  start: function() {
    timer = setInterval(trivia.countdown, 1000)
    $("#subwrapper").prepend('<h3> Time Remaining: <span id="timer"></span> Seconds </h3>');

    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append('<h2>'+questions[i].question+'</h2>');
      for (var j = 0; j< questions[i].answers.length; j++) {
        $("#subwrapper").append("<input type='radio' name='questions"+i+"' value='"+questions[i].answers[j]+"'>" +questions[i].answers[j]);
        //console.log(questions);
      }
    }
  },
  done: function() {
        
      $.each($("input[name='question0']:checked"), function(){
      if($(this).val() == questions[0].correctAnswer){
        trivia.correct++;
        console.log(trivia.correct);
      } else {
        trivia.incorrect++;
        }
      });  

      $.each($("input[name='question1']:checked"), function(){
      if($(this).val() == questions[1].correctAnswer){
        trivia.correct++;
      } else {
        trivia.incorrect++;
        }
      });
        
  this.result();
  },

  result: function(){
    clearInterval(timer);
    $('#subwrapper h3').remove();

    $('#subwrapper').html("<h3>All done!</h3>");
    $('#subwrapper').append("<h4> Correct Answers: "+this.correct+"</h4>");
    $('#subwrapper').append("<h4> Incorrect Answers: "+this.incorrect+"</h4>");
    $('#subwrapper').append("<h4> Unanswered: " +(questions.length-(this.incorrect + this.correct))+"</h4>");
  },
}


$("#start").on("click",function(){
  console.log("working button");
  trivia.start();
});

