document.addEventListener("DOMContentLoaded", function() {
        var newsads = document.querySelector(".newsads");
        var signup = document.querySelector(".signup");

        newsads.addEventListener("click", function() {
                window.scroll(0, 685); // scroll the page 650px away from the top
        }) 

        signup.addEventListener("click", function() {
                window.scroll(0, 1500); // scroll the page 650px away from the top
        })
	
})
$(":button").click(function(){
	$(this).clear();
});