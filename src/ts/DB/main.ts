import '../css/main.css';
import '../scss/main.scss';
import '../index.html';
import { Button } from './indexedDB/tag_buttons';
import { DataBaseUser } from './indexedDB/base';
// import { DB_Refactoring, MyRecords } from './indexedDB/db_refactoring';
import { DataBaseIDX } from './DataBaseIDX';
import { MyRecords } from './iMyRecords';

'use strict()';

class App {
  public iDB: DataBaseIDX;
  
  constructor(parenNode: HTMLElement) {
    this.iDB = new DataBaseIDX();
    this.iDB.init('akurlovich', 'match_game');
    
    let readAllBtn = new Button(parenNode, 'list', 'red');
    readAllBtn.onClick = async () => {
      let arr = await this.iDB.readAll<MyRecords>('match_game');
      console.log(arr);
      console.log('result', arr[1].score);
    };

    // readAllBtn.onClick = () => {
    //   this.iDB.readAll<MyRecords>('testCollection').then(arr => {
    //     console.log(arr);
    //     console.log(arr[0].age);
    //   })
    // };
    
    let filterBtn = new Button(parenNode, 'filter', 'blue');
    filterBtn.onClick = async () => {
      let resultFiltered = await this.iDB.readFilter<MyRecords>('match_game', (item) => item.score < 500);
      console.log('filtered ' , resultFiltered);
    };

    let sortBtn = new Button(parenNode, 'sort', 'yellow');
    sortBtn.onClick = async () => {
      let resultFiltered = await this.iDB.sortFilter<MyRecords>('match_game');
      console.log('filtered ' , resultFiltered);
      let maxScore = resultFiltered[0].score;
      let imagesrc = resultFiltered[0].image;
      image.src = imagesrc;
      // alert(imagesrc);
      // console.log('max score', resultFiltered[resultFiltered.length -1].score)
    };
    
    let addBtn = new Button(parenNode, 'add item', 'green');
    addBtn.onClick = async () => {
      let scoreNum = Math.floor(Math.random() * 1000);
      let numHash = (new Date).getTime();
      let newRec = await this.iDB.addItem<MyRecords>('match_game', {score: scoreNum, name: 'ivan', second: 'Petorv', email: `${scoreNum}@tut.by`, image: urlImage as string, hash: numHash});
      console.log('newRec ' + newRec);
    };

    const input = new InputFile(document.body);
    const image = document.createElement("img");
    document.body.appendChild(image);
    image.style.width = "300px";
    image.style.height = "300px";
    image.style.borderRadius = "50%";
    image.style.border = "2px solid black";
    image.src = "../images/avatar.png";
    image.style.objectFit = "cover";
    image.style.objectPosition = "center";

    let urlImage: string | unknown = 'src_image'

    input.element.onchange = async function (e: Event) {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];

      const base64 = (files: File) =>
        new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(files);
          reader.onload = () => resolve(reader.result);
        });

      urlImage = await base64(file);
      // console.log('url :', urlImage)
      image.src = urlImage as string;
    };
    
  };
};

class InputFile {
  element: HTMLInputElement;
  constructor(
    parentNode: HTMLElement,
  ) {
    this.element = document.createElement('input');
    this.element.className = 'input_file';
    this.element.innerHTML = 'input file';
    this.element.setAttribute('type', 'file');
    parentNode && parentNode.appendChild(this.element);
  };
};

const app = new App(document.body);





// class DataBase{
//   public db!: IDBDatabase;
  
//   constructor() {
    
//   }

//   init(dbName: string, version?: number) {
//     const iDB = window.indexedDB;
//     const openRequest = iDB.open(dbName, version);

//     openRequest.onupgradeneeded = () => {
//       this.db = openRequest.result;
      
//       let store = this.db.createObjectStore('testCollection', { keyPath: 'id', autoIncrement: true });
//       store.createIndex('name', 'name');
//       store.createIndex('email', 'email', { unique: true });
//     };

//     openRequest.onsuccess = () => {
//       this.db = openRequest.result;
//     }
//   }
  
//   readAll() {
//     let transaction = this.db.transaction('testCollection', 'readonly');
//     let store = transaction.objectStore('testCollection');
//     let result = store.getAll();

//     transaction.oncomplete = () => { 
//       console.log(result.result);
//       console.log('complite getAll');
//     };
//     transaction.onerror = () => { console.log('error getAll') };
//     transaction.onabort = () => { console.log('abort getAll') };
//   };

//   addItem() {
//     function counter() { let num = 0; return () => { num++; return num; } };
//     let num1 = counter();


//     let transaction = this.db.transaction('testCollection', 'readwrite');
//     let store = transaction.objectStore('testCollection');
//     store.add({name_1: 35, nama_2: `name2name${num1()}`, email_1: `mane${num1()}`, email: `b+${num1()}`});
//     // store.put({тоже самое что в верху, только в конце надо добавить id:3}) изменяет определенный элемент
  
//     transaction.oncomplete = () => {console.log('complite add')};
//     transaction.onerror = () => {console.log('error add')};
//     transaction.onabort = () => {console.log('abort add')};
//   }

//   readFilter() {
//     let transaction = this.db.transaction('testCollection', 'readwrite');
//     let store = transaction.objectStore('testCollection');
//     // let result = store.get(3); //!--возвращает базу только с id=3
//     let result = store.index('name').openCursor(null, 'next');
//     let resData: Array<any> = [];

//     result.onsuccess = () => {
//       let cursor = result.result;
//       if (cursor) {
//         console.log(cursor.value);
//         if (cursor.value.name == 'mane3') {
//           resData.push(cursor.value)
//         }
//         cursor.continue();
//       }
//     }

//     transaction.oncomplete = () => { console.log('complite filtered') };
//     transaction.onerror = () => { console.log('error filtered') };
//     transaction.onabort = () => { console.log('abort filtered') };
//   }
// }






// navigationTo();
// routerMain();
// routStart();

// const appElement = document.getElementById('app');
// if (!appElement) throw Error('No app element found!!!');




//!________________________________________________-
// class Control {
//   element: HTMLElement;
//   node: HTMLElement;
//   constructor(
//     parentNode: HTMLElement,
//     tagName = "div",
//     className = "",
//     content = ""
//   ) {
//     this.element = document.createElement(tagName);
//     this.element.className = className;
//     this.element.innerHTML = content;
//     parentNode && parentNode.appendChild(this.element);
//     this.node = this.element;
//   }
// }

// class Input extends Control{
//   caption: Control;
//   field: Control;
//   error: Control;
//   validate: any;
//   constructor(parentNode: HTMLElement, className = '', onValidate: (a?: string) => void) {
//     super(parentNode);
//     this.node.className = className;
//     this.caption = new Control(this.node, 'div', 'caption');
//     this.field = new Control(this.node, 'input', 'input');
//     this.error = new Control(this.node, 'div', 'error_field');
//     this.validate = onValidate;

//     this.field.node.addEventListener('input', () => {
//       this.onInput();
//     });
//   }

//   onInput() {
//       // this.error.node.textContent = (this.field.element as HTMLInputElement).value.length > 5 ? 'error' : 'ok';
//     // if (this.validate((this.field.element as HTMLInputElement).value))
//     this.error.node.textContent = this.validate((this.field.element as HTMLInputElement).value);
//   }
// }

// class Form extends Control{
//   inputs: Input[];
//   constructor(parentNode: HTMLElement, className = '') {
//     super(parentNode);
//     this.node.className = className;
//     this.inputs = [
//       new Input(this.node, 'block', (e) => {if (e) {return e.length > 5 ? 'error' : 'ok'}}), 
//       new Input(this.node, 'block', (e) => {if (e) {return Number.isNaN(+e) ? 'error' : 'ok'}}), 
//       new Input(this.node, 'block', (e) => {if (e) {return Number.isNaN(+e) ? 'error' : 'ok'}})
//     ];

//   }
// }

// const form = new Form(appElement, 'main');
// // new Form(appElement, 'main');






// window.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello world!!!');
// });

// import { BaseBlock as Block } from './baseBlock';

// class BaseBlock {
//   constructor(parentNode: HTMLElement, tagName = 'div', className = '', content = '') {
//     const element = document.createElement(tagName);
//     element.className = className;
//     element.innerHTML = content;
//     parentNode && parentNode.appendChild(element);
//     // this.node = element;
//   }
// };

// let firstDiv = new BaseBlock(document.body, 'div', 'wrapper');

// class InputUser extends BaseBlock {
//   constructor(parentNode: HTMLElement) {
//     super();
//   }

// }