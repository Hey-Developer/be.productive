import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const TabPanelWrapper = styled.section`
  height: 93%;
  ${tw`w-full overflow-hidden`}
`;

const TabPanel = ({ value, index, children, ...other }) => {
  return (
    <TabPanelWrapper role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </TabPanelWrapper>
  );
};

export default TabPanel;
