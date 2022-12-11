import { toast } from "react-toastify";

const adsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "ADD_AD": {
      toast.success("Added an ad");
      return state;
    }
    case "ADD_AD_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_AD": {
      toast.warn("An ad was removed...");
      return state;
    }
    case "REMOVE_AD_ERR": {
      toast.error("An ad remove error occured....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("An ad status changed...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("An ad status change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default adsReducer;
