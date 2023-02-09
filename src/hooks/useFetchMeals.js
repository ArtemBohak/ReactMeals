import React, { useState, useEffect } from "react";

function useFetchMeals(url) {
  const [mealsData, setMealsData] = useState([]);

  async function fetchGet() {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    response = await response.json();

    return response;
  }

  useEffect(() => {
    fetchGet()
      .then((res) => {
        let meals = [];
        for (let key in res) {
          meals.push(res[key]);
        }
        setMealsData(meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return mealsData;
}

export default useFetchMeals;
