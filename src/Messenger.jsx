import React, {useEffect, useRef} from 'react';

const MessengerPlugin = () => {
    const MessengerRef = useRef();
    useEffect(() => {
    // MessengerRef.current.setAttribute("page_id", 100087453825879);
    // MessengerRef.current.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '436820911941202',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
      });
    };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/ru_RU/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

}, [])
	return (
    <div class="fb-customerchat"
    page_id="100087453825879"
    logged_in_greeting="Hello. How we can help you?"
    logged_out_greeting="Hello. How we can help you?">
  </div>
	);
};

export default MessengerPlugin;