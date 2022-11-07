import React, {useEffect, useRef} from 'react';

const MessengerPlugin = (showMsngr) => {
	const messengerRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		messengerRef.current.setAttribute('page_id', '100075490077422');
		messengerRef.current.setAttribute('attribution', 'biz_inbox');
		window.fbAsyncInit = function () {
			FB.init({
				xfbml: true,
				version: 'v15.0',
			});
		};

		(function (d, s, id) {
			let js; const
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}

			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	}, []);
	return (
		<div id='fb-root' style={{display: showMsngr ? 'block' : 'none'}} >
			<div ref={messengerRef} id='fb-customer-chat' className='fb-customerchat'/>
		</div>
	);
};

export default MessengerPlugin;
