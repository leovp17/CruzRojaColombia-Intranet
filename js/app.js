(function($) {

    "use strict";

	var options = {
		events_url: '/events.json.php',
		view: 'month',
		tmpl_path: '/tmpls/',
		day: 'now',
		holidays: {
			'08-03': 'International Women\'s Day',
			'25-12': 'Christmas\'s',
			'01-05': "International labor day"
		},
		first_day: 2,
		language: 'es-ES',
		
		onAfterViewLoad: function(view) {
			$('h4').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('a[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var	 calendar = $('#calendar').calendar(options);

	$('.btn-group a[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	

    
}(jQuery));