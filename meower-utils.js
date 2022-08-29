// Type your JavaScript code here.

class MeowerUtils {
    constructor (runtime, window, extensionId) {
		this.icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMTMuOCIgaGVpZ2h0PSIxMDcuNDA3NDkiIHZpZXdCb3g9IjAsMCwxMTMuOCwxMDcuNDA3NDkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODMuMSwtMTI2LjI5NjI2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnPjxwYXRoIGQ9Ik0yOTYuOSwxOTYuNDAzNzRjMCwyOC4yIC0yNS41LDM3LjMgLTU2LjksMzcuM2MtMzEuNCwwIC01Ni45LC05IC01Ni45LC0zNy4zYzAsLTEzLjMgMy44LC0yOC40IDExLjksLTQwLjhsLTYuNywtMjIuNGMtMS4zLC00LjMgMywtOC4yIDcsLTYuNWwyMi4xLDkuMmM2LjUsLTIuOSAxNCwtNC42IDIyLjYsLTQuNmM4LjQsMCAxNS45LDEuNyAyMi40LDQuN2wyMi4zLC05LjNjNCwtMS42IDguMywyLjMgNyw2LjVsLTYuOCwyMi43YzguMSwxMi4yIDEyLDI3LjMgMTIsNDAuNXoiIGZpbGw9IiNmZjczMTkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yODQuNSwyMTQuMjAzNzRjMCwxNC44IC0yMCwxOS41IC00NC42LDE5LjVjLTI0LjYsMCAtNDQuNiwtNC43IC00NC42LC0xOS41YzAsLTE0LjggMTMuMywtMzQgNDQuNiwtMzRjMzAuNiwtMC4xIDQ0LjYsMTkuMiA0NC42LDM0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzNSwxODYuOTAzNzRjMCwtMiAyLjIsLTIuNiA1LC0yLjZjMi44LDAgNSwwLjYgNSwyLjZjMCwyIC0xLjUsNC41IC01LDQuNWMtMy41LDAgLTUsLTIuNSAtNSwtNC41eiIgZmlsbD0iIzk0NTYwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yNTYuOSwxOTMuNDAzNzRjMCw0LjcgLTMuOCw4LjQgLTguNSw4LjRjLTQuNywwIC04LjUsLTMuOCAtOC41LC04LjRjMCwtMC4yIDAsLTAuMiAwLC0wLjJjMCwtMC4zIDAsLTAuNSAwLC0wLjVjMCwwIDAsMC4yIDAsMC41YzAsMCAwLDAgMCwwLjJjMCw0LjcgLTMuOCw4LjQgLTguNSw4LjRjLTQuNywwIC04LjUsLTMuOCAtOC41LC04LjQiLz48L2c+PHBhdGggZD0iTTIyNS4zLDE2OS44MDM3NGMwLC0yLjY1MDk3IDIuMTQ5MDMsLTQuOCA0LjgsLTQuOGMyLjY1MDk3LDAgNC44LDIuMTQ5MDMgNC44LDQuOGMwLDIuNjUwOTcgLTIuMTQ5MDMsNC44IC00LjgsNC44Yy0yLjY1MDk3LDAgLTQuOCwtMi4xNDkwMyAtNC44LC00Ljh6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQ1LDE2OS44MDM3NGMwLC0yLjY1MDk3IDIuMTQ5MDMsLTQuOCA0LjgsLTQuOGMyLjY1MDk3LDAgNC44LDIuMTQ5MDMgNC44LDQuOGMwLDIuNjUwOTcgLTIuMTQ5MDMsNC44IC00LjgsNC44Yy0yLjY1MDk3LDAgLTQuOCwtMi4xNDkwMyAtNC44LC00Ljh6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjA1LjIsMTQ0LjQwMzc0Yy0zLjIsMi45IC01LjksNS41IC04LjMsOS41bC02LC0yMC44Yy0wLjQsLTIuNSAxLjksLTQuNiA0LjQsLTMuOWwxOS45LDguM2MtNC41LDEuOCAtNy4xLDQuMiAtMTAsNi45eiIgZmlsbD0iIzc3NTAwYyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI2NS4yLDEzNy41MDM3NGwxOS45LC04LjNjMi41LC0wLjcgNC44LDEuNCA0LjQsMy45bC02LDIwLjhjLTIuNCwtNCAtNS4xLC02LjYgLTguMywtOS41Yy0yLjksLTIuNyAtNS41LC01LjEgLTEwLC02Ljl6IiBmaWxsPSIjNzc1MDBjIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PC9nPjwvZz48L3N2Zz4=';
        this.runtime = runtime;
		this.window = window;
		this.audio_player = new Audio();
		this.popup_got_data = false;
		// To prevent destroying of images that weren't made with the extension
		this.createdImages = new Set();
    }

    getInfo () {
        return {
            "id": 'meower',
            "name": 'Meower Utils',
			"blockIconURI": this.icon,
			"menuIconURI": this.icon,
            color1: '#b53e02',
			color2: '#b53e02',
			color3: '#b53e02',
            "blocks": [
				{
					"opcode": 'getImage',
					"blockType": "reporter",
					"text": 'new image from URL [IMAGEURL]',
					"arguments": {
						"IMAGEURL": {
							"type": "string",
							"defaultValue": 'https://svelte.meower.org/assets/logo.22ae43ae.svg',
						},
					},
				},
				{
					"opcode": 'drawImage',
					"blockType": "command",
					"text": 'stamp image [IMG] at x: [X] y: [Y] x scale: [XSCALE] y scale: [YSCALE]',
					"arguments": {
						"IMG": {
							"type": "number",
							"defaultValue": 0,
						},
						"X": {
							"type": "number",
							"defaultValue": 0,
						},
						"Y": {
							"type": "number",
							"defaultValue": 0,
						},
						"XSCALE": {
							"type": "number",
							"defaultValue": 100,
						},
						"YSCALE": {
							"type": "number",
							"defaultValue": 100,
						},
					},
				},
				{
					"opcode": 'deleteImage',
					"blockType": "command",
					"text": 'delete image [IMG]',
					"arguments": {
						"IMG": {
							"type": "number",
							"defaultValue": 0,
						},
					},
				},
                {
					"opcode": 'getImageSize',
					"blockType": "reporter",
					"text": 'get image size [IMG]',
					"arguments": {
						"IMG": {
							"type": "number",
							"defaultValue": 0,
						},
					},
				},
				{
                	"opcode": 'playAudioFromURL',
                    "blockType": "command",
                    "text": 'Play audio [URL]',
					"arguments": {
						"URL": {
							"type": "string",
							"defaultValue": 'https://api.meower.org/static/bgm/2.mp3',
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
	async getImage({IMAGEURL}) {
		try {
			const resp = await fetch(IMAGEURL);
			const type = resp.headers.get("Content-Type");
			
			if (!resp.ok) {
				return "";
			}
			
			let skinId;
			switch (type) {
				case "image/svg+xml":
				case "image/svg":
					skinId = this.runtime.renderer.createSVGSkin(await resp.text());
				break;
				case "image/png":
				case "image/bmp":
				case "image/jpeg":
					const image = new Image();
					image.crossOrigin = "anonymous";
					image.src = IMAGEURL;
					await image.decode();
					skinId = this.runtime.renderer.createBitmapSkin(image, 1);
				break;
				default:
					return "";
				break;
			}
			
			const drawableId = this.runtime.renderer.createDrawable("sprite");
			const img = this.runtime.renderer._allDrawables[drawableId];
			img.updateVisible(false);
			img.skin = vm.runtime.renderer._allSkins[skinId];
			this.createdImages.add(drawableId);
			return drawableId;
		} catch(e) {
			console.error("Error creating image:", e);
			return "";
		}
	};
	drawImage({IMG, X, Y, XSCALE, YSCALE}) {
		try {
			if (!this.runtime.renderer._penSkinId) return;
			if (
				!this.runtime.renderer._allDrawables[IMG] || !this.createdImages.has(IMG)
			) return;
			this.runtime.renderer._allDrawables[IMG].updatePosition([
				Number(X) || 0,
				Number(Y) || 0,
			]);
			this.runtime.renderer._allDrawables[IMG].updateScale([
				XSCALE || 0,
				YSCALE || 0,
			]);
			this.runtime.renderer.penStamp(
				this.runtime.renderer._penSkinId, IMG
			);
		} catch(e) {
			console.error("Error drawing image:", e);
		}
	};
	deleteImage({IMG}) {
		try {
			if (
				!this.runtime.renderer._allDrawables[IMG] || !this.createdImages.has(IMG)
			) return;
			this.createdImages.delete(IMG);
			this.runtime.renderer.destroyDrawable(IMG, "sprite");
		} catch(e) {
			console.error("Error deleting image:", e);
		}
	};
    getImageSize({IMG}) {
        if (this.runtime.renderer._allDrawables[IMG] || this.createdImages.has(IMG)) {
            let img_data = this.runtime.renderer._allDrawables[IMG].getAABB();
            let img_width = (img_data["right"] - img_data["left"]);
            let img_height = (img_data["top"] - img_data["bottom"]);
            return JSON.stringify({"w": img_width, "h": img_height})
        }
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
		if (this.difference == 1) {
			return String(this.difference) + [" second ago", " minute ago", " hour ago", " day ago", " month ago", " year ago"][this.time_unit];
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

(function() {
    var extensionClass = MeowerUtils;
    if (typeof window === "undefined" || !window.vm) {
        console.log("Meower Utils cannot load in sandbox mode.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime, window);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
        console.log("Meower Utils loaded!");
        isInit = true;
    };
})()