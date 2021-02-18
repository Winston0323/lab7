var projects = require('../projects.json');
/*
 * GET home page.
 */

exports.view = function(request, response){
  	projects["viewAlt"] = false;
  	response.render('index', projects);
};
exports.viewAlt = function(request, response){
  	projects["viewAlt"] = true;
  	response.render('index', projects);
};

function initialPage(){
	$(".likeBtn").click(clickLike);
}
function clickLike(){
	e.preventDefault();
	ga('create', 'UA-190119141-1', 'auto');
	ga("send", "event", 'like', 'click');
}