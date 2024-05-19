import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import { selectPeriodData } from "../../redux/transactions/selectors";
import CategoryCard from "../CategoryCard/CategoryCard";

import Salary from "../CategoriesIcons/Salary";
import Investments from "../CategoriesIcons/AddIncome";
import { setActiveCategory } from "../../redux/transactions/slice";

const IncomeReport = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const periodData = useSelector(selectPeriodData);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const categoryData = [
    {
      amount: periodData?.incomes.incomesData.salary?.total || 0,
      Icon: Salary,
      category1: "Salary",
    },
    {
      amount: periodData?.incomes.incomesData.investments?.total || 0,
      Icon: Investments,
      category1: "Investments",
    },
  ];

  return (
    <>
      {isMobile ? (
        <Box>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            borderBottom="1px"
            borderColor="gray.300"
            pb={2}
            px={8}
          >
            {categoryData.map((data, index) => (
              <CategoryCard
                key={index}
                amount={data.amount.toFixed(2)}
                Icon={data.Icon}
                category1={data.category1}
                onClick={() => handleCategoryClick(data.category1)}
              />
            ))}
          </Grid>
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

export default IncomeReport;
