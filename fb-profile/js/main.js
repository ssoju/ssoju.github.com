document.getElementById('share').onclick = function() {
  FB.ui({
    method: 'feed',
    link: 'https://ssoju.github.io/',
    caption: 'My Facebook profile application',
  }, function(response){
    if (response && !response.error_message) {
      console.log('Posting completed.');
    } else {
      console.log('Error while posting.');
    }
  });
};
