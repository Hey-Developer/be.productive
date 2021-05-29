import styled from "styled-components";
import tw from "twin.macro";

export const SidebarWrapper = styled.aside`
  transition: transform 0.3s ease;
  ${tw`flex items-center justify-evenly py-3 bg-appAccent1 text-white text-sm `}
`;

export const Button = styled.button`
  ${tw`text-sm inline-flex items-center justify-center px-3 py-1 border border-transparent  font-medium rounded-md  shadow-lg hover:shadow-xl text-appAccent1 bg-white  focus:outline-none hover:bg-opacity-90 hover:text-appAccent4 my-0`}
`;

export const Input = styled.input`
  ${tw`outline-none mr-2 border-appAccent4 bg-transparent rounded-sm  text-appAccent4 focus:ring-0 focus:ring-offset-transparent focus:ring-transparent`}
`;

//UnUsed but may required later...
//- ${({ open }) => open && tw`translate-y-0`}

// - export const OpenBtn = styled.button`
// -   ${tw`w-8 h-8 rounded-full bg-appAccent4 text-white inline-flex items-center justify-center outline-none border-none shadow-lg focus:outline-none hover:bg-white hover:text-appAccent4 hover:shadow-xl absolute  right-5 top-3`}
// - `;
