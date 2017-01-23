$(document).ready(function(){
  console.log("js sourced");
  var people = [];

  //object constructor
  function Person(name, birthplace, age){
    this.name = name;
    this.birthplace = birthplace;
    this.age = age;
  };

  var paul = new Person("Paul", "Cambridge", 39);
  var lynda = new Person("Lynda", "Richfield", 18);
  var cindy = new Person("Cindy", "Cambridge", 42);
  var rudolph = new Person("Rudolph", "Richfield", 1);
  console.log(cindy);

  //Push our Person objects to the people array
  people.push(paul);
  people.push(lynda);
  people.push(cindy);
  people.push(rudolph);
  console.log(paul);

  people = [paul, lynda, cindy, rudolph];
  console.log(people);

  //This function will add people to the DOM when we call it
  //could add a loop to this function and use people[i], but then would need to fix other things because everything would show up when appendPerson was called - need to add if statements
  function appendPaul(){
    $("#paul").text(people[0].name + " was born in " + people[0].birthplace + " and is " + people[0].age + " years old.");
  }
  function appendLynda(){
    $("#lynda").text(people[1].name + " was born in " + people[1].birthplace + " and is " + people[1].age + " years old.");
  }
  function appendCindy(){
    $("#cindy").text(people[2].name + " was born in " + people[2].birthplace + " and is " + people[2].age + " years old.");
  }
  function appendRudolph(){
    $("#rudolph").text(people[3].name + " was born in " + people[3].birthplace + " and is " + people[3].age + " year old.");
  }
  // console.log(appendPerson());

  $("#paulClick").on("click", function(){
    var personClicked = $(this).parent().attr("id");
    if(personClicked == "paul"){
      appendPaul();
    }
  });

  $("#lyndaClick").on("click", function(){
    var personClicked = $(this).parent().attr("id");
    if(personClicked == "lynda"){
      appendLynda();
    }
  });

  $("#cindyClick").on("click", function(){
    var personClicked = $(this).parent().attr("id");
    if(personClicked == "cindy"){
      appendCindy();
    }
  });

  $("#rudolphClick").on("click", function(){
    var personClicked = $(this).parent().attr("id");
    if(personClicked == "rudolph"){
      appendRudolph();
    }
  });
  var ages = [];
  function calculate(){
    for(var i = 0; i < people.length; i++){
      if(people[i].age >= 18 && people[i].birthplace === "Cambridge"){
        ages.push(people[i].age);
        var sum = 0;
        for(i = 0; i < ages.length; i++){
          sum += ages[i];
          $("#calculator").text("The sum of ages for people over 18 born in Cambridge is: " + sum);
        }
      }
    }
  };
  $("#calculatePeeps").on("click", function(){
    calculate();
  });
  });//end document ready
