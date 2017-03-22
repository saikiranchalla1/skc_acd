describe("Testing Two Numbers", function() {
    var a = 4,b = 3;
    beforeEach(function() {
        console.log("Setting up ");
        a = 4,b =3;
    });
    afterEach(function() {
        console.log("Tearing down ");
        a=0,b=0;
    });
    it("Add Numbers", function() {
        expect(AddTwoNumbers(a,b)).toEqual(7);
    });
    it("Multiply Numbers", function() {
        expect(MultiplyTwoNumbers(a,b)).toEqual(12);
    });
    it("Compare Numbers to be Greater Than", function() {
     expect(a).toBeGreaterThan(b);
 });
});
