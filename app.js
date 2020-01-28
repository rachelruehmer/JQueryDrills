$('#btnSubmit').click(function () {
    alert($('#target').val());
});

$(function () {
    $('#btnSubmit').prop('disabled', true);
    $('#target').keyup(function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });
})


let $target = $('#target');
let $btnSubmit = $('#btnSubmit');

$('<ul></ul>').appendTo('body');


function getRandomColor(event) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function setRandomColor(event) {
    $(event.target).css("background-color", getRandomColor());
}

$btnSubmit.click(function () {
    let li = $("<li></li>")

    li.click((e) => {
        setRandomColor(e)
    });
    li.append($($target).val())
    li.appendTo('ul');

})
$('ul').dblclick(function(event) {
    $(event.target).remove('li');
});


// $('<div></div>').appendTo('body');

// $('#btnSubmit') .click(function() {
//     $('<h2>' + $('#target').val() + '</h2>').appendTo('div')

// $("h2").mouseover(function(){
//     $("h2").css({"background-color": "orchid", "border-radius": "100px"});
//   });

// });





