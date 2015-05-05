describe('Test', function() {
  it('should exist', function() {
    expect(true).toBe(true);
  });
  it('should exist', function() {
    expect(test()).toBe(true);
  });

  it('should sum', function() {
    expect(sum(2,3)).toBe(5);
  });

  it('should sum by five', function(){
  	expect(sumByFive(10)).toBe(15);
  })

  it('should subtract by twice its value', function(){
  	expect(subtractByTwiceItsValue(10)).toBe(-10);
  })
});
