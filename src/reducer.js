export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE BEFORE DEPLOYMENT
    //token: 'BQD9ivrxXqQHWxarM7O3VLjo7zNXByvMcQwEMKcrS7VERwQOychJ3nzDlRrd5I4twa4UPK8Y9rzvLsLd31ar8lcr0200uq-hXzpCANvU1xPJD48UvHVVk9fNKfZMZdTXoJnfY-qXAGbIiej-qREj9XC1rgB0WAnPK3oOrTjDsEBOZ0bqvG4iQVVSexxCFVB9YC9UrbvJKx33cb9J',
};

const reducer = (state, action) => {
    console.log(action);

    // Action ->type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }; 

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

            default:
                return state;
    }

}

export default reducer;