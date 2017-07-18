import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the usage of the camera functionality within Ionic3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of the SMS functionality within Ionic3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This repository shows the usage of the Geolocation functionality within Ionic3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This repository shows the usage of the Vibration functionality within Ionic3',
        owner: USER_LIST[1]
    },
];

export const REPOSITORY_LIST = repositoryList;