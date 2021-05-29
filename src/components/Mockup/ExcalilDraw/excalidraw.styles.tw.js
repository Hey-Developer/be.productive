import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`bg-white w-full  flex-1`}
  height:100%;
  transition: width, height 0.3s ease-in-out;
`;

export const ExportWrapper = styled.div`
  background: #fcfefe;
  transition: width 0.3s ease;
  ${tw`flex  items-center justify-between text-sm  p-2 rounded-md shadow-md mb-1 h-11 overflow-hidden `};

  && {
    ${({ open }) => (open ? tw`w-full` : tw`w-12`)}
  }

  & label {
    ${tw`flex-shrink-0`}
  }
`;

export const Button = styled.button`
  && {
    ${({ viewModeEnabled }) => (viewModeEnabled ? tw`mx-2` : tw`mx-0`)}

    ${tw`flex-shrink-0 text-sm inline-flex items-center justify-center px-3 py-1 border border-transparent  font-medium rounded-md  shadow-md hover:shadow-lg  text-white bg-appAccent1 focus:outline-none  hover:bg-appAccent4 hover:text-appAccent1 my-0`}
  }
`;

export const OpenBtn = styled.button`
  && {
    ${tw`flex-shrink-0 w-8 h-8 rounded-full bg-appAccent1 text-white inline-flex items-center justify-center outline-none border-none shadow-md focus:outline-none hover:bg-appAccent4 hover:text-appAccent1 hover:shadow-lg my-0 mr-3 `}
  }
`;
