import '../css/main.css';
import '../scss/main.scss';
import '../index.html';


'use strict()';

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

const input = new InputFile(document.body);
const image = document.createElement('img');
document.body.appendChild(image);
image.style.width = '300px';
image.style.height = '500px';
image.src = '../images/avatar.png'
image.style.objectFit = 'cover';
image.style.objectPosition = 'center';

let urlImage: string | unknown;

input.element.onchange = async function(e: Event) {
  const target= e.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];

  const base64 = (files: File) => new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => resolve(reader.result);
  });

  urlImage = await base64(file);
  image.src = (urlImage as string);
};
