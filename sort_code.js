$(function() {
  function Donor(person, dollars) {
    this.person = person;
    this.dollars = dollars;
  }

  Donor.prototype.toHtml = function() {
  return "<li class='donors' data-pledge='"+ this.dollars +"'>" + "Donor" + this.person + "-" + "$" + this.dollars + "</li>";
  }

  function DonorSet() {
    thisDonorSet = this;
    this.donorNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.pledge = [10, 20, 35, 50, 100, 500, 1000];
    $.each(thisDonorSet.donorNum, function() {
      var donorNum = this;
        var pledge = thisDonorSet.pledge[Math.floor(Math.random() * 7)];
        var donor = new Donor(donorNum, pledge);
        $("#donors").append(donor.toHtml());
    });
  }

  var insertionSort = function () {
    var len     = $("li").length,     // number of items in the array
      $current,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section


    for (i=0; i < len; i++) {
        // store the current value because it may shift later
      $current = $("li").eq(i);
      var m = $("li").length
      function doMove() {

        while($current.data("pledge") < $current.prev().data("pledge")) {
          $current.prev().insertAfter($current);

        }
      };
      setTimeout(doMove, 1000);
    }

  }

  donorSet = new DonorSet();
  $("button").on("click", insertionSort);

});














