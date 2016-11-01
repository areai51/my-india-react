import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';

class CrimeInStates extends EventEmitter {
    constructor() {
        super();
        this.crimeInStatesData = null;
        
    }

    getState() {
        return {
            crimeInStatesData: this.crimeInStatesData
        }
    }

    getCrimeData(response) {
        this.crimeInStatesData = response.data;
        this.emit('change');
    }

    showErrorMessage(error) {
        this.data = error;
        this.emit('change');
    }

    handelActions(action) {
        switch (action.type) {
            case "GET_CRIME_DATA":
                this.getCrimeData(action.value);
            case "RESPONSE_DATA_FAILURE":
                this.showErrorMessage(action.value);
            default:
                return;
        }
    }
}

const crimeInStatesStore = new CrimeInStates;
dispatcher.register(crimeInStatesStore.handelActions.bind(crimeInStatesStore))
export default crimeInStatesStore;