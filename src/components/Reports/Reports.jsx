import React from "react";
import reportsIcon from "../../assets/bar_chart-24px 1.svg";
import { Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";

const Reports = () => {
  const marginLeft = useBreakpointValue({
    base: "0 auto",
    md: "auto",
  });
  const marginBottom = useBreakpointValue({
    base: "32px",
    md: "none",
  });
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={"8px"}
      marginBottom={marginBottom}
    >
      Reports
      <Link display={"flex"} to={"/reports"}>
        <Image src={reportsIcon} />
      </Link>
    </Flex>
  );
};

export default Reports;
