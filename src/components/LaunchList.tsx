import { useQuery } from '@apollo/client';
import { PastLaunchesList } from '../queries';
import LaunchCard from './LaunchCard';
import { CardTypes } from './LaunchCard';

function LaunchList() {
  const { loading, error, data } = useQuery(PastLaunchesList);

  if (loading) return <h1 style={{
    color: 'white'
  }}>Loading...</h1>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="card-container" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
    }}>
      {data.launchesPast.map(( launchData: CardTypes["cardData"] ) => (
        <LaunchCard
          key={launchData.id}
          cardData={launchData}
        />
      ))}
    </div>
  );
}

export default LaunchList