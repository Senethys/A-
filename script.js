
//Get the faq window and remove all the content.
function clearFaqWindow() {
	var div_elements = document.getElementsByClassName("humany-toplist humany-guidelist humany-toplist humany-toplist-widget");
	var  d1 = div_elements[0];
	d1.innerHTML = '';
	console.log("Removed contents");	
}


//This functions paints all the courses and adds eventListeners to the select course buttons.
function paintCourses() {
	
	//Adding listeners to the Välj buttons
	buttons = document.getElementsByClassName("action_btn continue addButton");
	console.log(buttons[0]);
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", timeLineBindFunc);
	}
	
	console.log("paintCourses");
    $(".expandingsearcharea").each(function() {
        if ($(this).is(':contains("Öppen")') || $(this).is(':contains("annan")')) {
            $(this).css('background', "linear-gradient(to right, rgba(0,255,0,0), rgba(0,255,0,0.5)");
        } else {
            $(this).css('background', "linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,0.5)");
        }
		//TODO get more infolbale if course has a button.
		//Get add button if it has and add eventListener addToTimeline
		//Send in a list of more info label.
		//Get More info from each 
	//	var moreInfos = $(this).find("moreinfolabel");
	//	console.log("Type: " + typeof moreInfos);
	//	console.log(moreInfos);
	})
}


//Adds a course to the timeline.
var timeLineBindFunc = function addToTimeline(event) {
	
	//Get the button that fired the event.
	var button = $(event.target);
	console.log(button[0]);
	//Get the TIME from the element that has the data. 
	var startDate;
	var endDate;
	
	
	//Create li element that will display the time.
    var li = document.createElement("li");
	
	/*
	var timeLine = document.createElement("ul");
	li.className = "Week";
    timeLine.className = "Timeline";
	//Add number of weeks to ul.
	*/
	
	//Get the old faq window. 
	var div_elements = document.getElementsByClassName("humany-toplist humany-guidelist humany-toplist humany-toplist-widget");
	var  d1 = div_elements[0];
	
	//Append a "course to it".
    d1.appendChild(li);
    var span = document.createElement("SPAN");
    var removeBtn = document.createTextNode("\u00D7");
    span.className = "Ta bort";
    span.appendChild(removeBtn);
    li.appendChild(span);
	
	//Create Course period span.
	var ul = document.createElement("ul");

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Click on an 'x' to hide the current list item
function addRemoveButtons() {
	var close = document.getElementsByClassName("Ta bort");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}


//This is a function that paints courses after new courses have been shows.
function updateAfterShowMore() {
	//This is a function that paints courses after new courses have been shows. 
	var showMore = $("#showmore");
	console.log(showMore);
	showMore[0].addEventListener("click", paintCourses);
	paintCourses();
}

clearFaqWindow();
paintCourses(); 	