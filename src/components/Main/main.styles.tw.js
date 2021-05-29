import styled from "styled-components";
import tw from "twin.macro";

export const MainWrapper = styled.main`
  width: ${({ maximize }) => (maximize ? "100vw" : "60vw")};
  height: ${({ maximize }) => (maximize ? "100vh" : "70vh")};
  background: rgba(255, 255, 255, 0.3);
  ${tw`rounded-lg absolute shadow-xl z-20`};
  top: 50%;
  right: ${({ maximize }) => (maximize ? 0 : "2.8%")};
  transform: translateY(-50%);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease-in-out;
`;

export const Tabs = styled.div`
  ${tw`flex w-full`}
`;

export const Tab = styled.div`
  ${tw`flex-1 flex items-center justify-center px-2 py-3 text-appAccent4 uppercase tracking-wide font-semibold transition-all  border-b-2 border-transparent cursor-pointer`}

  ${({ value }) => value === 0 && tw`rounded-tl-lg`}
  ${({ value }) => value === 1 && tw`rounded-tr-lg`}

  ${({ selected }) => selected && tw`border-b-2 border-appAccent4`}

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
