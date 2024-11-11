import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Container,
  DetailsCard,
  CountryTitle,
  FlagBackground,
  ChartContainer,
  ChartTitle,
  BorderCountriesList,
  BorderCountryItem,
  BackButton,
  SkeletonBox,
  SkeletonText
} from "../../styles/Details.styles";
import useDetails from "./useDetails";
import { useNavigate } from "react-router-dom";


const Details = () => {
  const navigate = useNavigate();
  const {goToHome, countryDetails, loading} = useDetails()
  const handleBorderCountryClick = (countryCode: string) => {
    navigate(`/countries-detail/${countryCode}`);
  };


  return (
    <Container>
      <DetailsCard>
        <BackButton onClick={goToHome}>HOME</BackButton>

        {loading ? (
          <>
            <SkeletonBox /> 
            <SkeletonText />
            <SkeletonBox style={{ height: "400px" }} />
          </>
        ) : (
          <>
            {countryDetails.flagUrl && (
              <FlagBackground style={{ backgroundImage: `url(${countryDetails.flagUrl})` }} />
            )}
            <CountryTitle>{countryDetails.countryName}</CountryTitle>

            <ChartContainer>
              <ChartTitle>Population Chart</ChartTitle>
              {countryDetails.populationData && (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={countryDetails.populationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </ChartContainer>

            <ChartTitle>Border Countries</ChartTitle>
            {countryDetails.borders && countryDetails.borders.length > 0 ? (
              <BorderCountriesList>
                {countryDetails.borders.map((border) => (
                  <BorderCountryItem key={border.countryCode} onClick={() => handleBorderCountryClick(border.countryCode)}>
                    {border.commonName}
                  </BorderCountryItem>
                ))}
              </BorderCountriesList>
            ) : (
              <p>No border countries available.</p>
            )}
          </>
        )}
      </DetailsCard>
    </Container>
  );
};

export default Details;
