import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useContainer } from "./useContainer";
import { Container, CountryList, CountryCard, CountryName, CountryCode } from "../../styles/Home.styles";
import Loading from "../../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const { countries } = useContainer();
  const [visibleCountries, setVisibleCountries] = useState(10);

  const loadMoreCountries = () => {
    setVisibleCountries((prev) => prev + 10);
  };

  const countryNavigation = (countryCode: string) => {
    navigate(`/countries-detail/${countryCode}`);
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={visibleCountries} 
        next={loadMoreCountries} 
        hasMore={visibleCountries < countries.length} 
        loader={<Loading />} 
      >
        <CountryList>
          {countries.slice(0, visibleCountries).map((country) => (
            <CountryCard
              key={country.countryCode}
              onClick={() => countryNavigation(country.countryCode)}
              style={{ backgroundImage: `url(${country.flagUrl})` }} 
            >
              <CountryName>{country.name}</CountryName>
              <CountryCode>{country.countryCode}</CountryCode>
            </CountryCard>
          ))}
        </CountryList>
      </InfiniteScroll>
    </Container>
  );
};

export default Home;
