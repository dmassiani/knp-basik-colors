import './modules'

import $ from 'jquery'

window.jQuery = $;
window.$ = $;
require('jquery-migrate')

console.log(`app.js has loaded!`)

require.ensure([], function() {

	$(function() {
		$('.sidebar._toggler').on('click', function(e){
			e.preventDefault()
			$('.sidebar._wrapper').toggleClass('-active')
		})
	})

})