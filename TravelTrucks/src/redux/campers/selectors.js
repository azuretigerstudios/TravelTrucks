export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectCamperDetails = (state) => state.campers.currentCamper;