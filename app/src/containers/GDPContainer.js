import { Container } from 'unstated'
import axios from 'axios'

class GDPContainer extends Container {
    state = {
        gdp: null,
        data: {
            year: 1985,
            co2: 3,
            oil: 0.5,
            eggs: 0.003016,
            meat: 0.02,
            urban: 32
        }
    }

    API_URL = '/pred'
    
    async getPrediction(data){
        const res = await axios.put(this.API_URL, data)
        const gdp = res.data.pred.gdp
        this.setState({ gdp, data })

    }

    wipe(){
        this.setState({ gdp : null })
    }
   
}

export default new GDPContainer