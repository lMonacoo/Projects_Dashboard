import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import {
  DashboardShowcaseHeader,
  DashboardShowcaseHeaderProps
} from '../../../../components/molecules/dashboardShowcaseHeader';
import { theme } from '../../../../styles';

const initialProps: DashboardShowcaseHeaderProps = {
  buttonLabel: 'Add',
  title: 'Dashboard Showcase',
  buttonCallback: jest.fn()
};

const renderComponent = (props: DashboardShowcaseHeaderProps) => {
  return render(
    <ThemeProvider theme={theme.properties}>
      <DashboardShowcaseHeader {...props} />
    </ThemeProvider>
  );
};

describe('<DashboardShowcaseHeader />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Renders', () => {
    it('should render the title text - title', () => {
      // arrange
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps };
      renderComponent(mockProps);

      // act
      const title = screen.getByText(mockProps.title);

      // assert
      expect(title).toBeInTheDocument();
    });

    it('should render the button text - buttonLabel', () => {
      // arrange
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps };
      renderComponent(mockProps);

      // act
      const button = screen.getByText(mockProps.buttonLabel);

      // assert
      expect(button).toBeInTheDocument();
    });
  });

  describe('Styles', () => {
    it('should render button with correct font color', () => {
      // arrange
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps };
      const expectedColor = theme.properties.colors.greenTertiary;
      renderComponent(mockProps);

      // act
      const button = screen.getByText(mockProps.buttonLabel);

      // assert
      expect(button).toHaveStyle(`color: ${expectedColor}`);
    });

    it('should render button with correct border color', () => {
      // arrange
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps };
      const expectedColor = theme.properties.colors.greenTertiary;
      renderComponent(mockProps);

      // act
      const button = screen.getByText(mockProps.buttonLabel);

      // assert
      expect(button).toHaveStyle(`border-color: ${expectedColor}`);
    });

    it('should render title with correct font color', () => {
      // arrange
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps };
      const expectedColor = theme.properties.colors.greenTertiary;
      renderComponent(mockProps);

      // act
      const title = screen.getByText(mockProps.title);

      // assert
      expect(title).toHaveStyle(`color: ${expectedColor}`);
    });
  });

  describe('Interactions', () => {
    it('should call the buttonCallback function - buttonCallback', () => {
      // arrange
      const callback = jest.fn();
      const mockProps: DashboardShowcaseHeaderProps = { ...initialProps, buttonCallback: callback };
      renderComponent(mockProps);

      // act
      const button = screen.getByText(mockProps.buttonLabel);
      userEvent.click(button);

      // assert
      waitFor(() => expect(callback).toHaveBeenCalledTimes(1));
    });
  });
});
