export function DocumentLibrary(state = {}, action) {
  switch (action.type) {
    case "Document_Library_LIST":
      return { ...state, documentLibrary: action.payload };
    case "DOCUMENT_TYPE":
      return { ...state, documentLibraryType: action.payload };
    case "DOCUMENT_LIBRARY_DETAILS":
      return { ...state, documentLibraryDetails: action.payload };
    case "CLEAR_DOCUMENT_LIBRARY_DETAILS":
      return { ...state, documentLibraryDetails: action.payload };

    default:
      return state;
  }
}
