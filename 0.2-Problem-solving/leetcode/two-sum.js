// var twoSum = function(nums, target){
//     for(let i = 0; i < nums.length; i++){
//         for(let m = i + 1; m < nums.length; m++){
//             if((nums[i] + nums[m]) === target) return [i, m]
//         }
//     }
//     return false;
// };
// console.log(twoSum([3, 2, 4], 6));

var twoSum = function (nums, target) {
    const leng = nums.length;
    for (let i = 1; i < leng; i++) {
        const remaining = target - nums[i];
        for (let m = i + 1; m < leng; m++){
            if(remaining === nums[m]) return [i, m]
        }
    }
    return false;
};
console.log(twoSum([3, 2, 4], 6));