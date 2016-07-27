app.controller('PostCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {
  // POST DB
  $scope.posts = [
    {title: "Solar Impulse 2 completes round-the-world trip on sun power alone", date: "2016-12-02", content: "More than a year after it took off from Abu Dhabi, Solar Impulse 2 has completed its round-the-world trip. The solar-powered plane landed back again in Abu Dhabi last night, just over two days after it took off from Cairo late on July 23rd, completing the final leg of its long journey. The craft spent a total of 505 hours — more than 23 days — in the air, stopping at airports across Europe, North America, and Asia to avoid inclement weather, and to give its two pilots well-deserved breaks."},
    {title: "Amazon is expanding drone delivery testing in the UK", date: "2016-08-20", content: "Amazon is partnering with the British government to expand its testing of delivery drones, paving the way for commercial air deliveries for UK residents. The expanded testing, announced today in a press release, involves Amazon working with the UK Civil Aviation Authority to focus on operating drones outside of the line of site of pilots, improving sensors for obstacle detection and avoidance, and having one pilot operate a team of multiple, semi-autonomous drones in unison. The project is the latest regulatory victory for Prime Air, the online retailer's ambitious program designed to bring cheaper and more forward-thinking delivery logistics in-house."},
    {title: "The world’s largest amphibious airplane was just unveiled in China", date: "2016-02-09", content: "The AG600, the world’s largest seaplane, was rolled out by a state-run Chinese company last week, which experts say is the country’s latest effort to bolster its nascent aviation industry."},
    {title: "Oculus now supports up to four trackers", date: "2016-04-08", content: "Oculus Home was updated this past week to include support for up to four trackers on the Rift and Touch. This added functionality is likely a direct appeal to Steam game developers who haven't yet been able to develop motion-controlled games for the Oculus Rift, as the company prepares to release its Touch controllers later this year. Four trackers could ultimately improve accuracy and set a new standard for VR setups in the future, but still, it’s unclear how users are expected to set up all those USB connections. I hope they’ve got some creative cable techniques."},
    {title: "RiskBand is another portable panic button that doesn't need a phone", date: "2016-06-18", content: "Given that the general state of the world in 2016 could be classified as The Worst, it was only a matter of time before a tech company started selling gadgets to Make You Feel Safe Again. Enter RiskBand, a personal safety device from Whereable Technologies that can pinpoint your location anywhere in the world with the press of a button."},
    {title: "Sony is adding NFL Network and RedZone channels to PlayStation Vue", date: "2016-01-24", content: "Sony's streaming TV service just became a lot more attractive with the addition of NFL Network and NFL RedZone channels, both of which will arrive on PlayStation Vue in time for the 2016 season opener in September. So Vue subscribers will now have direct channel access to games and pre- and post-game coverage, whereas previously you needed to own a cable subscription to watch football through the NFL's dedicated apps. Sony says customers will also get standard Vue features like simultaneous streaming and cloud DVR, as well as access to the NFL's mobile, Windows, and set-top box apps for when they're not using a Vue-supported device."}
  ];

  // create new post
  $scope.createPost = function (index) {
    $scope.posts.push({ title: $scope.title_input, date: $scope.date_input, content: $scope.content_input});
    $scope.title_input = $scope.date_input = $scope.content_input = "";
  };

  // view post
  $scope.viewPost = function (index) {
    $uibModal.open({
      templateUrl: 'js/templates/post_modal.html',
      controller: 'ModalCtrl',
      resolve: {
        data: {
          post: $scope.posts[index]
        }
      }
    }).result.then(function(editPost){
      $scope.posts[index] = editPost;
    });
  };

  // delete post
  $scope.deletePost = function (index) {
    $scope.posts.splice(index, 1);
  };
}]);