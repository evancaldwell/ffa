(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

  var DEFAULT_ROUTE = 'dash';

	var template = document.querySelector('#app');

	template.pages = [
	  {name: 'Dashboard', hash: 'dash', url: '/pages/dash.html'},
	  {name: 'app1', hash: 'app1', url: '/pages/error.html'},
	  {name: 'app2', hash: 'app2', url: '/pages/error.html'},
	  {name: 'New App', hash: 'newApps', url: '/pages/new_app.html'}
	];



	template.keyHandler = function(e, detail, sender) {
	  var pages = document.querySelector('#pages');

	  switch (detail.key) {
	    case 'left':
	    case 'up':
	      pages.selectPrevious();
	      break;
	    case 'right':
	    case 'down':
	      pages.selectNext();
	      break;
	    case 'space':
	      detail.shift ? pages.selectPrevious() : pages.selectNext();
	      break;
	  }
	};

	template.onResponse = function(e, detail, sender) {
	  var article = detail.response.querySelector('scroll-area article');

	  var pages = document.querySelector('#pages');
	  this.injectBoundHTML(article.innerHTML,
	                       pages.selectedItem.firstElementChild);
	};

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
