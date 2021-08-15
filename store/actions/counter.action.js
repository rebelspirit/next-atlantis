
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';
export const sidebarToggle = () => (dispatch, getStore) => {
    const { isOpenSidebar } = getStore().sidebar;

    dispatch({
        type: SIDEBAR_TOGGLE,
        payload: { data: !isOpenSidebar }
    })
};
