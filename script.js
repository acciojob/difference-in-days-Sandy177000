var dateDiffInDays = function (date1, date2) {
	const  d1 = new Date(date1);
  const  d2 = new Date(date2);
	let seconds1 = d1.getTime();
	let seconds2 = d2.getTime();
  let fact = 1;
  if(seconds1>seconds2){
    let t = seconds1
    seconds1 = seconds2
    seconds2 = t
    fact = -1;
  }
	const ans = fact*Math.round((seconds2 - seconds1)/(1000*60*60*24));
	return ans;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

