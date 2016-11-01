import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';

class OurLeaderStore extends EventEmitter {
    constructor() {
        super();
        this.rajyaSabhaAttendence = null;
        this.lokSabhaAttendence = null;
    }

    getState() {
        return {
            rajyaSabhaAttendence: this.rajyaSabhaAttendence,
            lokSabhaAttendence: this.lokSabhaAttendence
        }
    }

    updateRajyaSabhaChart(response) {
        this.rajyaSabhaAttendence = response.data;
        this.emit('change');
    }

    updateLokSabhaChart(response) {
        this.lokSabhaAttendence = response.data;
        this.emit('change');
    }

    showErrorMessage(error) {
        this.data = error;
        this.emit('change');
    }

    handelActions(action) {
        switch (action.type) {
            case "GET_RAJYA_SABHA_ATTENDENCE":
                this.updateRajyaSabhaChart(action.value);
            case "GET_LOK_SABHA_ATTENDENCE":
                this.updateLokSabhaChart(action.value);
            case "RESPONSE_DATA_FAILURE":
                this.showErrorMessage(action.value);
            default:
                return;
        }
    }
}

const ourLeaderStore = new OurLeaderStore;
dispatcher.register(ourLeaderStore.handelActions.bind(ourLeaderStore))
export default ourLeaderStore;