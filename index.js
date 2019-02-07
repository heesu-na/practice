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
    var pwd = document.getElementById('pwd');
    var isFocus = pwd.classList.contains('focus_layout');
    var len = pwd.value.length;
    if ((isFocus == false) && (len == 0)){
        var show = document.getElementById('show_check');
        show.classList.remove('show');
    }
  }

  function submit_login() {
    console.log('hihihi');
      var id = document.getElementById('id');
      var pwd = document.getElementById('pwd');
      var layer = document.getElementById('layer2');
      
      if((id.value.length == 0) || (pwd.value.length == 0)) {
          layer.classList.add('animation');
      }
  }

  function point_cursor() {
      var btn = document.getElementById('btn');
      btn.classList.add('btn_cursor');
  }

  function check_validation_in(val) {
      var extraInfo_val = document.getElementById(val+'_extraInfo');
      extraInfo_val.classList.add('focus_extraInfo');
      if(val == 'pwd'){
          extraInfo_val.innerHTML = 'Type 6 characters or more';
      }
  }

  function check_validation_out(val) {
    var extraInfo_val = document.getElementById(val+'_extraInfo');
    extraInfo_val.innerHTML = '';
    extraInfo_val.classList.remove('focus_extraInfo');
  if(val == 'id'){
      var ch;
      var id_val = document.getElementById(val);
      var len = id_val.value.length;
      if(len <= 2) {
        extraInfo_val.classList.add('focus_extraInfo');
        extraInfo_val.innerHTML = "Your username is probably longer than this. can you double check?";
      } else {
      for(i=0; i<len; i++){
          ch = id_val.value.charAt(i);
          if(!(ch>='0' && ch<='9') && !(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z') && !(ch=='_')) {
              extraInfo_val.classList.add('focus_extraInfo');
              extraInfo_val.innerHTML = "use letters, numbers or '_'. (e.g. arya_starks)";
              break;
          }
      } 
    }
  }
}