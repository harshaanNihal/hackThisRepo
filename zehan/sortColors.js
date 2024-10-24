/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    var zeros = 0;
    var ones = 0;
    console.log(zeros,ones)
    for ( let i = 0 ; i < nums.length ; ++i ) {
        if ( nums[i] === 0 ) zeros++;
        if ( nums[i] === 1 ) ones++;
    }
    
    for ( let i = 0 ; i < zeros ; ++i ) {
        nums[i] = 0;
    }
    
    for ( let i = zeros; i < zeros + ones ; ++i ) {
        nums[i] = 1;
    }
    
    for ( let i = zeros+ones; i < nums.length ; ++i ) {
        nums[i] = 2;
    }
}

// var sortColors = function(nums) {
//     for ( let i = 0 ; i < nums.length ; i++ ) {
//         for (let j = 0; j < nums.length - 1 - i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//             }
//         }

//     }
//     return nums;
// };
