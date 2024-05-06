QUnit.test("Roman Numeral Converter", function(assert) {
  
  // Testing valid roman to integer conversions
  assert.propEqual(convertRomanToInteger("CCXL"), {value: 240, message: '', result: true}, "TC-1: Convert 'CCXL' to 240");
  assert.propEqual(convertRomanToInteger("MDCL"), {value: 1650, message: '', result: true}, "TC-2: Convert 'MDCL' to 1650");
  assert.propEqual(convertRomanToInteger("DCCCLXXVIII"), {value: 878, message: '', result: true}, "TC-3: Convert 'DCCCLXXVIII' to 878");
  assert.propEqual(convertRomanToInteger("XLV"), {value: 45, message: '', result: true}, "TC-4: Convert 'XLV' to 45");
  assert.propEqual(convertRomanToInteger("MMMDCCXLII"), {value: 3742, message: '', result: true}, "TC-5: Convert 'MMMDCCXLII' to 3742");
  assert.propEqual(convertRomanToInteger("MMCCCI"), {value: 2301, message: '', result: true}, "TC-6: Convert 'MMCCCI' to 2301");

  // Testing invalid roman to integer conversions
  assert.propEqual(convertRomanToInteger("MMMMXII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-7: Convert 'MMMMXII' to 0");
  assert.propEqual(convertRomanToInteger("DDCIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-8: Convert 'DDCIII' to 0");
  assert.propEqual(convertRomanToInteger("CCCCV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-9: Convert 'CCCCV' to 0");
  assert.propEqual(convertRomanToInteger("33"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10: Convert 33 to 0");
  assert.propEqual(convertRomanToInteger("4518"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11: Convert 4518 to 0");
  assert.propEqual(convertRomanToInteger("-673"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12: Convert -673 to 0");

  // Testing valid integer to roman conversions
  assert.equal(convertIntegerToRoman(1), {value: 'I', message: '', result: true}, "TC-13: Convert 1 to 'I'");
  assert.equal(convertIntegerToRoman(256), {value: 'CCLVI', message: '', result: true}, "TC-14: Convert 256 to 'CCLVI'");
  assert.equal(convertIntegerToRoman(3092), {value: 'MMMXCII', message: '', result: true}, "TC-15: Convert 3092 to 'MMMXCII'");
  assert.equal(convertIntegerToRoman(3999), {value: 'MMMCMXCIX', message: '', result: true}, "TC-16: Convert 3999 to 'MMMCMXCIX'");
  assert.equal(convertIntegerToRoman(47), {value: 'XLVII', message: '', result: true}, "TC-17: Convert 47 to 'XLVII'");
  assert.equal(convertIntegerToRoman(2301), {value: 'MMCCCI', message: '', result: true}, "TC-18: Convert 2301 to 'MMCCCI'");

  // Testing invalid integer to roman conversions
  assert.propEqual(convertIntegerToRoman("MMI"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-19: Convert 'MMI' to 0");
  assert.propEqual(convertIntegerToRoman("MMDCCLXXVII"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-20: Convert 'MMDCCLXXVII' to 0");
  assert.propEqual(convertIntegerToRoman(2.5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-21: Convert 2.5 to 0");
  assert.propEqual(convertIntegerToRoman(-2), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-22: Convert -2 to 0");
  assert.propEqual(convertIntegerToRoman(4125), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-23: Convert 4125 to 0");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-24: Convert 0 to 0");

});
