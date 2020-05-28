const spans = document.querySelectorAll('#part1_cards span')
spans.forEach(function(span){
    span.className = 'span_each'
})
const spans2 = document.querySelectorAll('#part2_cards span')
spans2.forEach(function(span){
    span.className = 'span_each2'
})
const images_blue = document.querySelectorAll('#blue_section img')
images_blue.forEach(function(img){
    img.className = 'img_cardsb'
})
const paralax1 = document.querySelector('#img-div1')
window.addEventListener('scroll', function(){
    let offset = window.pageYOffset
    paralax1.style.backgroundPositionY = offset * 0.4 + 'px'
})