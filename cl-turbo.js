class Networking {
    constructor (runtime, extensionId) {
		this.cl_icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwRkJEOEM7fQ0KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy41MDAxNCwtMTU3LjUwMDEzKSI+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTcuNSwxODBjMC0xMi40LDEwLjEtMjIuNSwyMi41LTIyLjVzMjIuNSwxMC4xLDIyLjUsMjIuNXMtMTAuMSwyMi41LTIyLjUsMjIuNVMyMTcuNSwxOTIuNCwyMTcuNSwxODANCgkJCUwyMTcuNSwxODB6Ii8+DQoJCTxnPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzMC4zLDE4MC4xYzUuNy00LjcsMTMuOS00LjcsMTkuNiwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjI1LjMsMTc1LjFjOC40LTcuNCwyMS03LjQsMjkuNCwwIi8+DQoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjM1LjIsMTg1YzIuOS0yLjEsNi44LTIuMSw5LjcsMCIvPg0KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI0MCwxOTAuNEwyNDAsMTkwLjQiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		this.cl_block = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NSA0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUgNDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIuOCwyMi42YzUuNy00LjcsMTMuOS00LjcsMTkuNiwwIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcuOCwxNy42YzguNC03LjQsMjEtNy40LDI5LjQsMCIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy43LDI3LjVjMi45LTIuMSw2LjgtMi4xLDkuNywwIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjUsMzIuOUwyMi41LDMyLjkiLz4NCjwvZz4NCjwvc3ZnPg0K';
		this.isRunning = false;
		this.socketData = "";
		this.runtime = runtime;

		this.connect_hat = 0;
		this.packet_hat = 0;
		this.close_hat = 0;
		this.link_status = 0;

		this.packet_queue = {};
		this.listening_for_packet = {};
		this.specific_packet_listener = {};
    }

    getInfo () {
        return {
            "id": 'networking',
            "name": 'CloudLink TURBO',
			"blockIconURI": this.cl_block,
			"menuIconURI": this.cl_icon,
            "blocks": [
				{
                	"opcode": 'linkState',
                    "blockType": "reporter",
                    "text": 'Link Status'
                },
                {
                	"opcode": 'getSocketData',
                    "blockType": "reporter",
                    "text": 'Socket Data'
                },
				{
                	"opcode": 'getQueueSize',
                    "blockType": "reporter",
                    "text": 'Packet Queue Size'
                },
				{
                	"opcode": 'rawPacketQueue',
                    "blockType": "reporter",
                    "text": 'Packet Queue'
                },
				{
                	"opcode": 'getQueueItem',
                    "blockType": "reporter",
                    "text": 'Item [item] of Packet Queue',
					"arguments": {
						"item": {
							"type": "number",
							"defaultValue": 1,
						},
					}
                },
				{
					"opcode": 'fetchURL', 
					"blockType": "reporter",
					"blockAllThreads": "true",
					"text": 'Fetch data from URL [url]',
					"arguments": {
						"url": {
							"type": "string",
							"defaultValue": 'https://mikedev101.github.io/cloudlink/fetch_test',
						},
					}
				},
				{
                	"opcode": 'makeJSON',
                    "blockType": "reporter",
                    "text": 'Convert [toBeJSONified] to JSON',
					"arguments": {
						"toBeJSONified": {
							"type": "string",
							"defaultValue": '{"test": true}',
						},
					}
                },
				{
					"opcode": 'parseJSON',
					"blockType": "reporter",
					"text": '[PATH] of [JSON_STRING]',
					"arguments": {
						"PATH": {
							"type": "string",
							"defaultValue": 'fruit/apples',
						},
						"JSON_STRING": {
							"type": "string",
							"defaultValue": '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}',
						},
					},
				},
				{
                	"opcode": 'isValidJSON',
                    "blockType": "Boolean",
                    "text": 'Is [JSON_STRING] valid JSON?',
					"arguments": {
						"JSON_STRING": {
							"type": "string",
							"defaultValue": '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}',
						},
					},
                },
                {
                	"opcode": 'getSocketState',
                    "blockType": "Boolean",
                    "text": 'Connected?',
                },
				{
                	"opcode": 'onConnect',
                    "blockType": "hat",
                    "text": 'On Connect',
                },
				{
                	"opcode": 'onPacket',
                    "blockType": "hat",
                    "text": 'On New Socket Data',
                },
				{
                	"opcode": 'onPacketWithCMD',
                    "blockType": "hat",
					"text": 'On New Socket Data with CMD: [CMD]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						}
                    }
                },
				{
                	"opcode": 'onClose',
                    "blockType": "hat",
                    "text": 'On Disconnect',
                },
				{
                	"opcode": 'sendData',
                    "blockType": "command",
                    "text": 'Send [DATA]',
					"blockAllThreads": "true",
                    "arguments": {
                        "DATA": {
                            "type": "string",
                            "defaultValue": '{"foo": "bar"}'
                        }
                    }
                },
				{
                	"opcode": 'sendDataWithResponse',
                    "blockType": "command",
                    "text": 'Send [DATA] for listener CMD: [CMD] Listener ID: [ID]',
					"blockAllThreads": "true",
                    "arguments": {
                        "DATA": {
                            "type": "string",
                            "defaultValue": '{"foo": "bar"}'
                        },
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
                    }
                },
				{
                    "opcode": 'openSocket',
                    "blockType": "command",
                    "text": 'Connect to [ADDRESS]',
					"blockAllThreads": "true",
					"arguments": {
						"ADDRESS": {
							"type": "string",
							"defaultValue": 'ws://127.0.0.1:3000/',
						},
					},
                },
                {
                	"opcode": 'closeSocket',
                    "blockType": "command",
					"blockAllThreads": "true",
                    "text": 'Disconnect',
                },
				{
                	"opcode": 'clearPacketQueue',
                    "blockType": "command",
					"blockAllThreads": "true",
                    "text": 'Clear Packet Queue',
                },
				{
                	"opcode": 'registerNewListener',
                    "blockType": "command",
					"text": 'Create new listener for CMD: [CMD] Listener ID: [ID]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
					},
                },
				{
                	"opcode": 'resetListener',
                    "blockType": "command",
					"text": 'Reset listener for CMD: [CMD] Listener ID: [ID]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
					},
                },
				{
                	"opcode": 'waitForResponse',
                    "blockType": "Boolean",
					"text": 'Listen for packet with CMD: [CMD]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
					},
                },
				{
                	"opcode": 'waitForListenerResponse',
                    "blockType": "Boolean",
					"text": 'Listen for packet for CMD: [CMD] Listener ID: [ID]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
					},
                },
				{
                	"opcode": 'checkJSONforValue',
                    "blockType": "Boolean",
					"text": 'Does JSON [JSON_STRING] contains [VALUE]?',
					"arguments": {
						"JSON_STRING": {
							"type": "string",
							"defaultValue": '{"foo": "bar"}',
						},
						"VALUE": {
							"type": "string",
							"defaultValue": 'bar',
						},
					},
                },
				{
                	"opcode": 'getPacketResponse',
                    "blockType": "reporter",
                    "text": 'Packet Response for [CMD]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
					},
                },
				{
                	"opcode": 'getPacketResponseQueueNumb',
                    "blockType": "reporter",
                    "text": 'Packet Response Queue Number for [CMD]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
					},
                },
				{
                	"opcode": 'getListenerPacketResponse',
                    "blockType": "reporter",
                    "text": 'Listener Response for CMD: [CMD] Listener ID: [ID]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
					},
                },
				{
                	"opcode": 'getListenerPacketResponseQueueNumb',
                    "blockType": "reporter",
                    "text": 'Listener Response Queue Number for CMD: [CMD] Listener ID: [ID]',
					"arguments": {
						"CMD": {
							"type": "string",
							"defaultValue": 'statuscode',
						},
						"ID": {
							"type": "string",
							"defaultValue": 'listen0',
						},
					},
                },
			]
        };
    };
	
	registerNewListener({CMD, ID}) {
		if (this.isRunning) {
			if (!(String(CMD) in this.specific_packet_listener)) {
				this.specific_packet_listener[String(CMD)] = {};
			};
			if (!(String(ID) in this.specific_packet_listener[String(CMD)])) {
				this.specific_packet_listener[String(CMD)][String(ID)] = {"returned": false, "val": "", "queue": -1};
				console.log("Registered new listener:", String(ID));
			};
		};
	};
	
	resetListener({CMD, ID}) {
		if (this.isRunning) {
			if ((String(CMD) in this.specific_packet_listener) && (String(ID) in this.specific_packet_listener[String(CMD)])) {
				this.specific_packet_listener[String(CMD)][String(ID)]["returned"] = false;
			};
		};
	};
	
	checkJSONforValue({JSON_STRING, VALUE}) {
		try {
			return Object.values(JSON.parse(JSON_STRING)).includes(VALUE);
		} catch(err) {
			return false;
		};
	};
	
	waitForResponse({CMD}) {
		if (this.isRunning) {
			if (!(String(CMD) in this.listening_for_packet)) {
				this.listening_for_packet[String(CMD)] = {"returned": false, "val": "", "queue": -1};
				return false;
			} else if (this.listening_for_packet[String(CMD)]["returned"]) {
				this.listening_for_packet[String(CMD)]["returned"] = false;
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
	};
	
	waitForListenerResponse({CMD, ID}) {
		if (this.isRunning) {
			if ((String(CMD) in this.specific_packet_listener) && (String(ID) in this.specific_packet_listener[String(CMD)])) {
				return (this.specific_packet_listener[String(CMD)][String(ID)]["returned"]);
			} else {
				return false;
			};
		} else {
			return false;
		}
	};
	
	getListenerPacketResponse({CMD, ID}) {
		if (this.isRunning) {
			try {
				return JSON.stringify(this.specific_packet_listener[String(CMD)][String(ID)]["val"]);
			} catch(err) {
				// console.log(err);
				return "";
			};
		} else {
			return "";
		};
	};
	
	getListenerPacketResponseQueueNumb({CMD, ID}) {
		if (this.isRunning) {
			try {
				return this.specific_packet_listener[String(CMD)][String(ID)]["queue"];
			} catch(err) {
				// console.log(err);
				return "";
			};
		} else {
			return "";
		};
	}
	
	getPacketResponse({CMD}) {
		if (this.isRunning) {
			try {
				return JSON.stringify(this.listening_for_packet[String(CMD)]["val"]);
			} catch(err) {
				// console.log(err);
				return "";
			};
		} else {
			return "";
		};
	};
	
	getPacketResponseQueueNumb({CMD}) {
		if (this.isRunning) {
			try {
				return this.listening_for_packet[String(CMD)]["queue"];
			} catch(err) {
				// console.log(err);
				return "";
			};
		} else {
			return "";
		};
	}
	
	linkState() {
		return Number(this.link_status);
	}
	
	getQueueItem(args) {
		try {
			return JSON.stringify(this.packet_queue[args.item]);
		} catch(err) {
			// console.log(err);
			return "";
		};
	};
	
	rawPacketQueue() {
		return JSON.stringify(this.packet_queue);
	}
	
	getQueueSize() {
		return Number(Object.keys(this.packet_queue).length);
	};
	
	clearPacketQueue() {
		this.packet_queue = {};
	};
	
	isValidJSON({JSON_STRING}) {
		try {
			JSON.parse(JSON_STRING);
			return true;
		} catch(err) {
			return false;
		}
	};
	
	makeJSON({
		toBeJSONified
	}) {
		console.log(typeof(toBeJSONified));
		if (typeof(toBeJSONified) == "string") {
			try {
				JSON.parse(toBeJSONified);
				return String(toBeJSONified);
			} catch(err) {
				return "Not JSON!";
			}
		} else if (typeof(toBeJSONified) == "object") {
			return JSON.stringify(toBeJSONified);
		} else {
			return "Not JSON!";
		};
	};
	
	onClose() {
		if (this.close_hat == 0 && !this.isRunning) {
			this.close_hat = 1;
			return true;
		} else {
			return false;
		};
	};
	
	onPacket() {
		if (this.packet_hat == 0 && this.isRunning) {
			this.packet_hat = 1;
			return true;
		} else {
			return false;
		};
	};
	
	onPacketWithCMD({CMD}) {
		if (this.isRunning) {
			if (!(String(CMD) in this.listening_for_packet)) {
				this.listening_for_packet[String(CMD)] = {"returned": false, "val": "", "queue": -1};
				return false;
			} else if (this.listening_for_packet[String(CMD)]["returned"]) {
				this.listening_for_packet[String(CMD)]["returned"] = false;
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
	};
	
	onConnect() {
		if (this.connect_hat == 0 && this.isRunning) {
			this.connect_hat = 1;
			return true;
		} else {
			return false;
		};
	};
	
	fetchURL(args) {
		return fetch(args.url).then(response => response.text());
	};
	
	parseJSON({
		PATH,
		JSON_STRING
	}) {
		try {
			const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
			if (path[0] === '') path.splice(0, 1);
			if (path[path.length - 1] === '') path.splice(-1, 1);
			let json;
			try {
				json = JSON.parse(' ' + JSON_STRING);
			} catch (e) {
				return e.message;
			};
			path.forEach(prop => json = json[prop]);
			if (json === null) return 'null';
			else if (json === undefined) return '';
			else if (typeof json === 'object') return JSON.stringify(json);
			else return json.toString();
		} catch (err) {
			return '';
		};
	};
	
    openSocket({
		ADDRESS
	}) {
    	if (this.isRunning == false) {
    		console.log("Starting socket.");
			const self = this;
			self.link_status = 1;
    		this.mWS = new WebSocket(String(ADDRESS));
    		
    		this.mWS.onerror = function(){
    			self.isRunning = false;
				console.log("failed to connect to the server.");
				self.link_status = 3;
    		};
    		this.mWS.onopen = function(){
    			self.isRunning = true;
				self.packet_queue = {};
				self.link_status = 2;
    			console.log("successfully connected to the server.");
    		};
			this.mWS.onmessage = function(event){
   				self.socketData = JSON.parse(event.data);
				self.packet_hat = 0;
				
				if (String(self.socketData["cmd"]) in self.listening_for_packet) {
					if (!(self.listening_for_packet[String(self.socketData["cmd"])]["returned"])) {
						self.listening_for_packet[String(self.socketData["cmd"])]["val"] = self.socketData;
						self.listening_for_packet[String(self.socketData["cmd"])]["returned"] = true;
						self.listening_for_packet[String(self.socketData["cmd"])]["queue"] = (Number(Object.keys(self.packet_queue).length) + 1);
						console.log("GOT RESPONSE FOR", String(self.socketData["cmd"]), ":", self.socketData);
					};
				};
				
				if (String(self.socketData["cmd"]) in self.specific_packet_listener){
					if ("listener" in self.socketData) {
						if (String(self.socketData["listener"]) in self.specific_packet_listener[String(self.socketData["cmd"])]) {
							if (!(self.specific_packet_listener[String(self.socketData["cmd"])][String(self.socketData["listener"])]["returned"])) {
								self.specific_packet_listener[String(self.socketData["cmd"])][String(self.socketData["listener"])]["val"] = self.socketData;
								self.specific_packet_listener[String(self.socketData["cmd"])][String(self.socketData["listener"])]["returned"] = true;
								self.specific_packet_listener[String(self.socketData["cmd"])][String(self.socketData["listener"])]["queue"] = (Number(Object.keys(self.packet_queue).length) + 1);
								console.log("GOT RESPONSE FOR LISTENER", String(self.socketData["listener"]), ":", self.socketData);
							};
						};
					};
				};
				
				self.packet_queue[String(Number(Object.keys(self.packet_queue).length) + 1)] = self.socketData;
   				console.log("RECEIVED:", self.socketData);
   			};
			this.mWS.onclose = function() {
				self.isRunning = false;
				self.connect_hat = 0;
				self.packet_hat = 0;
				if (self.close_hat == 1) {
					self.close_hat = 0;
				};
				self.socketData = "";
				self.link_status = 3;
				self.packet_queue = {};
				self.listening_for_packet = {};
				self.specific_packet_listener = {};
				console.log("Server has disconnected.");
			};
    	} else {
    		console.log("Socket is already open.");
    	};
    }

    closeSocket() {
        if (this.isRunning == true) {
    		console.log("Closing socket.");
    		this.mWS.close(1000,'script closure');
			this.connect_hat = 0;
			this.packet_hat = 0;
			this.close_hat = 0;
    		this.isRunning = false;
			this.link_status = 3;
			this.socketData = "";
			this.packet_queue = {};
			this.listening_for_packet = {};
			this.specific_packet_listener = {};
    	} else {
    		console.log("Socket is not open.");
    	};
    }

   	getSocketState() {
   		//Check is the server is still running
   		if (this.isRunning){
   			var response = this.mWS.readyState;
   			if (response == 2 || response == 3) {
   				this.isRunning = false;
				this.connect_hat = 0;
				this.packet_hat = 0;
				if (this.close_hat == 1) {
					this.close_hat = 0;
				};
				this.link_status = 3;
				this.socketData = "";
				this.packet_queue = {};
				this.listening_for_packet = {};
				this.specific_packet_listener = {};
   				// console.log("Server has disconnected.")
   			};
   		};
   		return this.isRunning;
   	}

   	sendData(args) {
   		if (this.isRunning == true) {
   			this.mWS.send(args.DATA);
   			console.log("SENT:", args.DATA);
   		};
   	};
	
	sendDataWithResponse({DATA, CMD, ID}) {
		if (this.isRunning) {
			// Create listener if not already created
			if (!(String(CMD) in this.specific_packet_listener)) {
				this.specific_packet_listener[String(CMD)] = {};
			};
			if (!(String(ID) in this.specific_packet_listener[String(CMD)])) {
				this.specific_packet_listener[String(CMD)][String(ID)] = {"returned": false, "val": "", "queue": -1};
				console.log("Registered new listener:", String(ID));
			} else if ((String(CMD) in this.specific_packet_listener) && (String(ID) in this.specific_packet_listener[String(CMD)])) {
				// Reset listener if already created
				this.specific_packet_listener[String(CMD)][String(ID)]["returned"] = false;
			};
			
			// Send payload
			this.mWS.send(DATA);
   			console.log("SENT:", DATA);
		};
	};

   	getSocketData() {
   		//Check is the server is still running
   		return JSON.stringify(this.socketData);
   	};
};

(function() {
    var extensionClass = Networking;
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