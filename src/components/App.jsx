import { useState } from 'react';
import { Section } from './Section/Section';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(prevState => (prevState += 1));
      case 'neutral':
        return setNeutral(prevState => (prevState += 1));
      case 'bad':
        return setBad(prevState => (prevState += 1));
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  if (totalFeedback === 0) {
    return (
      <Layout>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      </Layout>
    );
  }
  return (
    <Layout>
      <Section title="Please Leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        <Statistics
          goodGrade={good}
          neutralGrade={neutral}
          badGrade={bad}
          sum={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Layout>
  );
};
