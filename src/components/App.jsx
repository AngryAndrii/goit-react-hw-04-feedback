import { Component, useState } from 'react';
import { Section } from './Section/Section';
import { Layout } from './Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState();
  const [bad, setBad] = useState();

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };

  const totalFeedback = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();

  if (totalFeedback === 0) {
    return (
      <Layout>
        <Section title="Please Leave feedback">
          <h1>{title}</h1>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
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
        <h1>{this.title}</h1>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(this.state)}
        />
      </Section>
      <Section title="Statistics">
        <h1>{this.title}</h1>
        <Statistics
          goodGrade={this.state.good}
          neutralGrade={this.state.neutral}
          badGrade={this.state.bad}
          sum={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    </Layout>
  );
};
