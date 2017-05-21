$(function() {

	// Set up an event listener for the order form.
	$($('#buy-iphone7-form')).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

        // Get the form.
        var form = $('#buy-iphone7-form');

        // Get the messages div.
        var formMessages = $('#form-messages-iphone7');

        if($('#name-iphone7').val().length==0)
        {
            $(formMessages).addClass('mail_error').text('Укажите Ваше имя');
            return;
        }
        if($('#phone-iphone7').val().length==0)
        {
            $(formMessages).addClass('mail_error').text('Укажите Ваш телефон');
            return;
        }
        $(formMessages).removeClass('mail_error').removeClass('mail_success').text('');

        $('#submit-iphone7').attr('disabled', 'disabled').val('Подождите...');

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
            // Clear the form.
			$(formMessages).text('');
            $('#name-iphone7').val('');
            $('#phone-iphone7').val('');
            $('#submit-iphone7').removeAttr('disabled').val('Заказать');

            $('.buy-iphone7').modal('hide');
            $('.buy-iphone7res').modal('show');
            //console.log(response);
            if(response.code==0)
                $('#iframeContainer').append('<iframe src="/order/finish?id='+response.orderId+'" style="display: none" width="1" height="1"></iframe>');

		})
		.fail(function(data) {
            $('#submit-iphone7').removeAttr('disabled').val('Заказать');
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('mail_success');
			$(formMessages).addClass('mail_error');
			$(formMessages).text('Произошла ошибка при заказе. Попробуйте еще раз');
		});
	});

    // Set up an event listener for the order form.
    $($('#buy-iphone7plus-form')).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Get the form.
        var form = $('#buy-iphone7plus-form');

        // Get the messages div.
        var formMessages = $('#form-messages-iphone7plus');

        if($('#name-iphone7plus').val().length==0)
        {
            $(formMessages).addClass('mail_error').text('Укажите Ваше имя');
            return;
        }
        if($('#phone-iphone7plus').val().length==0)
        {
            $(formMessages).addClass('mail_error').text('Укажите Ваш телефон');
            return;
        }
        $(formMessages).removeClass('mail_error').removeClass('mail_success').text('');

        $('#submit-iphone7plus').attr('disabled', 'disabled').val('Подождите...');

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Clear the form.
                $(formMessages).text('');
                $('#name-iphone7plus').val('');
                $('#phone-iphone7plus').val('');
                $('#submit-iphone7plus').removeAttr('disabled').val('Заказать');

                $('.buy-iphone7plus').modal('hide');
                $('.buy-iphone7res').modal('show');
                //console.log(response);
                if(response.code==0)
                    $('#iframeContainer').append('<iframe src="/order/finishplus?id='+response.orderId+'" style="display: none" width="1" height="1"></iframe>');

            })
            .fail(function(data) {
                $('#submit-iphone7plus').removeAttr('disabled').val('Заказать');
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('mail_success');
                $(formMessages).addClass('mail_error');
                $(formMessages).text('Произошла ошибка при заказе. Попробуйте еще раз');
            });
    });


});
