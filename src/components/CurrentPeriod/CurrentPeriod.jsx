import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { selectPeriodData } from "../../redux/transactions/selectors";
import { getPeriodData } from "../../redux/transactions/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CurrentPeriod = ({ period, setPeriod }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedPeriod = formatPeriod(period);

    dispatch(getPeriodData(formattedPeriod));
  }, [dispatch, period]);

  const handlePrev = () => {
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 - 1, 1);
    const newPeriod = `${
      monthNames[newDate.getMonth()]
    } ${newDate.getFullYear()}`;
    setPeriod(newPeriod);
  };

  const handleNext = () => {
    const [month, year] = period.split(" ");
    const newDate = new Date(year, monthMap[month] - 1 + 1, 1);
    const newPeriod = `${
      monthNames[newDate.getMonth()]
    } ${newDate.getFullYear()}`;
    setPeriod(newPeriod);
  };

  // Function to format the period from "Month Year" to "yyyy-mm"
  const formatPeriod = (period) => {
    const [month, year] = period.split(" ");
    const monthIndex = monthNames.indexOf(month) + 1;
    const formattedMonth = monthIndex.toString().padStart(2, "0");
    return `${year}-${formattedMonth}`;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthMap = monthNames.reduce((acc, month, index) => {
    acc[month] = index + 1;
    return acc;
  }, {});

  return (
    <Flex flexDirection="column" alignItems="center" gap={2}>
      <Text color="gray.500" fontSize="xs">
        Current period:
      </Text>
      <Flex alignItems="center" gap={2}>
        <IconButton
          aria-label="Previous Month"
          icon={<ArrowLeftIcon />}
          onClick={handlePrev}
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
          {period}
        </Text>
        <IconButton
          aria-label="Next Month"
          icon={<ArrowRightIcon />}
          onClick={handleNext}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default CurrentPeriod;
