import * as  React from "react";
import { format } from "date-fns";
import { formatCurrency } from '../../../helper-functions/format-currency'
import {
    AccountLabel,
    AccountList,
    AccountListItem,
    AccountSection,
    InfoTextWithColouredValue,
} from "../style";
import RowContainer from "../../../components/row-container";
import InfoTextWithBoldValueComponent from "../../../components/info-text";
import PropTypes from 'prop-types';

const Valuation = ({ account }) => {
  const purchaseDate = format(new Date(account.originalPurchasePriceDate), 'MMMM yyyy' );
  const sincePurchaseRawNumber = account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage = (sincePurchaseRawNumber / account.originalPurchasePrice) * 100;
  const numberOfYearsSincePurchase = parseInt(format(new Date(account.lastUpdate), 'yyyy')) - parseInt(format(new Date(account.originalPurchasePriceDate), 'yyyy'));
  const annualAppreciation = sincePurchasePercentage/ numberOfYearsSincePurchase;

  return (
    <AccountSection>
      <AccountLabel>Valuation Change</AccountLabel>
      <RowContainer
          onClick={() => alert("You have navigated to the valuation change page")}>
          <AccountList>
              <AccountListItem>
                  <InfoTextWithBoldValueComponent prefix='Purchased for' value={account.originalPurchasePrice} suffix={`in ${purchaseDate}`} />
              </AccountListItem>
              <AccountListItem>
                  <InfoTextWithColouredValue>
                      <div>
                          {`Since purchase`}
                      </div>
                      <div>
                          {`${formatCurrency(sincePurchaseRawNumber)} (${sincePurchasePercentage}%)` }
                      </div>
                  </InfoTextWithColouredValue>
              </AccountListItem>
              <AccountListItem>
                  <InfoTextWithColouredValue>
                      <div>
                          {`Annual appreciation`}
                      </div>
                      <div>
                          {`${annualAppreciation}%` }
                      </div>
                  </InfoTextWithColouredValue>
              </AccountListItem>
          </AccountList>
      </RowContainer>
    </AccountSection>
  );
};

Valuation.propTypes = {
    account: PropTypes.shape({
        originalPurchasePrice: PropTypes.number.isRequired,
        originalPurchasePriceDate: PropTypes.string.isRequired,
        recentValuation: PropTypes.shape({
            amount: PropTypes.number.isRequired,
        }).isRequired,
        lastUpdate: PropTypes.string.isRequired,
    }).isRequired,
};
export default Valuation