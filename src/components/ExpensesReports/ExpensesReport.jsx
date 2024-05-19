import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import { selectPeriodData } from "../../redux/transactions/selectors";
import CategoryCard from "../CategoryCard/CategoryCard";

import Alcohol from "../CategoriesIcons/Alcohol";
import Products from "../CategoriesIcons/Products";
import Entertainment from "../CategoriesIcons/Entertainment";
import Health from "../CategoriesIcons/Health";
import Transport from "../CategoriesIcons/Transport";
import Housing from "../CategoriesIcons/Housing";
import Technique from "../CategoriesIcons/Technique";
import Other from "../CategoriesIcons/Other";
import Education from "../CategoriesIcons/Education";
import Hobbies from "../CategoriesIcons/Hobbies";
import Communal from "../CategoriesIcons/Communal";
import { setActiveCategory } from "../../redux/transactions/slice";

const ExpensesReport = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const periodData = useSelector(selectPeriodData);

  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const categoryData = [
    {
      amount: periodData?.expenses.expensesData.products?.total || 0,
      Icon: Products,
      category1: "Products",
    },
    {
      amount: periodData?.expenses.expensesData.alcohol?.total || 0,
      Icon: Alcohol,
      category1: "Alcohol",
    },
    {
      amount: periodData?.expenses.expensesData.entertainment?.total || 0,
      Icon: Entertainment,
      category1: "Entertainment",
    },
    {
      amount: periodData?.expenses.expensesData.health?.total || 0,
      Icon: Health,
      category1: "Health",
    },
    {
      amount: periodData?.expenses.expensesData.transport?.total || 0,
      Icon: Transport,
      category1: "Transport",
    },
    {
      amount: periodData?.expenses.expensesData.housing?.total || 0,
      Icon: Housing,
      category1: "Housing",
    },
    {
      amount: periodData?.expenses.expensesData.technique?.total || 0,
      Icon: Technique,
      category1: "Technique",
    },
    {
      amount: periodData?.expenses.expensesData.communal?.total || 0,
      Icon: Communal,
      category1: "Communal",
      category2: "communications",
    },
    {
      amount: periodData?.expenses.expensesData.sport?.total || 0,
      Icon: Hobbies,
      category1: "Sport",
      category2: "hobbies",
    },
    {
      amount: periodData?.expenses.expensesData.education?.total || 0,
      Icon: Education,
      category1: "Education",
    },
    {
      amount: periodData?.expenses.expensesData.other?.total || 0,
      Icon: Other,
      category1: "Other",
    },
  ];

  return (
    <>
      {isMobile ? (
        <Box>
          {[0, 1, 2, 3].map((rowIndex) => (
            <Grid
              key={`mobile-row-${rowIndex}`}
              templateColumns={`repeat(${rowIndex < 3 ? 3 : 2}, 1fr)`}
              gap={4}
              borderBottom="1px"
              borderColor="gray.300"
              pb={2}
              px={rowIndex === 3 ? 8 : 0}
            >
              {categoryData
                .slice(rowIndex * 3, rowIndex * 3 + (rowIndex < 3 ? 3 : 2))
                .map((data, index) => (
                  <CategoryCard
                    key={index}
                    amount={data.amount.toFixed(2)}
                    Icon={data.Icon}
                    category1={data.category1}
                    category2={data.category2}
                    onClick={() => handleCategoryClick(data.category1)}
                  />
                ))}
            </Grid>
          ))}
        </Box>
      ) : (
        <Flex wrap="wrap" justify="center" pb={2} pt={2} gap={5}>
          {categoryData.map((data, index) => (
            <CategoryCard
              key={index}
              amount={data.amount.toFixed(2)}
              Icon={data.Icon}
              category1={data.category1}
              category2={data.category2}
              onClick={() => handleCategoryClick(data.category1)}
            />
          ))}
        </Flex>
      )}
    </>
  );
};
export default ExpensesReport;
