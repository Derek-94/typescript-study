export interface Country {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
    Premium: any
}

interface Global {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string
}

export interface CovidSummaryResponse {
    Countries: Country[];
    Date: string;
    Global: Global;
    Message: string;
  }

export interface CountrySummaryInfo {
    Country: string,
    CountryCode: string,
    Province: string,
    City: string,
    CityCode: string,
    Lat: string,
    Lon: string,
    Cases: number,
    Status: string,
    Date: string
}

export type CountrySummaryResponse = CountrySummaryInfo[];