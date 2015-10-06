//Working with the set interval issue to discuss how to capture the correct 'this' in function calls
/*let counter = {
    _count: 0,

    addCount: function () {
        this._count++;
        console.log(this._count);
    }

}

//window.setInterval(counter.addCount, 500); doesn't work due to inconsistencies with 'this' in javascript

//counter.addCount.call('apples');  even more weirder

//window.setInterval(counter.addCount.bind, 500);//this method will make the meaning of 'this' be accurate.

//window.setInterval(function () { counter.addCount() }, 500); this Method also works

window.setInterval(()=>counter.addCount(), 500); //this method works using fat arrows*/
//const onClick: string = 'click';

//let buttons = document.getElementByTagName('button');
//addClickHandlers(buttons);

////function addClickHandlers(buttons) {      this code block will make a closure and all will say you clicked button 5
////    for (var i = 0; i < buttons.length; i++) {
////        buttons[i].addEventListener('click', () => alert('You clicked button ' + i));
////    }
////}
////YOu have a closure when: 1) An outer function returns an inner function. 2) The inner function variables have been closed by the outer function resulting in a “closed expression” or “closure”.

//function addClickHandlers(button, index) {

//    button.addEventListener('click', () => alert('You clicked button ' + index));
//}

//outer function
//function getFunction() {
//    let message = 'Hello World!';

//    //inner function

//    return function () {
//        console.log('He says "${message}"');//message is the free variable that will create a closure

//    }
    

//}

//let func = getFunction();
//func();

//let xhr = new XMLHttpRequest();
//    xhr.addEventListener('load', () => {
//        let data = JSON.parse(xhr.responseText);
//        console.dir(data);//writes out all the information in a directory
//});

//    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=atlanta');
//xhr.send();


//let restUrl = 'https://api.flickr.com/services/rest/?api_key=c7c96901811b7c04bbe1bae3ad27f541&format=json&nojsoncallback=1&method=flickr.photos.search&tags=tesla';

//let xhr = new XMLHttpRequest();
//let picArray = []
//xhr.addEventListener('load', () => {
//    let data = JSON.parse(xhr.responseText);
//    for (let image of data.photos.photo) {
//        let pic = flickrImageUrl(image);
//        picArray.push(pic);
//    }
//    makePics()
    
//});

//    xhr.open('GET', restUrl);
//    xhr.send();

//    interface FlickrImage {
//        id: number,
//        farm: number,
//        server: number,
//        secret:string,
//    }

//    function flickrImageUrl(image: FlickrImage) {
//        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
//    }
//function makePics() {
//   let h = '';
//    for (let pic of picArray) {

//        h += '<img class = "images" src = "' + pic + '" alt = "not working">';

//        document.getElementById('picTable').innerHTML = h;
//    }
//    }


//class httpCall {
//    static getData(url: string) {

//        let promise = new Promise((resolve, reject) => {
//            let xhr = new XMLHttpRequest()
//            xhr.addEventListener('load', () => {
//                resolve(JSON.parse(xhr.responseText));
//            });
//            xhr.open('GET', url);
//            xhr.send();
//        }
//    }
//}
//let promise = httpCall.getData('/products.json');
//promise.resolve((data)=>


// this method returns products in 1 and 1/2 seconds
function getProducts() {
  return new Promise(function(resolve, reject) {
    window.setTimeout(
      function() {
        if (Math.random() >= 0.5) {
          resolve(['Tesla', 'Apples', 'Oranges', 'Macbook Pro']);
        } else {
          reject('Network error!');
        }
      }, 1500
    );
  })
}


getProducts().then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data)
})
