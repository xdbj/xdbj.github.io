function getRandomHex() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
      
    }
    
    return color;
       
  }
    function a() {
        let col = getRandomHex();
      document.getElementById("colt").style.backgroundColor = col


    }
      let col = getRandomHex();
      document.getElementById("colt").style.backgroundColor = col