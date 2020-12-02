// DUMMY Responses - For Demo Purpose Only

// This will serve as your MySQL datasource

export default class BrightcoveDS {
  static getVideoDetailsById(videoId: string): any {
    return [
      {
        id: '12345',
        title: 'Avengers: Endgame',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends...',
        type: 'Movie',
        ref: 'Brightcove Data Source'
      },
      {
        id: '23456',
        title: 'Avengers: Infinity War',
        synopsis: 'The Avengers: Infinity War Summary',
        type: 'Movie',
        ref: 'Brightcove Data Source'
      }
    ].find(({ id }) => id === videoId);
  }

  static updateVideoDetails(rawData: any): boolean {
    return true;
  }
}