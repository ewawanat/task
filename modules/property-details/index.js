/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React, {useEffect, useState} from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import Valuation from "./sections/valuation";
import {
  AccountHeadline, AccountLabel, AccountList, AccountListItem, AccountSection, InfoText, Inset
} from "./style";
import { formatCurrency } from '../../helper-functions/format-currency'

const Detail = ({}) => {
  const [account, setAccount] = useState(null);
    useEffect(() => {
        fetch('/api/account')
            .then((response) => response.json())
            .then((data) => setAccount(data.account))
            .catch((error)=> {
                console.log('Error fetching account data:', error)
        })
    }, []);

    if (!account) {
        return <div>Loading...</div>;
    }

  let mortgage;

  const lastUpdate = new Date(account.lastUpdate);
  if (account && account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
      <Inset>
        <AccountSection>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            {formatCurrency(account.recentValuation.amount)}
          </AccountHeadline>
          <AccountList>
            <AccountListItem>
              <InfoText>
                {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>
                {`Next update ${format(
                    add(lastUpdate, { days: account.updateAfterDays }),
                    "do MMM yyyy"
                )}`}
              </InfoText>
            </AccountListItem>
          </AccountList>
        </AccountSection>
        <AccountSection>
          <AccountLabel>Property details</AccountLabel>
          <RowContainer>
            <AccountList>
              <AccountListItem>
                  <InfoText>{account.name}</InfoText>
              </AccountListItem>
              <AccountListItem>
                  <InfoText>{account.bankName}</InfoText>
              </AccountListItem>
              <AccountListItem>
                  <InfoText>{account.postcode}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
        <Valuation account={account}></Valuation>
        {mortgage && (
            <AccountSection>
              <AccountLabel>Mortgage</AccountLabel>
              <RowContainer
                  // This is a dummy action
                  onClick={() => alert("You have navigated to the mortgage page")}
              >
                <AccountList>
                  <AccountListItem>
                    <InfoText>
                      {formatCurrency(
                          Math.abs(account.associatedMortgages[0].currentBalance)
                      )}
                    </InfoText>
                  </AccountListItem>
                  <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
                </AccountList>
              </RowContainer>
            </AccountSection>
        )}
        <Button
            // This is a dummy action
            onClick={() => alert("You have navigated to the edit account page")}
        >
          Edit account
        </Button>
      </Inset>
  );
};

export default Detail;
