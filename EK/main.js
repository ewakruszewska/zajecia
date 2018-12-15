// // const $test = document.querySelector('[data-test-array]');
// // $test = $test.getAttribute('data-test-array');

// // $test = $test.split(',')

// // const test = document.getElementById('test');
// // test.TextContent= $test;
// // console.log($test);



// const $btn = document.getElementById("test")
// $btn.onclick = function () {
//     const $test = querySelector('[data-id]')
    
//     if(this.id === $test.getAttribute('data-id')){
//         $test.classList.remove('hide')
//     } else {
//         alert('!!!!')
//     }
// }



// // const obj{
// //     start: '';
// // }

// // obj.test = 'cos tam'
// // obj.costam = 'test'

// // console.log(obj)

// function testFn(paramString) {
//     //sprawdzenie czy istnieje parametr, jeśli nie to przypisz wartość domyślną
//     paramString = paramString || 'default';

//     const obj = {
//         start: 123,
//         test: 'test string'
//     };

//     // if(paramString) {
//         obj.abc = paramString
//     // }
//     return obj;
// }

// // const $testFn = testFn();

// const $testFn = testFn('parameter string');

// console.log($testFn)

// ////skrócony zapis - jeśli wartość nie jest podana domyślnie ustawia default
// // function testFn(paramString = 'default'){
// //     const obj = {
// //         start: 123,
// //         test: 'test string'
// //     };

// //     obj.abc = paramString

// //     return obj;
// // }


const parentList = document.getElementById('parent-element');


document.forms.myform.onsubmit = function () {

  if (this.nazwa.value) {
    var li = document.createElement("li");
    li.innerHTML = this.nazwa.value;
    document.getElementById('parent-element').appendChild(li);
    li.setAttribute("contenteditable", "true")

    var span = document.createElement("span");
    li.appendChild(span);
    span.setAttribute("contenteditable", "false")
    

    var btn = document.createElement("button");
    btn.innerHTML = "Usuń";
    span.appendChild(btn);

    this.nazwa.value = "";
    this.nazwa.focus();
    btn.onclick = usuwanie;
    

  }

    return false;

}

function usuwanie() {
    
    if (confirm('Czy na pewno chcesz usunąć?') == true){
        this.parentNode.removeChild(this);



        remove(li)
    } 
}