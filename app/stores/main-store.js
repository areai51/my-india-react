import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';

class MainStore extends EventEmitter {
    constructor() {
        super();
        this.displayInputValue = '';
        this.data = {};
    }

    getState() {
        return {
            displayInputValue: this.displayInputValue,
            data: this.data
        }
    }

    updateState(newValue) {
        this.displayInputValue = newValue;
        this.emit('change');
    }

    updateChart(response) {
        this.data = response.data;
        this.emit('change');
    }

    showErrorMessage(error) {
        this.data = error;
        this.emit('change');
    }

    handelActions(action) {
        switch (action.type) {
            case "UPDATE_INPUT":
                this.updateState(action.value);
            case "RESPONSE_DATA_SUCCESS":
                this.updateChart(action.value);
            case "RESPONSE_DATA_FAILURE":
                this.showErrorMessage(action.value);
            default:
                return;
        }
    }
}

const mainStore = new MainStore;
dispatcher.register(mainStore.handelActions.bind(mainStore))
export default mainStore;