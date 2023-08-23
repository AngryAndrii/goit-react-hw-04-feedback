import { PercentageP } from './Statistic.styled';

export const Statistics = ({
  goodGrade,
  neutralGrade,
  badGrade,
  sum,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good: {goodGrade}</p>
      <p>Neutral: {neutralGrade}</p>
      <p>Bad: {badGrade}</p>
      <p>Total: {sum}</p>
      <PercentageP $posperc={positivePercentage}>
        Positive feedback: {positivePercentage}%
      </PercentageP>
    </>
  );
};
