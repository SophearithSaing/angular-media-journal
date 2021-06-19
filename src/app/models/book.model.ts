export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: [
      string
    ],
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      },
      {
        type: string;
        identifier: string;
      }
    ],
    readingModes: {
      text: boolean;
      image: boolean;
    },
    pageCount: number,
    printType: string;
    categories: [
      string
    ],
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    },
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    },
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  layerInfo: {
    layers: [
      {
        layerId: string;
        volumeAnnotationsVersion: string;
      }
    ]
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    },
    pdf: {
      isAvailable: boolean;
    },
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}
