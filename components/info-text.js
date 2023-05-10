import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from '../helper-functions/format-currency';
import { InfoTextWithBoldValue } from "../modules/property-details/style";

const InfoTextWithBoldValueComponent = ({ prefix, value, suffix }) => {
    return (
        <InfoTextWithBoldValue>
            {prefix && <div> {prefix}</div>}
            {value && <div> {' ' + formatCurrency(value) + ' '} </div> }
            {suffix && <div>{suffix}</div>}
        </InfoTextWithBoldValue>
    );
};

InfoTextWithBoldValueComponent.propTypes = {
    prefix: PropTypes.string,
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string,
};
export default InfoTextWithBoldValueComponent;
