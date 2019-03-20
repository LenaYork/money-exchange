// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    if (currency > 1000) {
      return error {"You are rich, my friend! We don't have so much money to exchange!"};
    } else  let h = Math.floor(currency / 50);
			    if (h > 0) {
				    result.H = h;
					currency = currency - (h * 50);
                 }  let q = Math.floor(currency / 25) ;
				    if (q > 0) {
				        result.Q = q;
						currency = currency - (q * 25);
				  }  let d = Math.floor(currency / 10);
				      if  (d > 0) {
					       result.D = d;
						   currency = currency - (d * 10);
					}  let n = Math.floor(currency / 5);
					   if (n > 0) {
					           result.N = n;
						       currency = currency - (n * 5);
					   }  p = Math.floor(currency / 1);
					      if (p > 0) {
						       result.P = p;
                        }
      
     return result;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
