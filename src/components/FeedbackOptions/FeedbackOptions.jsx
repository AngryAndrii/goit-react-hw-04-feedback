// import PropTypes from 'prop-types';
import { ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(el => (
        <button type="button" key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
      ))}
    </ButtonWrapper>
  );
};
