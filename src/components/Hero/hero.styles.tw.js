import styled from "styled-components";
import tw from "twin.macro";

export const HeroWrapper = styled.main`
  ${tw`bg-appAccent1 text-appPrimary w-screen h-screen overflow-hidden flex flex-col justify-between relative`}
`;

export const ContentSection = styled.section`
  ${tw`w-1/3 p-10 z-10`}

  & h1 {
    ${tw`text-7xl  font-extrabold tracking-wide`}

    & span {
      ${tw`text-appAccent3 text-8xl`}
    }
  }

  & p {
    ${tw`my-6 tracking-wider`}
  }

  & article {
    ${tw`my-5  flex items-center justify-center`}

    & span {
      ${tw`text-4xl text-appAccent4`}
    }
  }
`;

export const TabBtn = styled.button`
  ${tw`inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md  shadow-lg hover:shadow-xl focus:outline-none z-10`}

  ${({ active }) =>
    active
      ? tw`bg-appAccent4 text-white hover:bg-white hover:text-appAccent4`
      : tw`bg-white text-appAccent4 hover:bg-appAccent4 hover:text-white`}
`;

export const LogoWrapper = styled.div`
  ${tw`flex items-center justify-center rounded-full p-0 bg-appAccent2 w-16 h-16 m-10`}

  & img {
    ${tw`w-full`}
  }
`;

export const HeroBg = styled.img`
  ${tw`object-cover w-full  absolute -right-12 -top-24`}
`;

export const IconWrapper = styled.a`
  ${tw`text-4xl cursor-pointer mr-6 z-20 hover:text-appAccent3`}
`;
