/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length
    var tempArr = []
    for (i = 1; i <= k; i++){
        nums.unshift(nums[len-1])
    }
    nums.length=len
};