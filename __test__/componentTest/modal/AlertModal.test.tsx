import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AlertDialogModal from '@/src/components/Modal/AlertDialogModal';
import { hideModal } from '@/src/store/instructorOptionSlice';

const mockStore = configureMockStore([]);

describe('AlertDialogModal Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      instructorOption: {
        showModal: true,
      },
    });
  });

  test('renders AlertDialogModal correctly', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <AlertDialogModal handleClick={() => {}} />
      </Provider>
    );

    expect(getByText(/Delete Instructor/i)).toBeInTheDocument();
    expect(getByText(/Deleting this Instructor cannot be undone/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /Delete/i })).toBeInTheDocument();
    expect(getByText(/Cancel/i)).toBeInTheDocument();
  });

  test('handles delete button click correctly', () => {
    const handleClickMock = jest.fn();
    const { getByRole } = render(
      <Provider store={store}>
        <AlertDialogModal handleClick={handleClickMock} />
      </Provider>
    );

    fireEvent.click(getByRole('button', { name: /Delete/i }));

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  test('handles cancel button click correctly', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <AlertDialogModal handleClick={() => {}} />
      </Provider>
    );

    fireEvent.click(getByRole('button', { name: /Cancel/i }));

    expect(store.getActions()).toEqual([hideModal()]);
  });
});
