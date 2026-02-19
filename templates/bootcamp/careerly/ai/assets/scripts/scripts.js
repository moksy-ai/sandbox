{
           "@context": "http://www.schema.org",
           "@type": "ProfessionalService",
           "name": "Careerly",
           "title": "Careerly - Quality Online Education for All",
           "url": "/",
           "sameAs": [
              ""
           ],
           "logo": "https://moksy.com/api/build/uploads/83664986/uploads/logo.png",
           "priceRange": "$$$",
           "image": "https://moksy.com/api/build/uploads/83664986/uploads/socialshare.png",
           "description": "Careerly offers quality online education for all. Explore our diverse range of courses and start your educational journey today.",
           "address": {
              "@type": "PostalAddress",
              "streetAddress": "3-5, Marco Polo House, Lansdowne Road",
              "addressLocality": "London",
              "addressRegion": "Surrey",
              "postalCode": "CR0 2BX",
              "addressCountry": "United Kingdom"
           },
           "email": "support@moksy.com",
           "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.37683",
              "longitude": "-0.09728"
           },
           
           "openingHours": "Mo 09:00-17:00 Tu 09:00-17:00 We 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00",
           "telephone": "+44 0808 175 1749",
           "aggregateRating": {
                 "@type": "AggregateRating",
                 "ratingValue": "",
                 "ratingCount": ""
               },
          "datePublished": ""
         }
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
$(document).ready(function () {
    // Handling carousel indicator clicks (images on the left)
    $(".testimonial .tabs li").click(function () {
        // Get the index of the clicked tab
        var i = $(this).index();

        // Activate the corresponding tab
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(this).addClass('active'); // Add 'active' class to the clicked tab

        // Trigger the carousel to move to the respective slide
        $("#carouselExampleIndicators").carousel(i);
    });

    // Sync carousel indicators (dots at the bottom) with tabs
    $(".testimonial .indicators li").click(function () {
        // Get the index of the clicked indicator
        var i = $(this).index();

        // Activate the corresponding tab
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(".testimonial .tabs li").eq(i).addClass('active'); // Add 'active' class to the corresponding tab
    });

    // Add slide change event listener for the carousel
    $("#carouselExampleIndicators").on('slide.bs.carousel', function (e) {
        // Get the index of the next slide
        var nextIndex = $(e.relatedTarget).index();

        // Sync the tabs with the carousel slide
        $(".testimonial .tabs li").removeClass('active'); // Remove 'active' class from all tabs
        $(".testimonial .tabs li").eq(nextIndex).addClass('active'); // Add 'active' class to the corresponding tab
    });

    // Custom pagination numbers for Swiper (if used in another slider)
    $(".slider .swiper-pagination span").each(function (i) {
        $(this).text(i + 1).prepend("0");
    });
});
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
var currentDate = new Date(); var day = currentDate.getDate(); var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; var month = monthNames[currentDate.getMonth()]; var year = currentDate.getFullYear(); document.write(month + ' ' + day + ', ' + year);
document.write(new Date().getFullYear());
Value for custom_js_code