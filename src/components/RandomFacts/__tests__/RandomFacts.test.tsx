import React from 'react';
import { shallow, mount } from 'enzyme';
import RandomFacts from '../RandomFacts';
import { mock } from 'sinon';

describe('[RandomFacts]', () => {
    const mockFact = {
        value: 'TestFact',
    };
    it('Should render RandomFacts component without error', () => {
        const component = shallow(<RandomFacts randomFact={mockFact} refresh={jest.fn()} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('Should render RandomFacts component and get a new fact if refresh is clicked', () => {
        const mockRefresh = jest.fn();
        const component = mount(<RandomFacts randomFact={mockFact} refresh={mockRefresh} />);
        mockRefresh.mockImplementation(() => component.setProps({ randomFact: { value: 'TestFact2' } }));
        component.find('button').simulate('click');
        component.update();
        expect(mockRefresh).toBeCalled();
        expect(component.find('h2').text()).toMatch('TestFact2');
    });

    it('Should render Error if error prop is present', () => {
        const component = shallow(
            <RandomFacts randomFact={undefined} refresh={jest.fn()} error={new Error('Failed to get random Fact')} />,
        );
        expect(component.text()).toMatch('Error');
    });
});
