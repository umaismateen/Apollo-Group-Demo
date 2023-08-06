import React, { useState, useEffect } from "react";
import { Flex, css } from "@chakra-ui/react";
import { useQueryResult } from "../../store/context";
import ReactPaginate from "react-paginate";

const pagination_wrapper = css({
  mt: 12,
  justifyContent: "center",
  ".pagination": {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    listStyleType: "none",
    gap: "0.4rem",
    "li a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      border: "gray 1px solid",
      cursor: "pointer",
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
      height: "40px",
      width: "40px",
      backgroundColor: "black",
    },
    "li.active a": {
      backgroundColor: "#545456",
      color: "white",
    },
    "li.disabled a": {
      color: "grey",
      cursor: "not-allowed",
    },
    "li.disable, li.disabled a": {
      cursor: "not-allowed",
    },
  },
});

const StyledPagination = () => {
  const { queryData, refetch } = useQueryResult();
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    refetch({ page: selectedPage + 1 });
  }, [selectedPage, refetch]);

  return (
    <Flex css={pagination_wrapper}>
      <ReactPaginate
        hrefAllControls
        forcePage={
          queryData?.data?.characters?.info?.pages ? selectedPage : undefined
        }
        containerClassName={"pagination"}
        activeClassName="active"
        pageCount={queryData?.data?.characters?.info?.pages ?? 0}
        breakLabel="..."
        pageRangeDisplayed={2}
        nextLabel=">"
        previousLabel="<"
        renderOnZeroPageCount={null}
        onPageChange={(e) => {
          setSelectedPage(e.selected);
        }}
      />
    </Flex>
  );
};

export default StyledPagination;
