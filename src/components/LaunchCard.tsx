import { Card, Image } from 'semantic-ui-react'

export type CardTypes = {
  cardData: {
    "id": string,
    "mission_name": "Starlink-15 (v1.0)",
    "links": {
      "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"
      "flickr_images": string[]
    },
    "rocket": {
      "rocket_name": "Falcon 9"
    },
    "launch_date_utc": "2020-10-24T15:31:00.000Z"
  }
}

const TimeTransForm = (utcTime: string) => {
  const milliSecondsInDay = 1000 * 3600 * 24;
  const rtf = new (Intl as any).RelativeTimeFormat('en');
  const diffInMillicseconds = new Date(utcTime).getTime() - new Date().getTime();
  const diffInDays = Math.round(diffInMillicseconds / milliSecondsInDay);
  return rtf.format(diffInDays, 'day');
}

const LaunchCard = ( { cardData }: CardTypes) => {
  const image =  cardData.links.flickr_images?.[0] || cardData.links.mission_patch_small
  return (
    <Card style={{
      boxShadow: "rgb(204 204 205) 2px 2px 0.714286rem",
      // maxHeight: "500px",
    }}>
      <Image src={ image } wrapped ui={false} />
      <Card.Content>
        <Card.Header>{ cardData.mission_name }</Card.Header>
        <Card.Meta>
          <span className='date'>{ `Launched ${TimeTransForm(cardData.launch_date_utc)}` }</span>
        </Card.Meta>
        <Card.Description>
          <b>RocketName:</b> { cardData.rocket.rocket_name }
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a href='google.com'>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content> */}
    </Card>
  );
}

export default LaunchCard