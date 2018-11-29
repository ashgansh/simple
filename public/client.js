$(() => {
  $('form').submit(function(event) {
    event.preventDefault();

    return $.post('/pay', {}, res => {
      console.log(res)
    });
  });
});
