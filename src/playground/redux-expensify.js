store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('fee'));
// store.dispatch(setTextFilter(''));
//
store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// const demoState = {
//     expenses: [{
//         id: 'aasfsd',
//         description: 'January Rent',
//         note: 'This is the final payment in this address',
//         amount: 54500,
//         createAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };
