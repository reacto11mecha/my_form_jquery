$(document).ready(function () {
    $(this).on('submit', '#main-form', function (e) {
        e.preventDefault();

        if ($('input[name=method]').length == 1 && $(this).attr('method')) {
            $('#error_message').append('<div class="alert alert-danger" role="alert">There are two methods in one form !</div>');
            $('#lbtn').attr('disabled', true);
            $('#lbtn').addClass('disabled');
        } else {
            const method = ($('input[name=method]').length < 1) ? $(this).attr('method') : String($('input[name=method]').val());

            $.ajax({
                url: '{{ Main_url }}',
                method: method,
                data: {
                    // 'Pkey': 'Pvalue',
                    'email': $('#email').val(),
                    'password': $('#pw').val()
                },
                success: function (r) {
                    // Code Here
                },
                error: function (JqXHR, response) {
                    // Code here
                }
            })
        }
    });

    $('input[name=email]').on('keyup', function () {
        const value = $(this).val();
        const length = value.length;

        const container = '#email-container';

        if (value == '' | length == 0) {
            if ($(container + ' small').length == 0) {
                $(container).append('<small class="pt-3 text-danger">Email field is required !</small>');
            }
        } else {
            if ($(container + ' small').length == 1) {
                $(container + ' small').remove();
            }
        }
    });

    $('input[name=password]').on('keyup', function () {
        const value = $(this).val();
        const length = value.length;

        const container = '#pw-container';

        if (value == '' | length == 0) {
            if ($(container + ' small').length == 0) {
                $(container).append('<small class="pt-3 text-danger">Password field is required !</small>');
            }
        } else {
            if ($(container + ' small').length == 1) {
                $(container + ' small').remove();
            }
        }
    });
});