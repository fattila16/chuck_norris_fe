import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import sinon from 'sinon';

describe('[Button]', () => {
    it('Should render Button component without error', () => {
        const component = shallow(<Button />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('Should render out title from props', () => {
        const component = shallow(<Button title="Test" />);
        expect(component.render().text()).toMatch('Test');
    });

    it('Should render button and call the onClick prop function when clicked', () => {
        const onClickSpy = sinon.spy();
        const component = shallow(<Button onClick={onClickSpy} />);
        component.simulate('click');
        sinon.assert.called(onClickSpy);
    });
});
