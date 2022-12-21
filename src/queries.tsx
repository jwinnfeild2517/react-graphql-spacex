import { gql } from '@apollo/client';

export const PastLaunchesList = gql`
  query LaunchesPast {
    launchesPast(limit: 16) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
  }
`;
