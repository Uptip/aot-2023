type SantasList<
  Goods extends Readonly<unknown[]>,
  Bads extends Readonly<unknown[]>
> = [...Goods, ...Bads];
