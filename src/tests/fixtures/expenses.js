import moment from "moment";

export default [
    {
        id: '1',
        description:'Gum',
        note: '',
        amount: 99,
        createAt: 0
    },{
        id: '2',
        description:'Rent',
        note: '',
        amount: 187,
        createAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: '3',
        description:'Credit Card',
        note: '',
        amount: 4500,
        createAt: moment(0).add(4, 'days').valueOf()
    }
];