    $(".pricing-table-col").on("mouseover", function () {
      var animation = 'swing';  // Use 'swing' animation from Animate.css
      
      $(".pricing-table-col").removeClass("highlight");
      $(".pricing-table-col .action").removeClass("animate__animated animate__" + animation);
      
      $(this).addClass("highlight");
      $(this).find(".action").addClass("animate__animated animate__" + animation);
    });