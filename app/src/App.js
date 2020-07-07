import React from 'react';
import logo from './logo.svg';
import theme from './theme.js'
import { ThemeProvider, Box, Text, Flex } from 'theme-ui'
import { Subscribe, Provider } from 'unstated'
import GDPContainer from './containers/GDPContainer'
import GDPCard from './GDPCard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Box variant='app'>
          <Box variant='vCentering' sx={{ height: '100%'}}>
            <Text sx={{
              fontSize: 5,
              fontWeight: 'body'
            }}>GDP</Text>
            <Text sx={{
              fontSize: 3
            }}>Create your amazing country and see its
            <Text sx={{ color: 'primary' }}>
                GDP</Text>
            </Text>
            <Box mb={[4,6]} />
            <Subscribe to={[GDPContainer]}>
              {gdp => <GDPCard gdp={gdp} />}
            </Subscribe>
          </Box>
        </Box>
      </Provider>
    </ThemeProvider>

  )
}

export default App;
