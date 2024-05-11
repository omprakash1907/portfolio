// class name should be "count"

$(".count").each(countUp);

function countUp() {
  var num = $(this).text();
  var decimal = 0;
  if (num.indexOf(".") > 0) { // if number is Decimal
    decimal = num.toString().split(".")[1].length;
  }
  $(this)
    .prop("Counter", 0.0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(parseFloat(now).toFixed(decimal));
        }
      }
    );
}
