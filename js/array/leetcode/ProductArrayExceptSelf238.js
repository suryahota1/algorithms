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