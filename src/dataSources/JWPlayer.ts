// DUMMY Responses - For Demo Purpose Only

// This will serve as your NoSQL datasource

export default class JWPlayerDS {
  static async retrieveVideoDetails(id: string): Promise<any> {
    return {
      id: '12345',
      name: 'The Avengers: Endgame',
      summary: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      kind: 'Movie',
      ref: 'JWPlayer Data source'
    };
  }

  static async postVideoDetails(rawData: any): Promise<boolean> {
    return true;
  }
}