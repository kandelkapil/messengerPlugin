import React, {useEffect, useRef} from 'react';

const MessengerPlugin = (showMsngr) => {
  useEffect(()=>{
    const chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("100075490077422", "PAGE-ID");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'API-VERSION'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },[])
	return (
    <>
<div id="fb-root"></div>
<div id="fb-customer-chat" class="fb-customerchat"></div>
</>

	);
};

export default MessengerPlugin;
