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

  function insertionSort() {
    var len     = $("li").length,     // number of items in the array
      value,
      $current,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section


    for (i=0; i < len; i++) {
        // store the current value because it may shift later
      $current = $("li").eq(i);
   //   value = $("li").eq(i).data("pledge");
      console.log($current);

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
     // for (j=i-1; j > -1 && $("li").eq(j).data("pledge") > value; j--) {
      while($current.data("pledge") < $current.prev().data("pledge")) {
        $current.prev().insertAfter($("li").eq(i));
     //   $("li").eq(j).insertAfter($("li").eq(i));

      }

    }

  }

  donorSet = new DonorSet();
  $("button").on("click", insertionSort);

});














