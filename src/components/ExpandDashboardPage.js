import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListIFilters';

const ExpandDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpandDashboardPage;