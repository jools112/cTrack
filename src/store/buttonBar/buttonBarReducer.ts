export interface ButtonBarState {
  dialogOpen: 'none' | 'food' | 'meal' | 'weight' | 'waist';
  selectedWeight: number | undefined;
  selectedWaist: number | undefined;
}

const initialState: ButtonBarState = {
  dialogOpen: 'none',
  selectedWeight: undefined,
  selectedWaist: undefined
};

export const ButtonBarReducer = (
  state = initialState,
  action: any
): ButtonBarState => {
  switch (action.type) {
    case 'BUTTON_BAR_SELECT_DIALOG_ACTION_CREATOR':
      return {
        ...state,
        dialogOpen: action.payload
      };
    default:
      return state;
  }
};
