class ProductArrayExceptSelf {

    #recMul ( nums, idx, mul1 ) {
        if ( idx == nums.length ) return 1;
        const mul2 = this.recMul(nums, idx + 1, nums[idx] * mul1);
        const retVal = nums[idx] * mul2;
        nums[idx] = mul1 * mul2;
        return retVal;
    }
    productExceptSelf( nums ) {
        this.#recMul(nums, 0, 1);
        return nums;
    }
}

class OptimizedProductArrayExceptSelf {
    productExceptSelf( nums ) {
        const ans = new int[nums.length];
        let mul1 = 1;
        for ( let i = 0; i < nums.length; i++ ) {
            ans[i] = mul1;
            mul1 = nums[i] * mul1;
        }
        mul1 = 1;
        for ( let i = nums.length - 1; i >= 0; i-- ) {
            ans[i] *= mul1;
            mul1 = nums[i] * mul1;
        }
        return ans;
    }
}
