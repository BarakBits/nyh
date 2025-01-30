// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


cart = [ 2, 4, 6 ]
document.cookie = `${cart}`

let x=document.cookie
console.log(x)

jsonstring = '[\
  {\
    "id": 1,\
    "quantity": 2\
  },\
  {\
    "id": 3,\
    "quantity": 3\
  }\
]'

jsondata = JSON.parse(jsonstring)
console.log("QUANTITY= "+jsondata[2])