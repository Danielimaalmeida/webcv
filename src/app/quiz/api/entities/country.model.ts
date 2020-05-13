export interface ICountry {
  readonly name: string;
  readonly capital: string;
}

export interface ISingleQuestion {
  questions: Array<ICountry>;
}
