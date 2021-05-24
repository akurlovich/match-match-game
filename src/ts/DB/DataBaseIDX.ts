export class DataBaseIDX{
  public db!: IDBDatabase;

  init(dbName: string, storeName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);

    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      let store = this.db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      store.createIndex('scoreIDX', 'score');
      store.createIndex('hashIDX', 'hash');
    };
    openRequest.onsuccess = () => {
      this.db = openRequest.result;
      console.log('base init')
    }
  }
  
  readAll<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) =>{
      let transaction = this.db.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.getAll();
  
      transaction.oncomplete = () => { 
        resolve(result.result);
        console.log('complite getAll')
      };
      transaction.onerror = () => {
        reject(result.error);
        console.log('error getAll');
      };
      transaction.onabort = () => { console.log('abort getAll') };
    })
  };

  addItem<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    return new Promise((resolve) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      let store = transaction.objectStore(collection);
      let res = store.add({});
      res.onsuccess = () => {
        res.result;
        let newRecord: RecordType = {...data, id:res.result};
        let result = store.put(newRecord);
        console.log(result);
        result.onsuccess = () => console.log('complite ', result.result);
        result.onerror = () => console.log('error ', result.error);
      }
    })
  }

  readFilter<RecordType>(collection: string, filter: (item: RecordType) => boolean): Promise<Array<RecordType>>  {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      let store = transaction.objectStore(collection);
      // let result = store.get(3); //!--возвращает базу только с id=3
      let result = store.index('scoreIDX').openCursor(null, 'next');
      let resData: Array<any> = [];
  
      result.onsuccess = () => {
        let cursor = result.result;
        if (cursor) {
          // console.log(cursor.value);
          // if (cursor.value.name == 'mane3') {
          //   resData.push(cursor.value)
          // }
          let currentValue: RecordType = cursor.value;
          if (filter(currentValue)) {
            console.log(currentValue);
            resData.push(currentValue);
          };
          cursor.continue();
        }
      }
  
      transaction.oncomplete = () => {
        resolve(resData);
        console.log('complite filtered');
      };
      transaction.onerror = () => { console.log('error filtered') };
      transaction.onabort = () => { console.log('abort filtered') };

    });
  }

  sortFilter<RecordType>(collection: string): Promise<Array<RecordType>>  {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      let store = transaction.objectStore(collection);
      let result = store.index('hashIDX').openCursor(null, 'prev');
      let resData: Array<RecordType> = [];

      result.onsuccess = () => {
        let cursor = result.result;
        if (cursor) {
          resData.push(cursor.value);
          cursor.continue();
        }
      };

      transaction.oncomplete = () => {
        resolve(resData);
        console.log('complite filtered');
      };
      transaction.onerror = () => { console.log('error filtered') };
      transaction.onabort = () => { console.log('abort filtered') };
    });
  }

  readAllnew(collection: string) {
    console.log('start readall');
    let transaction = this.db.transaction(collection, 'readonly');
    let store = transaction.objectStore(collection);
    let result = store.getAll();

    transaction.oncomplete = () => { 
      console.log(result.result);
      let arr = result.result;
      for (let key in arr[1]) {
        console.log('ключ: ' + key + ' значение: ' + arr[1][key]);
      }
    };
    transaction.onerror = () => { console.log('error getAll') };
    transaction.onabort = () => { console.log('abort getAll') };
  };

}