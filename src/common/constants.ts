// REST Status Codes
export enum StatusCodes {
  InternalServerError = 500,
  UnprocessableEntity = 422,
  NotFound = 404,
  Forbidden = 403,
  Duplicate = 409,
  NotAcceptable = 406,
  Unauthorized = 401,
  BadRequest = 400,
  HttpOk = 200,
  Created = 201,
  NoContent = 204
}

export enum StatusMessage {
  InternalServerError = 'Internal Server Error',
  UnprocessableEntity = 'Unprocessable Entity',
  NotFound = 'Not Found',
  Forbidden = 'Forbidden',
  Duplicate = 'Conflict / Duplicate Entry Found',
  Unauthorized = 'Unauthorized',
  BadRequest = 'Bad Request',
  HttpOk = 'OK',
  NoContent = 'No Content',
  NoContents = 'No videos Present',
  NoContentProvider = 'Providers not present currently with us.',
  EmergencyMode = 'Currently in emergency mode',
  CurrentlyIn911Mode = 'Cannot proceed as the server is currently in 911 mode.',
  CannotWriteEmptyResponse = 'Cannot write static file. Empty response.',
  KeywordRemoved = 'Term has been removed in the list',
  NotPresent = 'Video or content is not present in the catalogue.',
  NoDeeplink = 'Deeplink result cannot be displayed right now.',
  NotTVSeries = 'Season details only available for TV Series.',
  NoEpisodeSeries = 'This series has no season/episodes content.',
  LoginDisabled = 'Login is disabled at the moment',
  SomethingWentWrong = 'Something went wrong. Please try again later.',
  PreferencesCleared = 'User preferences has been cleared.',
  UnableToRetrieveInfo = 'Unable to find and retrieve user information.',
  MissingAuthentication = 'Missing authentication'
}
