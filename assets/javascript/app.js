
var questions = [{
  question: "What is Darth Vader's real name?",
  answers: ["Anakin Skywalker", "Luke Skywalker", "Ramkins Skydiver", "Greg"],
  correctAnswer: "Anakin Skywalker",
},
{
  question: "What powers a lightsaber?",
  answers: ["The force", "Laughter", "Kyber crystals", "Diamonds"],
  correctAnswer: "Kyber crystals",
},
{
  question: "What were Luke's aunt and uncle's job on Tatooine?",
  answers: ["Scavengers", "Repaired droids", "Moisture farmers", "Smugglers"],
  correctAnswer: "Moisture farmers",
},
{
  question: "How many languages can C-3PO speak?",
  answers: ["25", "500,765", "No more than 3.2 million", "More than 6 million"],
  correctAnswer: "More than 6 million",
},
{
  question: "Which character is partially named after George Lucas's son?",
  answers: ["Luke Skywalker", "Captain Rex", "Dexter Jettster", "Commander Cody"],
  correctAnswer: "Dexter Jettster",
},
{
  question: "What was the original name of the first Star Wars movie when it went into production?",
  answers: ["Adventures of Luke Starkiller, As Taken From the Journal of the Whills, Saga 1: The Star Wars", "Star Wars: The Adventures of Luke Starkiller", "Star Wars: A New Hope", "Star Wars"],
  correctAnswer: "Adventures of Luke Starkiller, As Taken From the Journal of the Whills, Saga 1: The Star Wars",
},
{
  question: "Which bounty hunter in The Empire Strikes Back is wearing an old costume from a Doctor Who episode?",
  answers: ["Boba Fett", "Zuckuss", "Bossk", "Greedo"],
  correctAnswer: "Bossk",
},
{
  question: "What does AT-AT stand for?",
  answers: ["Armored Transport Attack Target", "All Terrain Assualt Transport", "All Terrain Armored Transport", "American Telephone and Telegraph"],
  correctAnswer: "All Terrain Armored Transport",
}];
//console.log(questions[0]);

var trivia = {
  correct: 0,
  incorrect: 0,
  counter: 80,
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
        $("#subwrapper").append("<input type='radio' name='questions-"+i+"' value='"+questions[i].answers[j]+"'>" +questions[i].answers[j]);
        //console.log(questions[i]);
      }
    }
  },
  done: function() {
        
      $.each($("input[name='questions-0']:checked"), function(){
      if($(this).val() == questions[0].correctAnswer){
        trivia.correct++;
      } else {
        trivia.incorrect++;
        }
      });  

      $.each($("input[name='questions-1']:checked"), function(){
      if($(this).val() == questions[1].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-2']:checked"), function(){
      if($(this).val() == questions[2].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-3']:checked"), function(){
      if($(this).val() == questions[3].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-4']:checked"), function(){
      if($(this).val() == questions[4].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-5']:checked"), function(){
      if($(this).val() == questions[5].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-6']:checked"), function(){
      if($(this).val() == questions[6].correctAnswer){
        trivia.correct++;
        console.log
      } else {
        trivia.incorrect++;
        }
      });

      $.each($("input[name='questions-7']:checked"), function(){
      if($(this).val() == questions[7].correctAnswer){
        trivia.correct++;
        console.log
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
  //console.log("working button");
  trivia.start();
});

