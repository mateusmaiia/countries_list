interface BorderCountry {
  commonName: string;
  countryCode: string;
}

export interface ICountryDetails {
  countryName?: string;
  flagUrl?: string;
  populationData?: { year: number; value: number }[];
  borders?: BorderCountry[];
}
