//Helper Functions
function promisify(request){
	return new Promise((resolve, reject) => {
		request.onsuccess = function() {
			resolve(request.result);
		};

		request.onerror = function() {
			console.log(request.error);
			reject(request.error);
		};
	});
}



//Module
export default class IndexDBService {
	constructor() {

	}

	init() {
		let _this = this;

		let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
		let request = indexedDB.open('kanbanDB', 1);
		request.onupgradeneeded = function(event) {
			console.log('Upgrading idb');
			var db = event.target.result;
			var objectStore = db.createObjectStore('boards', {keyPath: '_id', autoIncrement:true});
			objectStore.transaction.oncomplete = function(event) {
				console.log(db);
			}
		}

		return promisify(request);
	}

	add(object, storeName) {
		let request = this.db.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.add(object);

		return promisify(request);
	}

	update(object, storeName) {
		let request = this.db.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.put(object);

		return promisify(request);

	}

	retrieve(storeName) {
		let request = this.db.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.getAll();

		return promisify(request);
	}

	delete(id, storeName) {
		let request = this.db.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.delete(id);

		return promisify(request);
	}

	log() {
		console.log('made');
	}
}