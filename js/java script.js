$(document).ready(function () {
  $(".form").submit(function (event) {
    event.preventDefault();
    var heading = $('.inputclass').val();
    console.log(heading);
    $('main').append(`<section><h1>${heading}</h1></section>`);
    $(".head_pass").find('option').remove()
    $(".head_pass").append('<option>select</option>')
    $("main section h1").each(function (index, value) {
      $(".head_pass").append("<option value" + value + ">" + $(this).text() + "</option>")
      // $(".form_heading").find('option').remove()
      // $(".form_heading").append('<option>select</option>')
      // $("main section h1").each(function (index, value) {
      //   $(".form_heading").append("<option value" + value + ">" + $(this).text() + "</option>")
      // });
    });
  });
  $(".subheading_form").submit(function (event) {
    event.preventDefault();
    var subheading = $('#message-text1').val();
    console.log(subheading, "AAAAAAAAAAAAAAAA")

    var head =  $(".head_pass option:selected").val();
    console.log(head, "BBBBBBBBBBBBBBBBBBBBBBB")
    // console.log((".head_pass").selected());
    // $("main").append(`<div><h3>${subheading}</h3></div>`);
    // var s =$(".head_pass option:selected").val();
    // $(`main section h1:nth-child(${head})`).append(`<div><h3>${subheading}</h3></div>`);
    $("main section:nth-child(" + head + ") ").append("<div><h3>" + subheading + "</h3></div>");

  });
});



