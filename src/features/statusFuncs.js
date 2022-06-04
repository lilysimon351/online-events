export const setError = (state, action) => {
    console.log("rejected")
    state.status = 'rejected';
    state.error = action.payload;
    console.log(state.error)
}

export const setPending = (state, action) => {
    console.log("pending")
    state.status = 'pending';
    state.error = null;
}

export const setFulfilled = (state, action) => {
    console.log("fullfilled")

    state.status = 'fulfilled';
    state.error = null;
}
