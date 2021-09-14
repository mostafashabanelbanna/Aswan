export function DocumentLibrary(state = {}, action) {
  switch (action.type) {
    case "Document_Library_LIST":
      return { ...state, documentLibrary: action.payload };
    case "DOCUMENT_TYPE":
      return { ...state, documentLibraryType: action.payload };

    default:
      return state;
  }
}
