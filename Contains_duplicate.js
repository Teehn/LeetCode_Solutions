/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length <=1){return false}
    var blnFound = false
    var occurences=0
    for(var i = 0; i < nums.length; i++){
        if (blnFound){return true}
        for(var j = 0; j < nums.length; j++){
            if (nums[i] == nums[j]){
                occurences++
            }

        }
        if(occurences > 1){
            blnFound=true
            }else {occurences = 0}
    }
    return blnFound
};
