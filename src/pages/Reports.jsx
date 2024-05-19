import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BalanceReports from "../components/BalanceReports/BalanceReports";
import {
  Flex,
  Image,
  useBreakpointValue,
  Box,
  IconButton,
  Text,
} from "@chakra-ui/react";
import backArrow from "../assets/keyboard_backspace-24px 1.svg";
import CurrentPeriod from "../components/CurrentPeriod/CurrentPeriod";
import ExpensesReport from "../components/ExpensesReports/ExpensesReport";
import IncomeReport from "../components/IncomeReport/IncomeReport";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ExpensesIncomeBar from "../components/ExpensesIncomeBar/ExpensesIncomeBar";
import TransactionCharts from "../components/TransactionCharts/TransactionCharts";
import { setActiveCategory } from "../redux/transactions/slice";
import { useDispatch } from "react-redux";

const Reports = ({ type }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const dispatch = useDispatch();

  const [dataType, setDataType] = useState("expenses");
  const [period, setPeriod] = useState("May 2024");

  const handleSwitch = () => {
    dispatch(setActiveCategory(null));
    setDataType((prevType) =>
      prevType === "expenses" ? "income" : "expenses"
    );
  };

  return (
    <>
      <Box
        m={"0 auto"}
        maxW={["100%", "100%", "768px", "992px", "1280px"]}
        paddingInline={["20px", "32px", "90px"]}
      >
        <Link to={"/"}>
          <Flex gap={2} justifyContent={"flex-start"} alignItems={"center"}>
            <Image src={backArrow} /> {!isMobile && `Main Page`}
          </Flex>
        </Link>
        <CurrentPeriod period={period} setPeriod={setPeriod} />
        <Flex justifyContent={"center"} alignItems={"center"}>
          <BalanceReports />
        </Flex>
        <ExpensesIncomeBar />
        <Flex flexDirection="column" alignItems="center" gap={2}>
          <Flex alignItems="center" gap={2}>
            <IconButton
              onClick={handleSwitch}
              icon={<ArrowLeftIcon />}
              variant="ghost"
            />
            <Text
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              color="black"
              w="32"
            >
              {dataType}
            </Text>
            <IconButton
              onClick={handleSwitch}
              aria-label="Next Month"
              icon={<ArrowRightIcon />}
              variant="ghost"
            />
          </Flex>
        </Flex>
        {dataType === "expenses" && <ExpensesReport />}
        {dataType === "income" && <IncomeReport />}
        <TransactionCharts type={dataType} />
      </Box>
    </>
  );
};

export default Reports;
