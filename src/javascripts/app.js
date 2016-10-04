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

		$.each( $('.selector li a'), function(i,e){
			let el = $(e)
			let color = el.data('color')
			el.css({'background-color': '#' + color })
			el.on('click', function(e){
				e.preventDefault()
				$('body').data('skin', el.data('skin') ).trigger('changeSkin')
			})
		})

		// change Skin event
		$(document).on('changeSkin', function(e){

			let skin = $('body').attr('class').split(' ').pop()
			if( skin != '-bg' )
				$('body').removeClass(skin)
			$('body').addClass($('body').data('skin'))

			if( $('body').data('skin') === 'dominos' ){
				$('header.header h1').text('').append('<img src="images/dominos.png"/>')
			}else{
				$('header.header h1').text('Basik').parent().find('img').remove()
			}

		})

	})

})