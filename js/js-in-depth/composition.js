function compose ( ...fns ) {
	return input => fns.reduceRight(( accumulator, fn ) => fn(accumulator), input);
}