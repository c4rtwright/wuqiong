
let vm = new Vue({
	el: ".jobs",
	data: {
		viewingSelf: true,
		moreMenu: false,
		showOptions: false,
		search_options: {
			opt_stack: [
				'Front-End',
				'Back-End',
				'DevOps',
				'Design'
			],
			includeKeyword: undefined,
			excludeKeyword: undefined
		},
		selected_options: {
			job_title: undefined,
			opt_stack: [],
			keywords: [],
			prefs: {
				include: [],
				exclude: []
			}
		},
		results: []
	},
	methods: {
		toggleMoreMenu() {
			if (vm.moreMenu == false) {
				vm.moreMenu = true;
			} else {
				vm.moreMenu = false;
			}
		},
		performSearch() {
			/**
			Simulating 5 result hits (regardless of selected options)
			@TODO: query db of listings, matching criteria based on selected options
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
	}
});

document.querySelector('.navbar-burger').addEventListener('click', function(){
	document.querySelector('.navbar-menu').classList.toggle('is-active')
	this.classList.toggle("is-active") 
});