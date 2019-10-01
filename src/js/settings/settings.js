let vm = new Vue({
	el: ".settings",
	data: {
		currentMenu: 'general',
		settingsOptions: [
			'edit profile',
			'general',
			'notifications',
		]
	},
	methods: {
		changeSettingMenu(menu) {
			console.log(`changing to ${menu}`)
			vm.currentMenu = menu;
		},
		saveProfileChanges(event) {
			// simulate network latency
			event.target.classList.add("is-loading")
			setTimeout(function(){
				event.target.classList.remove("is-loading");
				event.target.classList.add("is-success");
			}, 1500)
			console.log('saving profile changes');
		},
		getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		},
		toggleMenuMobile(event, target) {
			console.log(
				event.target.tagName
			)
		}
	},
	mounted() {
		console.log('get mounted')
	},
});	
document.querySelector('.navbar-burger').addEventListener('click', function(){
	document.querySelector('.navbar-menu').classList.toggle('is-active')
	this.classList.toggle("is-active") 
});