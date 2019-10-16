let vm = new Vue({
	el: ".favorites",
	data: {
		results: []
	},
	methods: {
		getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		},
		toggleMenuMobile(event, target) {
			console.log(
				event.target.tagName
			)
		},
		toggleOptionsList() {
			if (vm.showOptions == true) {
				vm.showOptions = false;
			} else if (vm.showOptions == false) {
				vm.showOptions = true;
			}
		},
		closeOptionsList() {
			vm.showOptions = false;
		},
		generateFavorites() {
			/**
			Simulating 5 favorites
			@TODO: query db of favorites
			**/
			let resultRange = 5;
			let listingDate = new Date();
			
			for (i = 0; i <= resultRange; i++) {
				let resultObj = {
					listing_info: {
						company_name: faker.company.companyName(),
						job_title: 'Front-End Web Developer',
						company_location: 'San Francisco, CA' // Location formating up for debate
					},
					listing_details: {
						salary_range: "$50k - $60k",
						date_posted: listingDate.getUTCDate(),
						schedule_type: 'Full-Time',
						remote_possible: true
					}
				}
				vm.results.push(resultObj);
			}
			console.log('running search')
			vm.results.forEach((element) => {
				console.log(element.listing_info.company_name)
			})
		}
	},
	mounted() {
		console.log('get mounted')
	},
});

document.addEventListener('DOMContentLoaded', function(e){
	vm.generateFavorites();
}) 

document.querySelector('.navbar-burger').addEventListener('click', function(){
	document.querySelector('.navbar-menu').classList.toggle('is-active')
	this.classList.toggle("is-active") 
});