describe('SUM challenge: adding two numbers', () => {
	describe("Given the inputs 1 and 2", () => {
		const firstInput = 1;
		const secondInput = 2;

		it('should return 3', () => {
			assert.equal(sum(firstInput, secondInput), 3);
		});
	});
});