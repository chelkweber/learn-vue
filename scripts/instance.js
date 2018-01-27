var vm = new Vue({
  //options
  data: data
});

// data object
var data = { a:1 }

vm.a === data.a // ==> same object

// setting the property of the instance affects the original data, because they are the same object
vm.a = 2
console.log(data.a) // ==> 2

data.a = 3
console.log(vm.a) // ==> 3

// properties are only reactive and will re-render if they existed when the instance was created

vm.b = 'hi' // won't update because it is no a prop in the original data object 

// to prevent properties from being changed you can use Object.feeze()

var objFreeze = { 
  foo: 'bar'
}

Object.freeze(objFreeze);

new Vue ({
  el: '#app-freeze',
  data () {
    return {
      objFreeze
    }
  }
})

var obj = { 
  foo: 'bar'
}

new Vue ({
  el: '#app',
  data () {
    return {
      obj
    }
  }
})

// methods are prefixed with $

var data2 = { a:1 };
var vm2 = new Vue({
  el:"#example"
})


