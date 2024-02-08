// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());

        // Validation to ensure a positive number is entered
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }

        var rate = parseFloat($('#rate').val().replace('$', ''));

        // Calculate total charge
        var total = hours * rate;

        // Display total
        $('#total').val('$' + total.toFixed(2));
    });
});

