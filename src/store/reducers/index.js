import { combineReducers } from "redux";
import { homeComponents } from "./home-page";
import { EServicesComponents } from "./E-Services";
import { GovernerComponents } from "./Governer";
import { DocumentLibrary } from "./document-library";

export default combineReducers({
  homeComponents,
  EServicesComponents,
  GovernerComponents,
  DocumentLibrary,
});
