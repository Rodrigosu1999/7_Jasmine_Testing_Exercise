
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: .12,
  }
  )).toBe("2353.67");
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: 0,
  }
  )).toBe(`"Term in Years" and "Yearly Rate" must be more than 0 and can't be text/string`);
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 0,
    rate: .12,
  }
  )).toBe(`"Term in Years" and "Yearly Rate" must be more than 0 and can't be text/string`);
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 0,
    rate: 0,
  }
  )).toBe(`"Term in Years" and "Yearly Rate" must be more than 0 and can't be text/string`);
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: 1,
  }
  )).toBe('"Yearly Rate" must less than 1');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: .12,
  }
  )).toBe("2353.67");
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: .12,
  }
  )).not.toBe("2353.673");
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: .12,
  }
  )).toContain(".");
  expect(calculateMonthlyPayment( {
    amount: 50000,
    years: 2,
    rate: 0,
  }
  )).not.toContain(".");
});

/// etc
