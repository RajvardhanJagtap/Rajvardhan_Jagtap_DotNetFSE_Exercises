import React from 'react';
import { shallow } from 'enzyme';
import CohortDetails from './CohortDetails';

describe('CohortDetails', () => {
  const props = {
    cohort: {
      name: 'Cohort A',
      trainer: 'Trainer One',
      status: 'Ongoing',
      startDate: '01 Jul 2026',
    },
  };

  it('creates the component', () => {
    const wrapper = shallow(<CohortDetails {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the passed props', () => {
    const wrapper = shallow(<CohortDetails {...props} />);
    expect(wrapper.find('h3').text()).toBe('Cohort A');
    expect(wrapper.text()).toContain('Trainer One');
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<CohortDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});