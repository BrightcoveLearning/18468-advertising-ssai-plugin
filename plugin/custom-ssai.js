videojs.registerPlugin('customSSAI', function() {
    var myPlayer = this;
    var adConfigId = "d6190656-2095-4ff3-8afe-1a0b60d67ed2";
		myPlayer.ssai();

		myPlayer.catalog.getVideo("5625751316001", function(error, video) {
			if (error) {
				myPlayer.error(error);
			} else {
				myPlayer.catalog.load(video);
				myPlayer.play();
			}
		}, adConfigId);

});
