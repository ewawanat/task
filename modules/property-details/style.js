import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  width: 100%;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const InfoText = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
  justify-content: space-between;
  width: 100%;
`;

export const InfoTextWithColouredValue = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
  justify-content: space-between;
  width: 100%;
  & > div:last-child {
    padding: 4px 8px 4px 8px;
    background: ${(props) => props.theme.colors.lightGreen};
    color: ${(props) => props.theme.colors.darkGreen};
    border-radius: 12px;
    font-size: ${(props) => props.theme.typography["s"].fontSize};
    font-weight: ${(props)=> props.theme.typography.fontWeight.semiBold};
  }
`;

export const InfoTextWithBoldValue = styled(InfoText) `
  width: unset;
  margin: 5px 0;
  & > div:nth-child(2) {
    font-weight: bold;
    margin: 0 5px;
  }
`
export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
`;

export const AccountListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;
