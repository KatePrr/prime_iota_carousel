$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            console.log(data);
            //new stuff:
            


             var student = $.each(data.people, function (i, person) {
                                $('#ajax-data').append('<div class="person"></div>');
                                var $el = $('#ajax-data').children().last();
                                $el.append('<h2>' + person.name + '</h2>');
                                $el.append('<p>' + person.favoriteMovie1 + '</p>');
                                $el.append('<p>' + person.favoriteMovie2 + '</p>');
                                $el.append('<p>' + person.favoriteSong + '</p>');
                                $el.append('<img src="' + person.imageURL + '" />');
                                });

            console.log(student[5]);



            /* next/prev buttons */
            $('#next-button').append('<button class="next">NEXT</button>');

            $('.next').on('click', 'next', function(){
                $('.person').slideUp();
            });


            $('#prev-button').append('<button class="prev">PREV</button>');

            $('.prev').on('click', 'prev', function(){
                $('.person').slideDown();
            });








        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}