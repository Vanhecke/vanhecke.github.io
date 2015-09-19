$.ajax({
  type: 'GET',
  url: 'http://ipinfo.io/?callback=?',
  dataType: 'jsonp',
  timeout: 1000,
  context: $('body'),
  success: function(data){
    latitude = parseFloat(data.loc.split(",")[0]);
    longitude = parseFloat(data.loc.split(",")[1]);

    var sunrise = new Date().sunrise(latitude, longitude);
    var sunset = new Date().sunset(latitude, longitude);
    var now = new Date();
    if(now > sunrise && now < sunset) {
      // nothing
    } else {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = "cssDark";
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'css/solarized-dark.min.css';
      link.media = 'all';
      head.appendChild(link);
    }
  },
  error: function(xhr, type){
    console.error(type);
    console.error(xhr);
  }
});

$('html').show();
