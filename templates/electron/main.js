const { app, BrowserWindow } = require('electron');
const { nativeTheme } = require('electron');
nativeTheme.themeSource = 'light';

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// and load the index.html of the app.
	win.loadFile('./src/index.html');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// pentru macOS
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// Pentru macOS
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
