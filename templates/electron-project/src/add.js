const { remote, ipcRenderer } = require('electron');

const close = document.getElementById('close-btn');

close.addEventListener('click', (event) => {
	let window = remote.getCurrentWindow();
	window.close();
});

const update = document.getElementById('update-btn');

update.addEventListener('click', () => {
	ipcRenderer.send(
		'update-notify-value',
		document.getElementById('notify-val').value
	);

	let window = remote.getCurrentWindow();
	window.close();
});
