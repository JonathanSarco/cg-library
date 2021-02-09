import { mockAdditionalQuestion } from "../mocks/mockAdditionalQuestion";
import { AdditionalQuestion } from "../models/AdditionalQuestion.interface";

class AdditionalDataService {

    getAllAdditionalData = () => {
        console.log('Get all additional data: \n', mockAdditionalQuestion);
        return mockAdditionalQuestion;
    }
    
    getAdditionalDataById = (id: string) => {
        const filtered = mockAdditionalQuestion.filter(aq => aq.id === id).pop();
        return filtered;
    }
}

export = new AdditionalDataService();