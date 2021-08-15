import {
    SIDEBAR_TOGGLE
} from '../actions/counter.action';

const initialState = {
    isOpenSidebar: true
};

export default function sidebar (store = initialState, { type, payload }) {
    switch (type) {
        case SIDEBAR_TOGGLE:
            return {
                isOpenSidebar: payload.data
            };

        default: return store;
    }
};
