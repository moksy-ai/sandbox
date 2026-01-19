{
           "@context": "http://www.schema.org",
           "@type": "ProfessionalService",
           "name": "Infinite",
           "title": "Infinite - Quality Online Learning Experience",
           "url": "/",
           "sameAs": [
              ""
           ],
           "logo": "https://moksy.com/api/build/uploads/78657375/uploads/logo.png",
           "priceRange": "$$$",
           "image": "https://moksy.com/api/build/uploads/78657375/uploads/socialshare.png",
           "description": "Infinite provides a quality online learning experience. Explore our courses and start your educational journey today.",
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
$(".pricing-table-col").on("mouseover", function () {
      var animation = 'swing';  // Use 'swing' animation from Animate.css
      
      $(".pricing-table-col").removeClass("highlight");
      $(".pricing-table-col .action").removeClass("animate__animated animate__" + animation);
      
      $(this).addClass("highlight");
      $(this).find(".action").addClass("animate__animated animate__" + animation);
    });
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
document.write(new Date().getFullYear());
Value for custom_js_code