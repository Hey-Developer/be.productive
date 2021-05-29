import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoListWrapper = styled.div`
  ${tw`flex flex-col mt-8`}
`;

export const TodoCategoryTitle = styled.h1`
  ${tw`text-2xl text-appAccent1`}
`;

export const TodoListUl = styled.ul`
  ${tw`my-3`}
`;

export const TodoListLi = styled.li`
  ${tw`p-3 rounded-lg bg-white text-appAccent1 flex items-start overflow-hidden mb-4 opacity-100`}
  ${({ completed }) => completed && tw`opacity-60`}
  transition: opacity 0.3s ease;
`;

export const IncompleteIcon = styled.div`
  ${tw`w-5 h-5 rounded-full border-2 border-appAccent3 mr-2 flex-shrink-0`}
`;

export const CompleteIcon = styled(FontAwesomeIcon)`
  ${tw`mr-2 text-xl text-appAccent3`}
`;
export const TodoTitle = styled.h1`
  ${tw`-mt-1`}
  ${({ completed }) => completed && tw`line-through`}
  transition: text-decoration 0.3s ease;
`;

export const Description = styled.p`
  ${tw`mt-1 text-justify text-gray-500`}
  ${({ showDescription }) => !showDescription && tw`h-0 invisible opacity-0`}
  transition:  height,opacity 0.3s ease;
`;

export const DownIcon = styled.span`
  ${tw` w-5 h-5 inline-flex items-center justify-center p-4 cursor-pointer rounded-full hover:bg-gray-300 transition-colors`}
`;

export const DeleteIcon = styled.span`
  ${tw`inline-flex items-center p-3 cursor-pointer rounded-full hover:bg-gray-300 text-red-500 mr-1`}
`;

export const DateWrapper = styled.div`
  ${tw`flex items-center mt-3`}

  transition:  margin-top 0.3s;

  ${({ showDescription }) => !showDescription && tw`-mt-0`}

  & p {
    ${tw`ml-2 uppercase text-sm`}
  }
`;
