//就可以使用script.onlaod监听是否取得值,但是全局变量中如果有xxx，就容易互相影响

//将data写成一个函数，防止影响全局变量中有xxx
window['{{xxx}}']( {{data}} )