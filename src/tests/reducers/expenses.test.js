import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description:'New book',
        note: '',
        amount: 32,
        createAt: moment()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(4);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(2);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense by id', () => {
    const amount = 45;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { amount }
    };

    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(3);
    expect(state[0].amount).toBe(amount);
});

test('should not edit expense if id is not found', () => {
    const amount = 126;

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { amount }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});