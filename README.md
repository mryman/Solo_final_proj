# Solo_final_proj

This project simulates a web page that contains information regarding pledge/donation contributions for something like a charity fundraiser, kickstarter project, etc.  It is intended to simulate a tool that could capture the 15 most recent transactions and I applied a random method so that the pledge denominations are not in any particular order each time the page is loaded.  The random method uses a random number to select one of the 7 different pre-defined pledge dollar amounts that are held in an array.  DOM elements are created that list the representations of these 15 transactions with the donors listed sequentially by number along side their associated random pledge amounts.  The idea is for this to allow participants or event organizers to monitor the progress of the drive.  However, a list of 15 transactions with random contributions does not allow one to visualize overall trends as well as if the list were sorted in ascending order by dollar amounts.  This is where the sort algorithm comes into play to lend some clarity to the output.

I opted to use an algorithm that implements Insertion Sort, as it performs well with small data sets and using a window timer allows the user to see it in action for this scenario.

My initial setup drew directly from the deck-o-cards exercise that we covered in class.  I modified this with my random number method and Stephanie Linqwood helped me sort out some persistent problems I was having with syntax within my constructor functions due to multiple uses of "this".

I worked closely with Ben Mason while trying to implement the actual sort algorithm, as we were both stuck on similar problems with very similar code.  Mel pointed us in the right direction on a few occasions after we repeatedly attempted to use jquery methods that were not properly suited to our intentions.  The sort algorithm, in its most basic form, was originally sourced from this website: http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/.  However, applying jquery methods and switching to a while loop within the outer for loop changed the structure considerably.

The final hurdle to complete the code in its current state was to get the setTimeout window timer to work properly for slowing down the output of the sort.  Again, Mel was a huge help after Ben and I had exhausted every possible idea we could think of over several hours attempting to build this into our respective projects.  Wrapping the code that repositions the DOM elements inside its own function (called doMove) within the outer for loop, and passing in the DOM element that is currently being handled (as a parameter) to the setTimout method allowed me to achieve the desired output.
