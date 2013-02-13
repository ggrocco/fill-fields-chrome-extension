describe("Fill fields", function() {
  var fillFields;

  beforeEach(function() {
    fillFields = new FillFields();
    fillFields.fill();
  });

  it("can fill a email field", function() {
   expect($('#email').val()).toBe("text@text.com");
  });

  it("can fill a age field", function() {
   expect($('#age').val()).toBe("1");
  });

  it("can fill a date field", function() {
   expect($('#date').val()).toBe(new Date().toDateString());
  });

  it("can fill a text field", function() {
   expect($('#text').val()).toBe("text");
  });
});