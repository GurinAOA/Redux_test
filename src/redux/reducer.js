const initialState = [
    {
        title: "Reminder",
        text: 'to buy coffee',
        status: "ACTIVE",
        id: 1
    }
]


export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'POST':
            return [...state, action.payload]
        case 'DEL':
            const newState = state.filter(item => item.id != action.payload)
            return [...newState]
        case 'PUT' :
            const editState = state.map(item=>{
                if(action.payload.id == item.id){
                    item = action.payload
                    return item
                }
                return item
            })
            return [...editState]    
        default:
            return state
    }
}