// DUMMY Responses - For Demo Purpose Only

// This will serve as your NoSQL datasource

export default class JWPlayerDS {
  static retrieveVideoDetails(videoId: string): any {
    return [
      {
        id: '12345',
        name: 'Avengers: Endgame',
        summary: 'Adrift in space with no food or water, ......',
        kind: 'Movie',
        ref: 'JWPlayer Data source'
      },
      {
        id: '23456',
        name: 'Avengers: Infinity War',
        summary: 'Adrift in space with no food or water, Tony Stark....',
        kind: 'Movie',
        ref: 'JWPlayer Data source'
      }
    ].find(({ id }) => id === videoId);
  }

  static postVideoDetails(rawData: any): boolean {
    return true;
  }
}