// declarative rendering
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

// data binding
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleDateString()
	}
})

// conditionals 
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

// loops
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'learn Vue' },
			{ text: 'learn React' },
			{ text: 'learn a backend language' }
		]
	}
	
	
})

// user interaction
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue'
	}
})

// components -- all view components are also vue instances 
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'vegetables'},
      {id:1,text:'cheese'},
      {id:2,text:'wine'}
    ]
  }
})