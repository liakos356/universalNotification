var toastNotification = require('libraries/universalToast');
var win = Ti.UI.createWindow({
 width: Titanium.UI.FILL,
 height: Titanium.UI.FILL,
 backgroundColor: 'red',
});
var button = Ti.UI.createButton({
 backgroundColor: 'yellow',
 title: 'pressMe\n'
});
var message = (Ti.Platform.name == 'iOS') ? 'Hooray!!!\nToast for iPhone!!!' : "Same old android toast notification";

button.addEventListener("click", function() {
 toastNotification.show(message, 1000);
});

win.add(button);
win.open();