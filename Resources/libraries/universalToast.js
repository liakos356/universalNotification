exports.show = function(message, duration) {

	if (typeof duration === 'undefined') duration = 2000;

	if (Ti.Platform.name == 'android') {

		(duration >= 2000) ? duration = Titanium.UI.NOTIFICATION_DURATION_SHORT: duration = Titanium.UI.NOTIFICATION_DURATION_LONG;

		Ti.UI.createNotification({
			message: message,
			duration: duration
		}).show();
		
	} else if (Ti.Platform.name == 'iOS') {

		var notificationWin = Ti.UI.createWindow({
			width: '70%',
			height: '20%',
			backgroundColor: 'transparent',
			bottom: 0,
		});

		var view = Ti.UI.createView({
			width: Titanium.UI.SIZE,
			height: '80%',
			backgroundColor: '#4F4F4F',
			borderRadius: 10,
			opacity: 0,
		});

		var label = Ti.UI.createLabel({
			text: "\n" + "   " + message + "   " + "\n",
			color: "white",
			textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
		});

		notificationWin.addEventListener("postlayout", function() {
			view.animate({
				opacity: 1,
				duration: duration * 0.5
			}, function() {
				setTimeout(function() {
					view.animate({
						opacity: 0,
						duration: duration * 0.5,
					}, function() {
						notificationWin.close();
						for (var prop in notificationWin) {
							notificationWin[prop] = undefined;
						}
						notificationWin = undefined;
					})
				}, duration);
			})
		});
		view.add(label);
		notificationWin.add(view);
		notificationWin.open();
	}
};