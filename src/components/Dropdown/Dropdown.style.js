import styled from 'styled-components';

export const DropdownWrapper = styled.div`
    .trigger-container {
        cursor: pointer;
        top: 0;
        left: 0;
        outline: none;
        border: none;
        width: fit-content;
    }

    .trigger-container.trigger-container-cover {
        width: 100%;
    }
`;

export const DropdownMenu = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: 19px 0;
    border-radius: 15px;
    border: 1px solid #f5f5f7;
    position: absolute;
    z-index: 1000;
    width: fit-content;
`;

export const DropdownItem = styled.div`
    padding: 12px 25px;
    border-bottom: 1px solid #e6e6ec;
    cursor: pointer;
    transition: all ease 0.3s;
    white-space: nowrap;

    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 15px;
    font-weight: 400;
    line-height: 12px;

    :hover {
        background: ${({ theme }) => theme.colors.lightGrey};
    }

    :last-child {
        border-bottom: none;
    }
`;
