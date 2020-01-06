/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

//XOR solution

var singleNumber = function(nums) {
    var result;
    for (var i = 0;i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};

//Loop Solution
var singleNumber = function(nums) {
       if (nums.length == 1) {return nums[0]}
    if (nums.length == 0) {return null}

    var Counter = 0
    for(var i = 0; i < nums.length; i++ ){
        Counter = 0
        for(var j = 0; j < nums.length; j++){ 
            if (nums[i]==nums[j]){
                Counter++
            } 
        }
        if (Counter == 1){
            return nums[i]
        }
    }
};
