import { Box, Text, Button, Card, Flex, Slider, Select } from 'theme-ui'
import React, { useState } from 'react'

const GDPCardInput = ({ title, subtitle, data = undefined, children = undefined }) => (
    <Flex sx={{ flexDirection: 'column' }}>
        <Text sx={{
            fontSize: 3
        }}>{title}</Text>
        <Box m={1} />
        <Text sx={{
            fontSize: 1
        }}>{subtitle}</Text>
        <Box m={1} />
        {children && children}
    </Flex>
)

const GDPCardInputWithSlider = ({ title, subtitle, name, data, setData, min = 0, max = 2, step = 0.1 }) => (
    <GDPCardInput
        title={title}
        subtitle={subtitle}
    >
        <Flex>
            <Slider
                min={min}
                max={max}
                step={step}
                defaultValue={data[name]}
                onChange={(e) => {
                    let newData = { ...data }
                    newData[name] = Number(e.target.value)
                    setData(newData)
                    }
                }>
            </Slider>
            <Box ml={2} />
            {data[name].toFixed(4)}
        </Flex>
    </GDPCardInput>

)
const GDPCardInputs = ({ gdp }) => {
    const [data, setData] = useState({...gdp.state.data})

    const LOWER_YEAR_BOUND = 1980

    return (
        <Box>
            <Text sx={{ fontSize: 2, fontWeight: 300 }}>
                Define the country's resources
                </Text>
            <Box mb={3} />
            <GDPCardInput
                title='Year'
                subtitle='We could need to hit the 88 miles per hours'
            >
                {<Select sx={{ width: ['100%', '66%'] }} onChange={e => {
                    let newData = { ...data }
                    newData['year'] = Number(e.target.value)
                    setData(newData)
                }}>
                    {[...Array(2020 - LOWER_YEAR_BOUND).keys()].map(i => (
                        <option key={i}>{i + LOWER_YEAR_BOUND}</option>
                    ))}
                </Select>}
            </GDPCardInput>
            <Box mb={4} />
            <GDPCardInputWithSlider
                title='C02'
                subtitle='How much co2 is producted (tons per cap)'
                name='co2'
                max={4}
                step={0.1}
                data={data}
                setData={setData}
            >
            </GDPCardInputWithSlider>
            <Box mb={4} />
            <GDPCardInputWithSlider
                title='Oil'
                subtitle='How much oil is producted (MW-hours)'
                name='oil'
                step={0.01}
                max={10}
                data={data}
                setData={setData}
            >
            </GDPCardInputWithSlider>
            <Box mb={4} />
            <GDPCardInputWithSlider
                title='Eggs'
                subtitle='How much oil is producted (tons per cap)'
                name='eggs'
                max={0.05}
                step={0.001}
                data={data}
                setData={setData}>
            </GDPCardInputWithSlider>
            <Box mb={4} />
            <GDPCardInputWithSlider
                title='Meat'
                subtitle='How much meat is produced (tons per cap)'
                name='meat'
                max={0.5}
                step={0.001}
                data={data}
                setData={setData}>
            </GDPCardInputWithSlider>
            <Box mb={4} />
            <GDPCardInputWithSlider
                title='Urban'
                subtitle='Urbanization of the country (%)'
                name='urban'
                min={0}
                max={100}
                step={1}
                data={data}
                setData={setData}
            >
            </GDPCardInputWithSlider>
            <Box mb={6} />
            <Button sx={{ width: '100%' }} onClick={() => gdp.getPrediction(data)}>GO!</Button>
        </Box>
    )
}


const GDPCardDisplay = ({ gdp }) => (
    <Flex sx={{
        minHeight: '450px',
        flexDirection: 'column'
    }}>
        <Box variant='spacer' />
        <Box sx={{ textAlign: 'center' }}>
            <Text sx={{ fontSize: 6, color: 'primary' }}>{gdp.state.gdp.toFixed(2)}</Text>
            <Text sx={{fontWeight: 300}}>(Int$ per capita)</Text>
        </Box>
        <Box variant='spacer' />
        {Object.keys(gdp.state.data).map(k => (
            <Flex sx={{flexDirection: 'row'}}>
                <Text sx={{fontSize: 1, fontWeight: 200}}>{k.toUpperCase()}:</Text><Box ml={1}/> <Text sx={{fontSize: 1}}>{gdp.state.data[k]}</Text>
            </Flex>
        ))}
        <Box variant='spacer' />
        <Box>
            <Button variant='outline' onClick={() => gdp.wipe()}>Back</Button>
        </Box>
    </Flex>
)

export default function GDPCard({ gdp }) {
    return (
        <Card>
            {gdp.state.gdp !== null ? <GDPCardDisplay gdp={gdp} />
                : <GDPCardInputs gdp={gdp} />}
        </Card>
    )
}
