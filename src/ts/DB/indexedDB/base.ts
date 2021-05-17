
export class DataBaseUser{
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
  
  readAll() {
    let transaction = this.db.transaction('testCollection', 'readonly');
    let store = transaction.objectStore('testCollection');
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

  addItem() {
    // function counter() { let num = 0; return () => { num++; return num; } };
    // let num1 = counter();
    // console.log(num1());

    let num = Math.floor(Math.random() * 1000);

    let transaction = this.db.transaction('testCollection', 'readwrite');
    let store = transaction.objectStore('testCollection');
    store.add({age: 35, name: 'name2', second: 'mail1', email: `mail${num}`});
    // store.put({тоже самое что в верху, только в конце надо добавить id:3}) изменяет определенный элемент
  
    transaction.oncomplete = () => {console.log('complite add')};
    transaction.onerror = () => {console.log('error add')};
    transaction.onabort = () => {console.log('abort add')};
  }

  readFilter() {
    let transaction = this.db.transaction('testCollection', 'readwrite');
    let store = transaction.objectStore('testCollection');
    // let result = store.get(3); //!--возвращает базу только с id=3
    let result = store.index('name').openCursor(null, 'next');
    let resData: Array<any> = [];

    result.onsuccess = () => {
      let cursor = result.result;
      if (cursor) {
        console.log(cursor.value);
        if (cursor.value.name == 'mane3') {
          resData.push(cursor.value)
        }
        cursor.continue();
      }
    }

    transaction.oncomplete = () => { console.log('complite filtered') };
    transaction.onerror = () => { console.log('error filtered') };
    transaction.onabort = () => { console.log('abort filtered') };
  }
}