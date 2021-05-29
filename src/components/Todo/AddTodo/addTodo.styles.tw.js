import styled from "styled-components";
import tw from "twin.macro";

export const AddTodoWrapper = styled.div`
  ${tw`flex flex-col`}
`;

export const AddTodoBtn = styled.button`
  ${tw` inline-flex items-center justify-center py-3 bg-appAccent1 text-white rounded-xl focus:outline-none hover:bg-opacity-90 focus:ring-4 focus:ring-appAccent1 focus:ring-opacity-50 mb-4`}
`;

export const AddIcon = styled.span`
  ${tw`inline-flex items-center justify-center p-2 w-9 h-9 bg-appAccent3 text-white rounded-lg mr-3 transition-all hover:rounded-2xl`}
`;

export const AddTodoForm = styled.form`
  ${tw`bg-white shadow-lg rounded-md flex flex-col mb-4 p-4 overflow-hidden `}
`;
export const InputLabel = styled.span`
  ${tw`inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm`}
`;

export const Input = styled.input`
  ${tw` focus:ring-appAccent1 focus:border-appAccent1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300`}
`;

export const TextArea = styled.textarea`
  ${tw`shadow-sm focus:ring-appAccent1 focus:border-appAccent1 mt-1 block w-full sm:text-sm border-gray-300 rounded-md`}
`;

export const DateSelect = styled.div`
  ${tw`flex justify-between flex-1`}
`;

export const DateSelectBtn = styled.button`
  ${tw`py-1 px-2 shadow-sm rounded-md  border border-gray-300 text-appAccent1 `}

  ${({ selected }) => selected && tw`bg-appAccent1 text-white`}
`;

export const DateSelectInput = styled.input`
  ${tw` border-gray-300 rounded-md focus:ring-appAccent1 focus:border-appAccent1`}

  ${({ selected }) => selected && tw`bg-appAccent1 text-white`}
`;

export const SubmitWrapper = styled.div`
  ${tw`flex justify-end flex-1`}
`;

export const SubmitBtn = styled.button`
  ${tw`py-1 px-3 shadow-sm rounded-md bg-appAccent3 text-white ml-5 focus:outline-none focus:ring-4 focus:ring-appAccent3 focus:ring-opacity-50 hover:bg-opacity-90`}

  ${({ cancel }) =>
    cancel &&
    tw` text-appAccent1 bg-white border border-gray-300 hover:bg-red-500 hover:border-transparent hover:text-white focus:ring-4 focus:ring-red-500 focus:ring-opacity-50`}
`;
