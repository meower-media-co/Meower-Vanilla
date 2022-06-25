class Scratchtime {
    constructor (runtime, extensionId) {
		this.date = null;
    }
    getInfo () {
        return {
            "id": 'scratchtime',
            "name": 'Scratch Time',
            "blocks": [
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
				}
			]
        };
    };
	
	convertEpoch({epoch}) {
        this.date = new Date(epoch*1000);
        return JSON.stringify({y: this.date.getFullYear(), mo: (this.date.getMonth()+1), d: this.date.getDate(), h: this.date.getHours(), mi: this.date.getMinutes(), s: this.date.getSeconds(), ms: this.date.getMilliseconds()});
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
};

(function() {
    var extensionClass = Scratchtime;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
		console.log("Sandboxed mode detected, performance will suffer because of the extension being sandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()