import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorSuccessMsgService {

  constructor() { }

  // Insert error message
  insertMsgAfter(msg, insertAfter, time, type?, styling?){
    const error = document.createElement('p');
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    insertAfter.parentNode.insertBefore(error, insertAfter.nextSibling);
    setTimeout(() => {
      error.remove();
    }, time);
  }

  insertMsgBefore(msg, insertBefore, time, type?, styling?){
    const error = document.createElement('p');
    const container = insertBefore.parentElement; 
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    container.insertBefore(error, insertBefore);
    setTimeout(() => {
      error.remove();
    }, time);

  }

  insertMsgTopOfPage(msg, time, type?, styling?){
    const error = document.createElement('p');
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    document.body.insertBefore(error, document.body.firstChild);
    setTimeout(() => {
      error.remove();
    }, time);


  }

  centeredPopOverMsg(msg, time, type?, styling?){
    const popOver = document.createElement('div');
    popOver.style.width = '100%';
    popOver.style.height = window.innerHeight + 'px';
    popOver.style.background = 'rgba(100, 100, 100, 0.8)'
    popOver.style.zIndex = '10000';
    popOver.style.position = 'fixed';
    popOver.style.display = 'flex';
    popOver.style.justifyContent = 'center';
    popOver.style.alignItems = 'center';
    popOver.style.top = '0';
    popOver.style.left = '0';

    const error = document.createElement('p');
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.background = 'white';
      error.style.width = 'auto';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;

    popOver.appendChild(error);
    document.body.appendChild(popOver);
    setTimeout(() => {
      popOver.remove();
    }, time);

  }

  swapElementWithMsg(msg, swapEl, time, type?, styling?){
    const error = document.createElement('p');
    const container = swapEl.parentElement; 
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = 'auto';
      // error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    container.insertBefore(error, swapEl);
    swapEl.style.display = 'none';
    setTimeout(() => {
      error.remove();
      swapEl.style.display = 'block';
    }, time);


  }
}
