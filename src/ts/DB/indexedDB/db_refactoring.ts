export interface MyRecords{
  age: number,
  name: string, 
  second: string, 
  email: string,
  id?: IDBValidKey

}

export class DB_Refactoring{
  public db!: IDBDatabase;
  
  constructor() {
    
  }

  init(dbName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);

    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      
      let store = this.db.createObjectStore('testCollection', { keyPath: 'id', autoIncrement: true });
      store.createIndex('name', 'name');
      store.createIndex('email', 'email', { unique: true });
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    }
  }
  
  readAll<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) =>{
      let transaction = this.db.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.getAll();
  
      transaction.oncomplete = () => { 
        resolve(result.result)
        // console.log(result.result);
        // let arr = result.result;
        // for (let key in arr[1]) {
        //   console.log('ключ: ' + key + ' значение: ' + arr[1][key]);
        // }
      };
      transaction.onerror = () => {
        reject(result.error);
        console.log('error getAll');
      };
      transaction.onabort = () => { console.log('abort getAll') };
    })
  };

  addItem<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    // function counter() { let num = 0; return () => { num++; return num; } };
    // let num1 = counter();
    // console.log(num1());
    // let num = Math.floor(Math.random() * 1000);

    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      transaction.oncomplete = () => {
        resolve(trasResult);
      };
  
      let store = transaction.objectStore(collection);
      let res = store.add({});
      let trasResult: RecordType;
      res.onsuccess = () => {
        res.result;
        let newRecord: RecordType = {...data, id:res.result};
        trasResult = newRecord;
        let result = store.put(newRecord);
        console.log(result);
        result.onsuccess = () => {
          console.log('complite ', result.result);
        };
        result.onerror = () => {
          console.log('error ', result.error)
        }
      }

    })
    // store.add({age: 35, name: 'name2', second: 'mail1', email: `mail${num}`});
    // store.put({тоже самое что в верху, только в конце надо добавить id:3}) изменяет определенный элемент
  
    // transaction.oncomplete = () => {console.log('complite add')};
    // transaction.onerror = () => {console.log('error add')};
    // transaction.onabort = () => {console.log('abort add')};
  }

  readFilter<RecordType>(collection: string, filter: (item: RecordType) => boolean): Promise<Array<RecordType>>  {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      let store = transaction.objectStore(collection);
      // let result = store.get(3); //!--возвращает базу только с id=3
      let result = store.index('email').openCursor(null, 'next');
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
}