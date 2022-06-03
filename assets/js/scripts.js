(function($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded')
        }, 1000);
    })
})(jQuery);

let team = document.getElementById('member')

function addMember() {
    let newMember = document.getElementById('name-input')
    console.log(newMember.value)

    let li = document.createElement('li')
    let member = document.createTextNode(newMember.value)

    li.appendChild(member)
    team.appendChild(li)
}