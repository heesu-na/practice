//var idIndicator = document.getElementById('_id');
//var pwdIndicator = document.getElementById('_pwd');

function check_input_len(val1, val2) {
    var len =  val1.length;
    var _val = document.getElementById('_'+val2);
    if(len > 0) {
        _val.classList.add('value', 'focus_in');
    } else {
        _val.classList.remove('value', 'focus_in');
    }
}
function focus_in(val1, val2) {
    var len =  val1.length;
    var layout_val = document.getElementById(val2); 
    var _val = document.getElementById('_'+val2);
    
    layout_val.classList.add('focus_layout');
    if(len > 0) {
        _val.classList.remove('focus_out');
        _val.classList.add('focus_in');
    } else {
        _val.classList.remove('focus_out');
    }
}

function focus_out(val) {
    var _val = document.getElementById('_'+val);
    var layout_val = document.getElementById(val); 

    layout_val.classList.remove('focus_layout');
    _val.classList.add('focus_out');
}

  function show_or_hide(e) {
      var pwd = document.getElementById('pwd');
      if (e.target.checked==true){
          pwd.type = "text";
      } else {
          pwd.type = "password";
      }
  }
  function show_checkbox() {
    var show = document.getElementById('show_check');
    show.classList.add('show');
  }

  function hide_checkbox() {
    var id = document.getElementById('pwd');
    var isFocus = id.classList.contains('focus_layout');
    var len = id.value.length;
    if ((isFocus == false) && (len == 0)){
        var show = document.getElementById('show_check');
        show.classList.remove('show');
    }
  }