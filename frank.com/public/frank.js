//封装JSON
function jsonp(url){
    return new Promise((resolve,reject)=>{
    const random = 'frankJSONPCallbackName'+Math.random();
    window[random] =(data)=>{
        resolve(data)
    };
    const script = document.createElement('script');
    script.src = `${url}?callback=${random}`;
    script.onload=()=>{
    script.remove();
     };
     script.onerror =()=>{
         reject();
     }
     document.body.appendChild(script);
    });
}

jsonp('http://qq.com:8888/friends.js')
    .then((data)=> {
     console.log(data);
    })

//封装ajax
function ajax(method, url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(request.response);
          } else {
            reject(request);
          }
        }
      };
      request.send();
    });
  }
  ajax("get", "http://qq.com:8888/friends.json").then(response => {
    console.log("这是 AJAX");
    console.log(response);
  });

// //frank.com定义的函数名和qq.com/friends.js执行的函数是同一个名字
//未封装前的jsonp用法
// const random = 'frankJSONPCallbackName'+Math.random()
// console.log(random)
// window[random] =(data)=>{
//     console.log(data);
// }
// const script = document.createElement('script')
// script.src = `http://qq.com:8888/friends.js?functionName=${random}`
// script.onload=()=>{
//     script.remove()
// }
// document.body.appendChild(script)


//请求Ajax,利用CORS跨域
// const request = new XMLHttpRequest();
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange = () =>{
//     if(request.readyState ===4 && request.status ===200){
//         console.log(request.response);
//     }
// }
// request.send();