class MeowerUtils {
    constructor (runtime, window, extensionId) {
		this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwRkJEOEM7fQ0KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy41MDAxNCwtMTU3LjUwMDEzKSI+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTcuNSwxODBjMC0xMi40LDEwLjEtMjIuNSwyMi41LTIyLjVzMjIuNSwxMC4xLDIyLjUsMjIuNXMtMTAuMSwyMi41LTIyLjUsMjIuNVMyMTcuNSwxOTIuNCwyMTcuNSwxODANCgkJCUwyMTcuNSwxODB6Ii8+DQoJCTxnPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzMC4zLDE4MC4xYzUuNy00LjcsMTMuOS00LjcsMTkuNiwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjI1LjMsMTc1LjFjOC40LTcuNCwyMS03LjQsMjkuNCwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjM1LjIsMTg1YzIuOS0yLjEsNi44LTIuMSw5LjcsMCIvPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI0MCwxOTAuNEwyNDAsMTkwLjQiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		this.runtime = runtime;
		this.window = window;
		this.audio_player = new Audio();
		this.popup_got_data = false;
    }

    getInfo () {
        return {
            "id": 'meower',
            "name": 'Meower Utils',
			"blockIconURI": this.icon,
			"menuIconURI": this.icon,
            "blocks": [
				{
                	"opcode": 'playAudioFromURL',
                    "blockType": "command",
                    "text": 'Play audio [URL]',
					"arguments": {
						"URL": {
							"type": "string",
							"defaultValue": 'https://dev.meower.org/bgm/2.mp3',
						},
					},
                },
				{
                	"opcode": 'stopAudio',
                    "blockType": "command",
                    "text": 'Stop audio',
					"arguments": {},
                },
				{
                	"opcode": 'convertEpoch',
                    "blockType": "reporter",
                    "text": 'Epoch to local time [epoch]',
					"arguments": {
						"epoch": {
							"type": "number",
							"defaultValue": 0,
						},
					}
                },
				{
					"opcode": 'convertEpochtoRelative',
					"blockType": "reporter",
					"text": 'Epoch to relative time [epoch]',
					"arguments": {
						"epoch": {
							"type": "number",
							"defaultValue": 0,
						},
					}
				},
				{
                	"opcode": 'convertDS2000toEpoch',
                    "blockType": "reporter",
                    "text": 'Days since 2000 to epoch [ds2000]',
					"arguments": {
						"ds2000": {
							"type": "number",
							"defaultValue": 0,
						},
					}
                },
				{
                	"opcode": 'convertDS2000toLocalTime',
                    "blockType": "reporter",
                    "text": 'Days since 2000 to local time [ds2000]',
					"arguments": {
						"ds2000": {
							"type": "number",
							"defaultValue": 0,
						},
					}
                },
				{
                	"opcode": 'getEpoch',
                    "blockType": "reporter",
                    "text": 'Current epoch',
                },
				{
					"opcode": 'getDS2000fromEpoch',
                    "blockType": "reporter",
                    "text": 'Days since 2000 from epoch [epoch]',
					"arguments": {
						"epoch": {
							"type": "number",
							"defaultValue": 0,
						},
					}
				},
				{
					"opcode": "loginPopup",
					"blockType": "command",
					"text": "Test popup",
					"arguments": {},
				},
				{
					"opcode": "loginInfoGot",
					"blockType": "reporter",
					"text": "Login info got",
					"arguments": {},
				},
				{
					"opcode": "gotLoginInfo",
					"blockType": "reporter",
					"text": "Login info",
					"arguments": {},
				},
			]
        };
    };

	playAudioFromURL({URL}) {
		this.audio_player.pause();
		this.audio_player.currentTime = 0;
		this.audio_player.src = URL;
		this.audio_player.play();
		this.audio_player.loop = true;
	};

	stopAudio({}) {
		this.audio_player.pause();
		this.audio_player.currentTime = 0;
		this.audio_player.src = null;
	};

	convertEpoch({epoch}) {
        this.date = new Date(epoch*1000);
        return JSON.stringify({y: this.date.getFullYear(), mo: (this.date.getMonth()+1), d: this.date.getDate(), h: this.date.getHours(), mi: this.date.getMinutes(), s: this.date.getSeconds(), ms: this.date.getMilliseconds()});
	};

	convertEpochtoRelative({epoch}) {
		this.current_date = new Date();
		this.current_epoch = this.current_date.getTime() / 1000;
		this.difference = (this.current_epoch - epoch);
		if (this.difference < 60) {
			// Less than a minute has passed:
			this.time_unit = 0;
			this.difference = Math.round(this.difference);
		} else if (this.difference < 3600) {
			// Less than an hour has passed:
			this.time_unit = 1;
			this.difference =  Math.round(this.difference / 60);
		} else if (this.difference < 86400) {
			// Less than a day has passed:
			this.time_unit = 2;
			this.difference =  Math.round(this.difference / 3600);
		} else if (this.difference < 2620800) {
			// Less than a month has passed:
			this.time_unit = 3;
			this.difference =  Math.round(this.difference / 86400);
		} else if (this.difference < 31449600) {
			// Less than a year has passed:
			this.time_unit = 4;
			this.difference =  Math.round(this.difference / 2620800);
		} else {
			// More than a year has passed:
			this.time_unit = 5;
			this.difference =  Math.round(this.difference / 31449600);
		}
        if (this.difference <= 0) {
            return "just now";
        } else if (this.difference == 1) {
			return ["a second ago", "a minute ago", "a hour ago", "a day ago", "a month ago", "a year ago"][this.time_unit];
		} else {
			return String(this.difference) + [" seconds ago", " minutes ago", " hours ago", " days ago", " months ago", " years ago"][this.time_unit];
		}
	};
	
	convertDS2000toLocalTime({ds2000}) {
		this.epoch = ((ds2000 * 86400) + 946684800);
		this.date = new Date(this.epoch*1000);
		return JSON.stringify({y: this.date.getFullYear(), mo: (this.date.getMonth()+1), d: this.date.getDate(), h: this.date.getHours(), mi: this.date.getMinutes(), s: this.date.getSeconds(), ms: this.date.getMilliseconds()});
	};
	
	convertDS2000toEpoch({ds2000}) {
		return ((ds2000 * 86400) + 946684800);
	};
	
	getEpoch() {
		this.date = new Date();
		return (this.date.getTime() / 1000);
	};
	
	getDS2000fromEpoch({epoch}) {
		return ((epoch - 946684800) / 86400);
	};

	loginInfoGot({}) {
		return this.popup_got_data;
	};

	gotLoginInfo({}) {
		return this.popup_data;
	};

	loginPopup({}) {
		var popup = this.window.open("http://localhost:8080/", "Meower Login", "width=400,height=400");
		this.window.addEventListener("message", (event) => {
			this.popup_data = event.data;
			this.popup_got_data = true;
			popup.close();
		}, false);
	};
};

var extensionClass = MeowerUtils;
if (typeof window === "undefined" || !window.vm) {
    Scratch.extensions.register(new extensionClass());
    console.log("Sandboxed mode detected, performance will suffer because of the extension being sandboxed.");
} else {
    var extensionInstance = new extensionClass(window.vm.extensionManager.runtime, window);
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
    console.log("Unsandboxed mode detected. Good.");
};
