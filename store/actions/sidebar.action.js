import { SIDEBAR_TOGGLE } from 'store/types';

export const sidebarToggle = () => (dispatch, getStore) => {
    const { isOpenSidebar } = getStore().sidebar;

    dispatch({
        type: SIDEBAR_TOGGLE,
        payload: { data: !isOpenSidebar }
    })
};
