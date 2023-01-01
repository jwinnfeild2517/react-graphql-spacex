import React from 'react';
import './App.css';
import LaunchList from './components/LaunchList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'semantic-ui-css/semantic.min.css'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});


// // query example client
// client.query({
//   query: gql`
//     query GetLaunch {
//       launch(id: "109") {
//         id
//         mission_name
//         details
//         links {
//           flickr_images
//           mission_patch
//         }
//       }
//     }
//   `,
// }).then(({ data }) => console.log(data))

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h2> Space X Launch Tracker <div className='App-logo'>🚀</div></h2>
        <LaunchList />
      </div>
    </ApolloProvider>
  );
}

export default App;
