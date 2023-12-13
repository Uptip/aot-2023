type StreetSuffixTester<
  Address,
  Suffix extends string
> = Address extends `${string}${Suffix}` ? true : false;
