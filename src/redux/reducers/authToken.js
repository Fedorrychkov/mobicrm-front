export const token = (state = [], action) => {
    switch (action.type) {
        case 'ADD_AUTH_TOKEN':
            return [
                ...state,
                {
                    token: action.activity.token
                }
            ]
        default:
            return state;
    }
}
