$(function() {
  function Donor(person, dollars) {
    this.person = person;
    this.dollars = dollars;
}

Donor.prototype.toHtml = function() {
return "<li class='donors'>" + "Donor" + this.person + "-" + "$" + this.dollars + "</li>";
}

function DonorSet() {
  thisDonorSet = this;
  this.donorNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.pledge = [20, 35, 100, 500];
  $.each(thisDonorSet.donorNum, function() {
    var donorNum = this;
      var pledge = thisDonorSet.pledge[Math.floor(Math.random() * 4)];
      var donor = new Donor(donorNum, pledge);
      $("#donors").append(donor.toHtml());
  });
}

//var randomNum = Math.floor((Math.random() * 4) + 1); //Use this for array index to get dollars out of array.  Drop the + 1 so numbers are always between 0 and 3?

donorSet = new DonorSet();
});




















/* Apply this to DOM items after they are successfully showing up on the screen
function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.

        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}
*/
