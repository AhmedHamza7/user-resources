import { Action } from '@ngrx/store'

// const fixedTime = false

let initState = {
    fixedTime: false
}

export function showFixedTimeCounter(state = initState, action: Action) {
    switch (action.type) {
        case 'show-counter':
            return {
                fixedTime: true
            };
        case 'hide-counter':
            return {
                fixedTime: false
            };
        default:
            return state;
    }
}