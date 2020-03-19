import { reverse, equal } from './betterStringLib';

describe('reverse', () => {
  it('should reverse string with characters beyond ascii values', () => {
    expect(reverse("foo 𝌆 bar")).toBe("rab 𝌆 oof");
    expect(reverse("foo 𝌆☃★♲你 bar")).toBe("rab 你♲★☃𝌆 oof");
    expect(reverse("foo 𝌆 ☃ ★ ♲ 你 bar")).toBe("rab 你 ♲ ★ ☃ 𝌆 oof"); 
  });
});

describe('equal', () => {
  it('should return true ', () => {
    expect(equal("mañana", "mañana")).toBe(true);
    expect(equal("foo 𝌆☃★♲你 bar", "foo 𝌆☃★♲你 bar")).toBe(true);
  });
  it('should return false ', () => {
    expect(equal("mañana", "maññana")).toBe(false);
    expect(equal("𝌆☃★♲你", "𝌆☃★♲你~")).toBe(false);
  });
});
