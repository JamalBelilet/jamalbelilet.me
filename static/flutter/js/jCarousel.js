/**
 * Created by bjama on 10/20/2017.
 */

// the jCarousel---------------------------------------------------------------------------------------------------------------------------------------------------------------
(function() {
    var jCarouselAll= document.querySelectorAll('div[jCarousel]');
    jCarouselAll.forEach(function (jCarousel, _, __) {

        jCarousel.style.display = 'block';
        var data = { "items" : [
            {
                "title":"Barot Bellingham",
                "imgSrc":"Jennifer_Jerome_01",
                "mText":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
            },
            {
                "title":"Jonathan G. Ferrar II",
                "imgSrc":"carousel-exoticanimals",
                "mText":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
            },
            {
                "title":"Hillary Hewitt Goldwynn-Post",
                "imgSrc":"Constance_Smith_03",
                "mText":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
            },
            {
                "title":"Hassum Harrod",
                "imgSrc":"testimonial-johnb",
                "mText":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
            }
        ]};
        var i = 0;
        function animateJm(){
            var h2 = document.createElement('h2');
            h2.innerHTML = data.items[i].title;
            var img = document.createElement('img');
            img.src = 'images/iv/' + data.items[i].imgSrc + '.jpg';
            img.alt = data.items[i].imgSrc;
            var p = document.createElement('p');
            p.innerHTML = data.items[i].mText;
            i = (i == 3) ? 0 : i+1;
            var imgDiv = document.createElement('div');
            imgDiv.appendChild(img);
            var textDiv = document.createElement('div');
            textDiv.appendChild(h2);
            textDiv.appendChild(p);
            textDiv.className = 'textDiv';
            imgDiv.className = 'imgDiv';
            jCarousel.innerHTML = '';
            jCarousel.appendChild(textDiv);
            jCarousel.appendChild(imgDiv);
        }
        animateJm();
        var timer = setInterval(animateJm , 4000);

    })


})();
