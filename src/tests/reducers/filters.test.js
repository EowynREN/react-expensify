import moment from "moment";
import filtersReducer from '../../reducers/filters';

// '@INIT' is a Redux action, developer never use it to do something
// here we can use '@INIT' action to check if reducer has been correctly setup
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortBy to date', () => {
    const currentSate = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action =  { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentSate, action);

    expect(state.sortBy).toBe('date');
});

test('should setup set start date', () => {
    const startDate = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

test('should setup set end date', () => {
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(moment(0));
});