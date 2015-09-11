describe("wordCounter", function(){
  it("Replaces word word with job job", function(){
    expect(findReplace("word word", "word", "job")).to.equal("job job");
  });
  
  it("Replaces only exact match of dog in dog dogma dog with cat ", function(){
    expect(findReplace("dog dogma dog", "dog", "cat")).to.equal("cat dogma cat");
  });
});
