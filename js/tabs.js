// TOGGLE SECTIONS
// querySelector, jQuery style
var sel = function (selector) {
  return document.querySelectorAll(selector);
};


// Define tabs, write down them classes
var tabs = [
  '.tabbed-section-selector-tab-1',
  '.tabbed-section-selector-tab-2',
  '.tabbed-section-selector-tab-3'
];

// Create the toggle function
var toggleTab = function(element) {
  var parent = element.parentNode;

  // Do things on click
  sel(element)[0].addEventListener('click', function(){
    // Remove the active class on all tabs.
    // climbing up the DOM tree with `parentNode` and target
    // the children ( the tabs ) with childNodes
    this.parentNode.childNodes[1].classList.remove('active');
    this.parentNode.childNodes[3].classList.remove('active');
    this.parentNode.childNodes[5].classList.remove('active');

    // Then, give `this` (the clicked tab), the active class
    this.classList.add('active');

    // Check if the clicked tab contains the class of the 1 or 2
    if(this.classList.contains('tabbed-section-selector-tab-1')) {
      // and change the classes, show the first content panel
      sel('.tabbed-section-1')[0].classList.remove('hidden');
      sel('.tabbed-section-1')[0].classList.add('visible');

      // Hide the second
      sel('.tabbed-section-2')[0].classList.remove('visible');
      sel('.tabbed-section-2')[0].classList.add('hidden');
       sel('.tabbed-section-3')[0].classList.remove('visible');
      sel('.tabbed-section-3')[0].classList.add('hidden');
    }

    if(this.classList.contains('tabbed-section-selector-tab-2')) {
      // and change the classes, show the second content panel
      sel('.tabbed-section-2')[0].classList.remove('hidden');
      sel('.tabbed-section-2')[0].classList.add('visible');
      // Hide the first
      sel('.tabbed-section-1')[0].classList.remove('visible');
      sel('.tabbed-section-1')[0].classList.add('hidden');
      sel('.tabbed-section-3')[0].classList.remove('visible');
      sel('.tabbed-section-3')[0].classList.add('hidden');
    }

    if(this.classList.contains('tabbed-section-selector-tab-3')) {
      // and change the classes, show the second content panel
      sel('.tabbed-section-3')[0].classList.remove('hidden');
      sel('.tabbed-section-3')[0].classList.add('visible');
      // Hide the first
      sel('.tabbed-section-1')[0].classList.remove('visible');
      sel('.tabbed-section-1')[0].classList.add('hidden');
      sel('.tabbed-section-2')[0].classList.remove('visible');
      sel('.tabbed-section-2')[0].classList.add('hidden');
    }
  });
};

// Then finally, iterates through all tabs, to activate the
// tabs system.
for (var i = tabs.length - 1; i >= 0; i--) {
  toggleTab(tabs[i])
};
