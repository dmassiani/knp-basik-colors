import './modules'

import $ from 'jquery'

window.jQuery = $;
window.$ = $;
require('jquery-migrate')

require.ensure([], function() {

	$(function() {
		$('.sidebar._toggler').on('click', function(e){
			e.preventDefault()
			$('.sidebar._wrapper').toggleClass('-active')
									.addClass('-in-progress')
			setTimeout( function(){
				$('.sidebar._wrapper').removeClass('-in-progress')
			}, 300)
		})
	})

})