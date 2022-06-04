export const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

export const setPending = (state, action) => {
    state.status = 'pending';
    state.error = null;
}

export const setFulfilled = (state, action) => {
    state.status = 'fulfilled';
    state.error = null;
}
