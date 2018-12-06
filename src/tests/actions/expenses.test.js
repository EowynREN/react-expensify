import {addExpense, editExpense, removeExpense} from "../../actions/expenses";
import uuid from "uuid";

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was the last month rent',
        amount: 10000,
        createAt:1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createAt:0
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note lue' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note lue'
        }
    });
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});