{
           "@context": "http://www.schema.org",
           "@type": "ProfessionalService",
           "name": "Web",
           "title": "Web - Online Learning for Skill Enhancement",
           "url": "/",
           "sameAs": [
              ""
           ],
           "logo": "https://moksy.com/api/build/uploads/39465998/uploads/logo.png",
           "priceRange": "$$$",
           "image": "https://moksy.com/api/build/uploads/39465998/uploads/socialshare.png",
           "description": "Enhance your skills with online learning from Web. Discover our courses designed to help you enhance your skills and knowledge.",
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
var currentDate = new Date(); var day = currentDate.getDate(); document.write(day);
var currentDate = new Date(); var monthNamesShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; var month = monthNamesShort[currentDate.getMonth()]; document.write(month);
var currentDate = new Date();currentDate.setMonth(currentDate.getMonth() + 1);var day = currentDate.getDate();document.write(day);
var currentDate = new Date();var monthNamesShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];var nextMonthIndex = (currentDate.getMonth() + 1) % 12;var month = monthNamesShort[nextMonthIndex];document.write(month);
var currentDate = new Date();currentDate.setMonth(currentDate.getMonth() + 5);currentDate.setDate(currentDate.getDate() + 10);var day = currentDate.getDate();document.write(day);
var currentDate = new Date();var monthNamesShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];var monthIndex = (currentDate.getMonth() + 3) % 12;var month = monthNamesShort[monthIndex];document.write(month);
var currentDate = new Date();currentDate.setMonth(currentDate.getMonth() + 9);currentDate.setDate(currentDate.getDate() + 10);var day = currentDate.getDate();document.write(day);
var currentDate = new Date();var monthNamesShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];var month = monthNamesShort[(currentDate.getMonth() + 6) % 12];document.write(month);
document.write(new Date().getFullYear());
Value for custom_js_code