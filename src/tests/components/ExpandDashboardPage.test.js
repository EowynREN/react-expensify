import React from 'react';
import { shallow } from 'enzyme';
import ExpandDashboardPage from '../../components/ExpandDashboardPage';

test('should render ExpandDashboardPage correctly', () => {
    const wrapper = shallow(<ExpandDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});