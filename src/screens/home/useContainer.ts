
import { useEffect, useState } from "react";
import api from "../../services/api/api";
import { ICountry } from "./types";

export const useContainer = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    api.get('/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  return { countries };
};