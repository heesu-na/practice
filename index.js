  function check_input_len(val1, val2) {
      var len =  val1.length;
      var _val = document.querySelector('#_'+val2);
      if(len > 0) {
        _val.style.color="#ffbe2f";
        _val.style.top="-33px";
        _val.style.fontSize="15px";
        _val.style.padding="0";
        _val.style.transition="linear 0.15s";  
      } else {
        _val.style.color="darkgray";
        _val.style.top="-8px";
        _val.style.fontSize="18px";
        _val.style.transition="linear 0.05s"; 
      }
  }

  function check_focus(val1) {
      console.log("check");
    var _val = document.querySelector('#_'+val1);
    _val.style.color="darkgray";
  }