function next() {
}
function prev() {
    alert("Prev");
}
$(document).ready(function(){
    $("#img1").click(function(){
      if ($(this).attr('src').endsWith('structure0.jpeg')) {
          $(this).attr('src', "static/structure1.jpeg");
      } else if ($(this).attr('src').endsWith('structure1.jpeg')) {
          $(this).attr('src', "static/structure2.jpeg");
      } else if ($(this).attr('src').endsWith('structure2.jpeg')) {
          $(this).attr('src', "static/structure3.jpeg");
      } else if ($(this).attr('src').endsWith('structure3.jpeg')) {
          $(this).attr('src', "static/structure4.jpeg");
      } else if ($(this).attr('src').endsWith('structure4.jpeg')) {
          alert("Arey ho gaya...\nKitna dekhoge ?");
          $(this).attr('src', "static/structure0.jpeg");
      }
    });
    $("#next").click(function(){
        elem = $("#img1");
        if (elem.attr('src').endsWith('structure0.jpeg')) {
            elem.attr('src', "static/structure1.jpeg");
        } else if (elem.attr('src').endsWith('structure1.jpeg')) {
            elem.attr('src', "static/structure2.jpeg");
        } else if (elem.attr('src').endsWith('structure2.jpeg')) {
            elem.attr('src', "static/structure3.jpeg");
        } else if (elem.attr('src').endsWith('structure3.jpeg')) {
            elem.attr('src', "static/structure4.jpeg");
        } else if (elem.attr('src').endsWith('structure4.jpeg')) {
            alert("Arey ho gaya...!!!\nKitna dekhoge?");
            elem.attr('src', "static/structure0.jpeg");
        }
    });
    $("#prev").click(function(){
        elem = $("#img1");
        if (elem.attr('src').endsWith('structure0.jpeg')) {
            alert("Piche kuch nai h, aage dekho!");
        } else if (elem.attr('src').endsWith('structure1.jpeg')) {
            elem.attr('src', "static/structure0.jpeg");
        } else if (elem.attr('src').endsWith('structure2.jpeg')) {
            elem.attr('src', "static/structure1.jpeg");
        } else if (elem.attr('src').endsWith('structure3.jpeg')) {
            elem.attr('src', "static/structure2.jpeg");
        } else if (elem.attr('src').endsWith('structure4.jpeg')) {
            elem.attr('src', "static/structure3.jpeg");
        }
    });
});
