import { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const quantity = good + neutral + bad;
    return quantity;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = total ? (good / total) * 100 : 0;
    return Number(percentage).toFixed(0);
  };
  const posPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave your feedback">
        <Buttons addFeedback={addFeedback} options={['good', 'neutral', 'bad']} />
      </Section>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={posPercentage}
          />
        </Section>
      )}
    </>
  );
};

export default Feedback;

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = e => {
//     const name = e.currentTarget.name;
//     this.setState(prev => ({ [name]: prev[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const quantity = good + neutral + bad;
//     return quantity;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const percentage = total ? (this.state.good / total) * 100 : 0;
//     return Number(percentage).toFixed(0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const posPercentage = this.countPositiveFeedbackPercentage();
//     const addFeedback = this.addFeedback;
//     return
//   }
// }

// export default Feedback;
