var chatcount = 0;

  function friends(name, status){
    var friend = $("<div class='friend'></div>");
    $(friend).attr("ondblclick", "window.location.href='https://www.google.com'");

    var stat = $("<div class='stat'></div>");

    var online = {"background-color": "green"};
    var offline = {"background-color": "red"};

    var namediv = $("<div class='namediv'></div>");
    var username = $("<span class='username'></span>");
    $(username).html(name);

    if(status == "online"){
      $(stat).css(online);
        $("#leftbar").prepend(friend);
    } else {
      $(stat).css(offline);
        $("#leftbar").append(friend);
    }

    $(friend).append(stat);
    $(friend).append(namediv);
    $(namediv).append(username);
  }

  function chats(name, chattext){
    chatcount++;
    var chatDiv = $("<div class='chat'></div>");
    var chatcontent = $("<p></p>");

    var textform = $("<form class='textform'></form>");
    var textinput = $("<input class='textinput' type='text' name='text' placeholder='Enter Text' autocomplete='off'/>");
    var textsubmit = $("<input class='textinput' type='image' name='submit' src='./files/images/enter.png' alt='enter'/>");

    $(textform).append(textinput);
    $(textform).append(textsubmit);
    $(chatDiv).append(textform);

    $(chatcontent).html(chattext);

    var button = $("<button class='collapsible'></button>");
    $(button).html(name);

    $("#friendstab").append(chatDiv);
    $(chatDiv).append(chatcontent);
    $("#friendstab").append(button);
  }

  function category(sport, image_src, target){
    var catediv = $("<div class='catediv'></div>");
    var newlink = $("<a class='newlink'></a>");
    $(newlink).attr("href", target);

    var cate = $("<div class='cate'></div>");

    var image = $("<img class='icon'>");
    $(image).attr("src", image_src);
    $(image).attr("alt", sport);

    var sportname = $("<p class='sportname'></p>");
    $(sportname).html(sport);
    var namelink = $("<a class='namelink'></a>");
    $(namelink).attr("href", target);

    $("#categories").append(catediv);
    $(catediv).append(newlink);
    $(newlink).append(cate);
    $(cate).append(image);
    $(catediv).append(namelink);
    $(namelink).append(sportname);
  }

  $(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(0)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  15000);



    friends("Alec Martin", "online");
    friends("Will Loftus", "offline");
    friends("Stella Tran", "offline");
    friends("Jeavin Shoker", "offline");
    friends("Emilio Ditrocchio", "online");
    friends("Edward Lee", "online");

    chats("Kevin", "Kevin: Hey, how's it going?");

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    category("Basketball", "./files/images/basketball.png", "https://www.google.com");
    category("Soccer", "./files/images/soccerball.png", "https://www.google.com");
    category("Football", "./files/images/football.png", "https://www.google.com");
    category("Baseball", "./files/images/baseball.png", "https://www.google.com");
    category("Volleyball", "./files/images/volleyball.png", "https://www.google.com");

    


    var addlink = $("<a></a>");
    $(addlink).attr("href", "https://www.google.com");

    var addicon = $("<img id='addicon' alt='Add Friend' src='./files/images/addfriendwhite.png'>");
    $("#friendstab").append(addlink);
    $(addlink).append(addicon);

  });