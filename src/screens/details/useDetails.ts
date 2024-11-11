import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ICountryDetails } from './type';
import api from '../../services/api/api';

export default function useDetails() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();
  const [countryDetails, setCountryDetails] = useState<ICountryDetails>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (countryCode) {
      setLoading(true); 
      api
        .get(`/country-info/${countryCode}`)
        .then((response) => {
          setCountryDetails({
            countryName: response.data.countryName,
            flagUrl: response.data.flagUrl,
            populationData: response.data.populationData,
            borders: response.data.borders,
          });
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching country details:", error);
          setLoading(false); 
        });
    }
  }, [countryCode]);

  const goToHome = () => {
    navigate('/');
  };

  return {countryDetails, loading, goToHome}
}
