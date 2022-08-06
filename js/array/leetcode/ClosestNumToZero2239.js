
class ClosestNumToZero2239 {

    find ( nums ) {
        let diff;
        let num;

        for ( let i = 0; i < nums.length; i++ ) {
            const newDiff = nums[i] < 0 ? -nums[i] : nums[i];
            if ( diff === undefined ) {
                diff = newDiff;
                num = nums[i];
            }
            if ( newDiff === diff ) {
                num = nums[i] > num ? nums[i] : num;
            } else if ( newDiff < diff ) {
                num = nums[i];
                diff = newDiff;
            }
        }

        return num;
    }
}

const aab = new ClosestNumToZero2239();
let k = aab.find([2, -1, 1]);
console.log(k);