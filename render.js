// Get the number of cell divisions per year updated every second
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = diff / oneDay
var timeDiff = Math.abs(start.getTime() - now.getTime())
var diffDays = timeDiff / (1000 * 3600 * 24)
var time_in_seconds = diffDays*60*60
var divsthisyear = Math.floor( (338237780822 * ( time_in_seconds / (3600 * 24) ) ) )

// Mutations in your body per year
var mutsperyear = Math.floor( (30 * divsthisyear) )
var baseperyear = Math.floor( (mutsperyear / 3100000000 ) )

// Format the date
var dateformat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var today = today.toLocaleDateString("en-US", dateformat)

var somestats = { "somestats": [
{ start: 'Today is ', stat: today, end: '. A lot has already happened this year.'}, 
{ start: 'Your body has undergone approximately ', stat: divsthisyear, end: ' cell divisions.'},
{ start: 'You have had about ', stat: mutsperyear, end: ' mutations in total across all your cells.'},
{ start: 'You have likely mutated every base pair in your genome ', stat: baseperyear, end: ' times already.'}
] 
}

function renderHello() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, somestats);
  document.getElementById('target').innerHTML = rendered;
}
