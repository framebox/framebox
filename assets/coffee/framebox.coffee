$(document).ready ->
	$('#myCarousel').carousel()

	$('a.galerie').on 'click', (e) ->
		$('#login-to-gallery').modal 'show' 
		false

	$('#galery-go-to').on 'click', (e) ->
		url = "framebox.fr/"
		identifiant = $('#galery-identifiant').val();
		password = $('#galery-password').val()
		window.location.href = "http://#{identifiant}.#{url}?pass=#{password}" if identifiant != "" and password != ""

	$('a.youtube').on 'click', (e) ->
		$("#youtube-video").modal 'show'
		false 

	$('a.youtube2').on 'click', (e) ->
		$("#youtube-video2").modal 'show'
		false 

	$('a.youtube3').on 'click', (e) ->
		$("#youtube-video3").modal 'show'
		false 

	$('a.youtube4').on 'click', (e) ->
		$("#youtube-video4").modal 'show'
		false 

	$('#myTab a').on 'click', (e) ->
		e.preventDefault()
		$(@).tab 'show'
	



