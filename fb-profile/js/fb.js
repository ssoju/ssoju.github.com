// Facebook SDK
window.fbAsyncInit = function() {
  FB.init({
    appId      : '168448827061667',
    xfbml      : true,
    version    : 'v2.10'
  });
  FB.AppEvents.logPageView();
};
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 // Facebook Comments API
 (function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=168448827061667";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
