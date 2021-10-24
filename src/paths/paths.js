import configData from "../settings.module.json";

// "MainPath": "http://41.128.217.181:10090/upload/";
// "MainPath": "http://192.168.100.25:802/upload/",
// "MainPath": "http://portal.admin.aswan.gov/upload/",
// const MainPath = configData.MainPath;
// const MainPath = process.env.REACT_APP_MAINPATH;

let MainPath;
if (process.env.NODE_ENV === "development") {
  MainPath = process.env.REACT_APP_MAINPATH_DEV;
} else {
  MainPath = process.env.REACT_APP_MAINPATH_PROD;
}

export const paths = {
  MainSlider: `${MainPath}TouristAttraction/Photo/`,
  ProjectPhoto: `${MainPath}NationalProject/Photo/`,
  ProjectAttachment: `${MainPath}NationalProject/Attachment/`,
  ProjectPhotos: `${MainPath}PhotoLibraryPhoto/Photo/`,
  PhotoLibraryAlbum: `${MainPath}PhotoLibrary/Photo/`,
  ImportantPortalsPhotos: `${MainPath}WebLink/Photo/`,
  NewsPhotos: `${MainPath}News/Photo/`,
  DocumentLibraryPhotos: `${MainPath}Document/Photo/`,
  DocumentLibrarAttachment: `${MainPath}Document/Attachment/`,
  FamousPeople: `${MainPath}StaticContent/Photo/`,
  WebLink: `${MainPath}WebLink/Photo/`,
  Governer: `${MainPath}Governor/Photo/`,
  Leader: `${MainPath}Leader/Photo/`,
  Appointment: `${MainPath}Appointment/Photo/`,
  NavBarCities: `${MainPath}City/Photo/`,
  ParliamentPhotos: `${MainPath}StaticContent/Photo/`,
  SenatePhotos: `${MainPath}StaticContent/Photo/`,
  ads: `${MainPath}Advertisment/photo/`,
  youth: `${MainPath}YouthEmployent/photo/`,
  TouristAttractionSlider: `${MainPath}PhotoLibraryPhoto/Photo/`,
  EventsPhotos: `${MainPath}Event/Photo/`,
  InvestmentPhotos: `${MainPath}Investment/Photo/`,
  StaticContent: `${MainPath}StaticContent/Photo/`,
  OrgChart: `${MainPath}Leader/Photo/`,
  AdsAttachment: `${MainPath}Advertisment/attachment/`,
  ServicesPhoto: `${MainPath}Services/Photo/`,
  NationalCouncil: `${MainPath}NationalCouncil/Photo/`,
  Directory: `${MainPath}Directory/Photo/`,
  DirectoratePhoto: `${MainPath}Plan/Photo/`,
  DirectorateAttachment: `${MainPath}Plan/Attachment/`,
};
