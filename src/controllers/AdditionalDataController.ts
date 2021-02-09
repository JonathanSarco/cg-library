import { AdditionalQuestion } from "../models/AdditionalQuestion.interface";
import AdditionalDataService from "../services/AdditionalData.service";

class AdditionalDataController {
    
    getAllAdditionalQuestions(): AdditionalQuestion[] {
        return AdditionalDataService.getAllAdditionalData();
    }

    getAdditionalQuestionById(id: string): AdditionalQuestion | undefined {
        return AdditionalDataService.getAdditionalDataById(id);
    }
}

export = new AdditionalDataController();