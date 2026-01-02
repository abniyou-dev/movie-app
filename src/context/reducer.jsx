

export const initialVal = () => {
    try {
        const storedVal = localStorage.getItem("movies");
        if (storedVal) {
            console.log('there is data');
            return JSON.parse(storedVal);
        }
    } catch (Err) {
        console.log(Err);
    }
    return {movies : [], total: 0};
}



export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD" : {
            const exist = state.movies.some(mov => mov.Title === action.payload.Title);
            if (exist) return state;
            console.log('added to favorite movies');
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        }
        case "REMOVE" : {
            return {
                ...state,
                movies: state.movies.filter(mov => mov.Title !== action.payload.Title)
            }
        }

        default : return state
    }
}