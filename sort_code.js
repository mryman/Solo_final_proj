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
    this.donorNum = [1, 2, 3, 4];
    this.pledge = [10, 20, 35, 50, 100, 500, 1000];
    $.each(thisDonorSet.donorNum, function() {
      var donorNum = this;
        var pledge = thisDonorSet.pledge[Math.floor(Math.random() * 7)];
        var donor = new Donor(donorNum, pledge);
        $("#donors").append(donor.toHtml());
    });
  }

  function insertionSort() {
    var len     = $("li").length,     // number of items in the array
      value,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section


    for (i=0; i < len; i++) {
        // store the current value because it may shift later

      value = $("li").eq(i).attr("data-pledge");
      console.log(value);

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
      for (j=i-1; j > -1 && $("li").eq(j).attr("data-pledge") > value; j--) {
        $("li").eq(j).insertAfter($("li").eq(i));

      }


    }

    //return $("li");
  }

  donorSet = new DonorSet();
  $("button").on("click", insertionSort);

});














