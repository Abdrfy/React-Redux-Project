export const increment = (byNumber) => {
    return {
        type: 'INCREMENT',
        payload: byNumber
    }
}

export const decrement = (byNumber) => {
    return {
        type: 'DECREMENT',
        payload: byNumber
    }
}

export const switchLoggedState = () => {
    return {
        type: 'SIGN_IN'
    }
}