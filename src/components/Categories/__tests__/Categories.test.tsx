import React from 'react';
import { shallow, mount } from 'enzyme';
import Categories from '../Categories';

const mockHandleChangeCategory = jest.fn();

describe('[Categories]', () => {
    it('Should render Categories component without error', () => {
        const component = shallow(
            <Categories categories={['animal', 'fashion']} handleCategoryChange={mockHandleChangeCategory} />,
        );
        expect(component.getElements()).toMatchSnapshot();
    });

    it('Should call handleChangeCategory when category button is clicked', () => {
        const component = mount(
            <Categories categories={['animal', 'fashion']} handleCategoryChange={mockHandleChangeCategory} />,
        );
        component.find('button[id="animal"]').simulate('click');
        expect(mockHandleChangeCategory).toBeCalled();
    });

    it('Should render Error if error prop is present', () => {
        const component = shallow(<Categories categories={[]} error={new Error()} handleCategoryChange={jest.fn()} />);
        expect(component.text()).toMatch('Error');
    });
});
